
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Register from "@/pages/auth/Register";

vi.mock("@/hooks/useAuth", () => ({
  default: () => ({
    register: vi.fn(),
  }),
}));

vi.mock("@/components/common/ThemeToggle", () => ({
  default: () => <button type="button">Theme toggle</button>,
}));

describe("Resyntra Register Page", () => {
  const renderRegister = () =>
    render(
      <MemoryRouter initialEntries={["/register"]}>
        <Register />
      </MemoryRouter>
    );

  it("renders the registration heading", () => {
    renderRegister();

    expect(
      screen.getByText("Create your account")
    ).toBeInTheDocument();
  });

  it("displays the registration description", () => {
    renderRegister();

    expect(
      screen.getByText("Start your AI-powered research journey")
    ).toBeInTheDocument();
  });

  it("renders the username field", () => {
    renderRegister();

    expect(
      screen.getByPlaceholderText("Choose a username")
    ).toBeInTheDocument();
  });

  it("renders the email field", () => {
    renderRegister();

    expect(
      screen.getByPlaceholderText("you@example.com")
    ).toBeInTheDocument();
  });

  it("renders the password field", () => {
    renderRegister();

    expect(
      screen.getByPlaceholderText("Create a password")
    ).toBeInTheDocument();
  });

  it("renders the confirm password field", () => {
    renderRegister();

    expect(
      screen.getByPlaceholderText("Re-enter your password")
    ).toBeInTheDocument();
  });

  it("displays the Create Account button", () => {
    renderRegister();

    expect(
      screen.getByRole("button", { name: "Create Account" })
    ).toBeInTheDocument();
  });

  it("provides a link to the login page", () => {
    renderRegister();

    expect(
      screen.getByRole("link", { name: "Sign in" })
    ).toHaveAttribute("href", "/login");
  });
});