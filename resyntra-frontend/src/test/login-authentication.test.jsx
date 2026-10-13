
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import Login from "@/pages/auth/Login";

const { mockLogin } = vi.hoisted(() => ({
  mockLogin: vi.fn(),
}));

vi.mock("@/hooks/useAuth", () => ({
  default: () => ({
    login: mockLogin,
  }),
}));

vi.mock("react-hot-toast", () => ({
  default: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

vi.mock("@/components/common/ThemeToggle", () => ({
  default: () => <button type="button">Theme toggle</button>,
}));

function CurrentPath() {
  const location = useLocation();
  return <p data-testid="current-path">{location.pathname}</p>;
}

function renderLogin() {
  return render(
    <MemoryRouter initialEntries={["/login"]}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
      </Routes>
      <CurrentPath />
    </MemoryRouter>
  );
}

describe("Login Authentication", () => {
  beforeEach(() => {
    mockLogin.mockReset();
  });

  it("navigates to dashboard after successful login", async () => {
    const user = userEvent.setup();
    mockLogin.mockResolvedValueOnce({});

    renderLogin();

    await user.type(
      screen.getByPlaceholderText("you@example.com"),
      "student@example.com"
    );

    await user.type(
      screen.getByPlaceholderText("Enter your password"),
      "ValidPassword123!"
    );

    await user.click(
      screen.getByRole("button", { name: "Sign In" })
    );

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith({
        email: "student@example.com",
        password: "ValidPassword123!",
      });
    });

    expect(
      await screen.findByRole("heading", { name: "Dashboard Page" })
    ).toBeInTheDocument();

    expect(screen.getByTestId("current-path")).toHaveTextContent(
      "/dashboard"
    );
  });

  it("shows an error when login fails", async () => {
    const user = userEvent.setup();
    mockLogin.mockRejectedValueOnce(new Error("Login failed"));

    renderLogin();

    await user.type(
      screen.getByPlaceholderText("you@example.com"),
      "student@example.com"
    );

    await user.type(
      screen.getByPlaceholderText("Enter your password"),
      "WrongPassword123!"
    );

    await user.click(
      screen.getByRole("button", { name: "Sign In" })
    );

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledTimes(1);
      expect(toast.error).toHaveBeenCalledWith(
        "Invalid email or password."
      );
    });

    expect(screen.getByTestId("current-path")).toHaveTextContent("/login");
  });
});