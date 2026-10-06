from datetime import UTC, datetime, timedelta
from unittest.mock import AsyncMock, Mock, patch
from uuid import uuid4

import pytest
from fastapi import HTTPException

from app.models.user import User
from app.modules.auth.schemas import ForgotPasswordRequest, LoginRequest, RegisterRequest, ResetPasswordRequest
from app.modules.auth.service import AuthService


@pytest.fixture
def user():
    return User(
        id=uuid4(),
        email="fahad@example.com",
        username="fahad",
        password_hash="hashed-password",
        is_verified=True,
        role="student",
        is_active=True,
    )


@pytest.fixture
def repo():
    value = Mock()
    value.db = Mock()
    return value


@pytest.mark.asyncio
async def test_register_rejects_duplicate_email(repo, user):
    repo.get_by_email = AsyncMock(return_value=user)
    service = AuthService(repo, Mock())

    with pytest.raises(HTTPException) as exc:
        await service.register(RegisterRequest(email=user.email, username="other", password="password123"))

    assert exc.value.status_code == 400
    assert exc.value.detail == "Email already exists"


@pytest.mark.asyncio
async def test_register_rejects_duplicate_username(repo, user):
    repo.get_by_email = AsyncMock(return_value=None)
    repo.get_by_username = AsyncMock(return_value=user)
    service = AuthService(repo, Mock())

    with pytest.raises(HTTPException) as exc:
        await service.register(RegisterRequest(email="new@example.com", username=user.username, password="password123"))

    assert exc.value.status_code == 400
    assert exc.value.detail == "Username already exists"


@pytest.mark.asyncio
async def test_register_creates_unverified_user_and_sends_email(repo):
    repo.get_by_email = AsyncMock(return_value=None)
    repo.get_by_username = AsyncMock(return_value=None)
    created = User(id=uuid4(), email="new@example.com", username="newuser", password_hash="hash", is_verified=False)
    repo.create = AsyncMock(return_value=created)
    repo.delete_user_auth_tokens = AsyncMock()
    repo.create_auth_token = AsyncMock()
    email = Mock()
    email.send_verification_email = AsyncMock()

    service = AuthService(repo, email)
    with patch("app.modules.auth.service.hash_password", return_value="hash"):
        result = await service.register(RegisterRequest(email=created.email, username=created.username, password="password123"))

    assert result.is_verified is False
    repo.create.assert_awaited_once()
    email.send_verification_email.assert_awaited_once()


@pytest.mark.asyncio
async def test_login_rejects_unverified_user(repo, user):
    user.is_verified = False
    repo.get_by_email = AsyncMock(return_value=user)
    service = AuthService(repo, Mock())

    with patch("app.modules.auth.service.verify_password", return_value=True):
        with pytest.raises(HTTPException) as exc:
            await service.login(LoginRequest(email=user.email, password="password123"))

    assert exc.value.status_code == 403
    assert "verify your email" in exc.value.detail


@pytest.mark.asyncio
async def test_login_returns_access_and_refresh_tokens(repo, user):
    repo.get_by_email = AsyncMock(return_value=user)
    repo.create_refresh_token = AsyncMock()
    service = AuthService(repo, Mock())

    with patch("app.modules.auth.service.verify_password", return_value=True), patch(
        "app.modules.auth.service.create_access_token", return_value="access"
    ), patch("app.modules.auth.service.create_refresh_token", return_value="refresh"):
        result = await service.login(LoginRequest(email=user.email, password="password123"))

    assert result["token"]["access_token"] == "access"
    assert result["token"]["refresh_token"] == "refresh"
    repo.create_refresh_token.assert_awaited_once()


@pytest.mark.asyncio
async def test_login_rejects_wrong_password(repo, user):
    repo.get_by_email = AsyncMock(return_value=user)
    service = AuthService(repo, Mock())

    with patch("app.modules.auth.service.verify_password", return_value=False):
        with pytest.raises(HTTPException) as exc:
            await service.login(LoginRequest(email=user.email, password="wrongpass"))

    assert exc.value.status_code == 401
    assert exc.value.detail == "Invalid email or password"


@pytest.mark.asyncio
async def test_verify_email_marks_user_verified(repo, user):
    user.is_verified = False
    token = SimpleNamespace(
        user_id=user.id,
        expires_at=datetime.now(UTC) + timedelta(hours=1),
    )
    repo.get_auth_token = AsyncMock(return_value=token)
    repo.get_by_id = AsyncMock(return_value=user)
    repo.delete_auth_token = AsyncMock()
    service = AuthService(repo, Mock())

    result = await service.verify_email("verification-token")

    assert result["message"] == "Email verified successfully"
    assert user.is_verified is True
    repo.delete_auth_token.assert_awaited_once_with("verification-token")


@pytest.mark.asyncio
async def test_expired_verification_token_is_rejected(repo):
    token = SimpleNamespace(
        user_id=uuid4(),
        expires_at=datetime.now(UTC) - timedelta(minutes=1),
    )
    repo.get_auth_token = AsyncMock(return_value=token)
    service = AuthService(repo, Mock())

    with pytest.raises(HTTPException) as exc:
        await service.verify_email("expired-token")

    assert exc.value.status_code == 400


@pytest.mark.asyncio
async def test_forgot_password_does_not_disclose_unknown_email(repo):
    repo.get_by_email = AsyncMock(return_value=None)
    service = AuthService(repo, Mock())

    result = await service.forgot_password(ForgotPasswordRequest(email="unknown@example.com"))

    assert "If an account exists" in result["message"]


@pytest.mark.asyncio
async def test_reset_password_updates_hash(repo, user):
    token = SimpleNamespace(
        user_id=user.id,
        expires_at=datetime.now(UTC) + timedelta(minutes=10),
    )
    repo.get_auth_token = AsyncMock(return_value=token)
    repo.get_by_id = AsyncMock(return_value=user)
    repo.delete_auth_token = AsyncMock()
    repo.db.commit = AsyncMock()
    service = AuthService(repo, Mock())

    with patch("app.modules.auth.service.hash_password", return_value="new-hash"):
        result = await service.reset_password(
            ResetPasswordRequest(token="reset-token-12345678901234567890", password="newpassword123")
        )

    assert result["message"] == "Password reset successfully"
    assert user.password_hash == "new-hash"
    repo.db.commit.assert_awaited_once()
