
import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Login from "@/pages/auth/Login";

const mockLogin = vi.fn();

vi.mock("@/hooks/useAuth", () => ({
  default: () => ({
    login: mockLogin,
  }),
}));

vi.mock("@/components/common/ThemeToggle", () => ({
  default: () => <button type="button">Theme toggle</button>,
}));

describe("Login Form Validation", () => {
  const renderLogin = () =>
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Login />
      </MemoryRouter>
    );

  it("does not submit when all fields are empty", async () => {
    const user = userEvent.setup();
    mockLogin.mockClear();

    renderLogin();

    await user.click(
      screen.getByRole("button", { name: "Sign In" })
    );

    await waitFor(() => {
      expect(mockLogin).not.toHaveBeenCalled();
    });
  });

  it("does not submit when the email is invalid", async () => {
    const user = userEvent.setup();
    mockLogin.mockClear();

    renderLogin();

    await user.type(
      screen.getByPlaceholderText("you@example.com"),
      "invalid-email"
    );

    await user.type(
      screen.getByPlaceholderText("Enter your password"),
      "TestPassword123!"
    );

    await user.click(
      screen.getByRole("button", { name: "Sign In" })
    );

    await waitFor(() => {
      expect(mockLogin).not.toHaveBeenCalled();
    });
  });
});