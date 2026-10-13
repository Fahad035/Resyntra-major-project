
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  MemoryRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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

const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div>
      <p data-testid="current-path">{location.pathname}</p>
      <p data-testid="redirect-from">
        {location.state?.from || "no-redirect-state"}
      </p>
    </div>
  );
};

describe("ProtectedRoute", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows a spinner while authentication is loading", () => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: false,
      loading: true,
    });

    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <h1>Dashboard Page</h1>
              </ProtectedRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    expect(screen.queryByText("Dashboard Page")).not.toBeInTheDocument();
  });

  it("redirects unauthenticated users to login", () => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: false,
      loading: false,
    });

    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <h1>Dashboard Page</h1>
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <h1>Login Page</h1>
                <LocationDisplay />
              </>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: "Login Page" })
    ).toBeInTheDocument();

    expect(screen.queryByText("Dashboard Page")).not.toBeInTheDocument();
    expect(screen.getByTestId("current-path")).toHaveTextContent("/login");
    expect(screen.getByTestId("redirect-from")).toHaveTextContent("/dashboard");
  });

  it("preserves the requested path and query string when redirecting", () => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: false,
      loading: false,
    });

    render(
      <MemoryRouter initialEntries={["/papers/123?tab=details"]}>
        <Routes>
          <Route
            path="/papers/:id"
            element={
              <ProtectedRoute>
                <h1>Paper Details</h1>
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <h1>Login Page</h1>
                <LocationDisplay />
              </>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Login Page" })).toBeInTheDocument();

    expect(screen.getByTestId("redirect-from")).toHaveTextContent(
      "/papers/123?tab=details"
    );
  });

  it("renders protected content for authenticated users", () => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: true,
      loading: false,
    });

    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <h1>Dashboard Page</h1>
              </ProtectedRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: "Dashboard Page" })
    ).toBeInTheDocument();

    expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
  });

  it("renders nested routes through Outlet when children are not provided", () => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: true,
      loading: false,
    });

    render(
      <MemoryRouter initialEntries={["/workspace"]}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route
              path="/workspace"
              element={<h1>Workspace Page</h1>}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: "Workspace Page" })
    ).toBeInTheDocument();
  });
});