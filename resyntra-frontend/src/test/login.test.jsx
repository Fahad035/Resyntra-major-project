
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "@/pages/auth/Login";

// Mock authentication so tests do not call the real backend.
vi.mock("@/hooks/useAuth", () => ({
  default: () => ({
    login: vi.fn(),
  }),
}));

// Keep the test independent of the application's theme provider.
vi.mock("@/components/common/ThemeToggle", () => ({
  default: () => <button type="button">Theme toggle</button>,
}));

describe("Resyntra Login Page", () => {
  const renderLogin = () =>
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Login />
      </MemoryRouter>
    );

  it("renders the login heading", () => {
    renderLogin();

    expect(
      screen.getByText("Welcome back")
    ).toBeInTheDocument();
  });

  it("displays the login description", () => {
    renderLogin();

    expect(
      screen.getByText("Sign in to continue using Resyntra")
    ).toBeInTheDocument();
  });

  it("renders the email field", () => {
    renderLogin();

    expect(
      screen.getByPlaceholderText("you@example.com")
    ).toBeInTheDocument();
  });

  it("renders the password field", () => {
    renderLogin();

    expect(
      screen.getByPlaceholderText("Enter your password")
    ).toBeInTheDocument();
  });

  it("displays the Sign In button", () => {
    renderLogin();

    expect(
      screen.getByRole("button", { name: "Sign In" })
    ).toBeInTheDocument();
  });

  it("provides a link to the registration page", () => {
    renderLogin();

    expect(
      screen.getByRole("link", { name: "Create account" })
    ).toHaveAttribute("href", "/register");
  });
});