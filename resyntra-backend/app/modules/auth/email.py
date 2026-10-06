import asyncio
import smtplib
from email.message import EmailMessage
from urllib.parse import quote

from app.core.config import settings


class EmailService:
    """Small SMTP service that works with Mailpit locally and normal SMTP in production."""

    async def _send(self, message: EmailMessage) -> None:
        def send_sync():
            with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT, timeout=10) as smtp:
                if settings.SMTP_USERNAME:
                    smtp.starttls()
                    smtp.login(settings.SMTP_USERNAME, settings.SMTP_PASSWORD)
                smtp.send_message(message)

        await asyncio.to_thread(send_sync)

    def _message(self, recipient: str, subject: str, body: str) -> EmailMessage:
        message = EmailMessage()
        message["From"] = f"{settings.SMTP_FROM_NAME} <{settings.SMTP_FROM_EMAIL}>"
        message["To"] = recipient
        message["Subject"] = subject
        message.set_content(body)
        return message

    async def send_verification_email(self, recipient: str, token: str) -> None:
        link = f"{settings.FRONTEND_URL}/verify-email?token={quote(token)}"
        message = self._message(
            recipient,
            "Verify your Resyntra email",
            f"Welcome to Resyntra. Verify your email by opening:\n\n{link}\n\nThis link expires in {settings.EMAIL_VERIFICATION_EXPIRE_HOURS} hours.",
        )
        await self._send(message)

    async def send_password_reset_email(self, recipient: str, token: str) -> None:
        link = f"{settings.FRONTEND_URL}/reset-password?token={quote(token)}"
        message = self._message(
            recipient,
            "Reset your Resyntra password",
            f"We received a request to reset your Resyntra password. Open:\n\n{link}\n\nThis link expires in {settings.PASSWORD_RESET_EXPIRE_MINUTES} minutes.\n\nIf you did not request this, you can ignore this email.",
        )
        await self._send(message)
