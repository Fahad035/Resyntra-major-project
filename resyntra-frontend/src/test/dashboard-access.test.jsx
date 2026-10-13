
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

const { mockUseAuth } = vi.hoisted(() => ({
  mockUseAuth: vi.fn(),
}));

vi.mock("@/hooks/useAuth", () => ({
  default: () => mockUseAuth(),
}));

vi.mock("@/components/ui/Spinner", () => ({
  default: () => <div data-testid="loading-spinner">Loading...</div>,
}));

const Dashboard = () => <h1>Resyntra Dashboard</h1>;
const Login = () => <h1>Login Page</h1>;

const renderDashboardRoute = (initialEntry = "/dashboard") =>
  render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </MemoryRouter>
  );

describe("Dashboard access control", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("blocks unauthenticated users from the dashboard", () => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: false,
      loading: false,
    });

    renderDashboardRoute();

    expect(
      screen.getByRole("heading", { name: "Login Page" })
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { name: "Resyntra Dashboard" })
    ).not.toBeInTheDocument();
  });

  it("allows authenticated users to access the dashboard", () => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: true,
      loading: false,
    });

    renderDashboardRoute();

    expect(
      screen.getByRole("heading", { name: "Resyntra Dashboard" })
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { name: "Login Page" })
    ).not.toBeInTheDocument();
  });

  it("does not show dashboard content while authentication is loading", () => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: false,
      loading: true,
    });

    renderDashboardRoute();

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { name: "Resyntra Dashboard" })
    ).not.toBeInTheDocument();
  });
});