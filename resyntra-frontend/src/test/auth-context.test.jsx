
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthProvider } from "@/context/AuthContext";
import useAuth from "@/hooks/useAuth";

vi.mock("@/api/auth", () => ({
  loginUser: vi.fn(),
  logoutUser: vi.fn(),
  registerUser: vi.fn(),
}));

import { loginUser, logoutUser } from "@/api/auth";

function AuthTestComponent() {
  const { user, loading, login, logout, isAuthenticated } = useAuth();

  return (
    <div>
      <p data-testid="loading">{String(loading)}</p>
      <p data-testid="authenticated">{String(isAuthenticated)}</p>
      <p data-testid="user">{user?.username || "No user"}</p>

      <button
        onClick={() =>
          login({
            email: "student@example.com",
            password: "ValidPassword123!",
          })
        }
      >
        Test Login
      </button>

      <button onClick={() => logout()}>
        Test Logout
      </button>
    </div>
  );
}

describe("Resyntra AuthContext", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("starts unauthenticated when no session is stored", async () => {
    render(
      <AuthProvider>
        <AuthTestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("loading")).toHaveTextContent("false");
    });

    expect(screen.getByTestId("authenticated")).toHaveTextContent("false");
    expect(screen.getByTestId("user")).toHaveTextContent("No user");
  });

  it("restores a stored user and access token", async () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ username: "fahad_student" })
    );
    localStorage.setItem("access_token", "test-access-token");

    render(
      <AuthProvider>
        <AuthTestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("authenticated")).toHaveTextContent("true");
    });

    expect(screen.getByTestId("user")).toHaveTextContent("fahad_student");
  });

  it("stores tokens and user after successful login", async () => {
    const user = userEvent.setup();

    const mockResponse = {
      token: {
        access_token: "new-access-token",
        refresh_token: "new-refresh-token",
      },
      user: { username: "fahad_student" },
    };

    loginUser.mockResolvedValueOnce(mockResponse);

    render(
      <AuthProvider>
        <AuthTestComponent />
      </AuthProvider>
    );

    await user.click(screen.getByRole("button", { name: "Test Login" }));

    await waitFor(() => {
      expect(loginUser).toHaveBeenCalledWith({
        email: "student@example.com",
        password: "ValidPassword123!",
      });
    });

    await waitFor(() => {
      expect(localStorage.getItem("access_token")).toBe("new-access-token");
      expect(localStorage.getItem("refresh_token")).toBe("new-refresh-token");
      expect(screen.getByTestId("authenticated")).toHaveTextContent("true");
    });

    expect(JSON.parse(localStorage.getItem("user"))).toEqual(
      mockResponse.user
    );
  });

  it("clears the session after logout", async () => {
    const user = userEvent.setup();

    localStorage.setItem("access_token", "test-access-token");
    localStorage.setItem("refresh_token", "test-refresh-token");
    localStorage.setItem(
      "user",
      JSON.stringify({ username: "fahad_student" })
    );

    logoutUser.mockResolvedValueOnce({});

    render(
      <AuthProvider>
        <AuthTestComponent />
      </AuthProvider>
    );

    await user.click(screen.getByRole("button", { name: "Test Logout" }));

    await waitFor(() => {
      expect(screen.getByTestId("authenticated")).toHaveTextContent("false");
    });

    expect(localStorage.getItem("access_token")).toBeNull();
    expect(localStorage.getItem("refresh_token")).toBeNull();
    expect(localStorage.getItem("user")).toBeNull();
  });
});