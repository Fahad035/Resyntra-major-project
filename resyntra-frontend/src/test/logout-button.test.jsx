
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";

import CTAButtons from "@/components/navbar/CTAButtons";

const { mockUseAuth, mockLogout } = vi.hoisted(() => ({
  mockUseAuth: vi.fn(),
  mockLogout: vi.fn(),
}));

vi.mock("@/hooks/useAuth", () => ({
  default: () => mockUseAuth(),
}));

vi.mock("@/components/ui", () => ({
  Button: ({ children, onClick, ...props }) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  ),
}));

const LocationDisplay = () => {
  const location = useLocation();
  return <p data-testid="current-path">{location.pathname}</p>;
};

const renderCTAButtons = () =>
  render(
    <MemoryRouter initialEntries={["/dashboard"]}>
      <CTAButtons />
      <LocationDisplay />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
      </Routes>
    </MemoryRouter>
  );

describe("CTAButtons logout", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockUseAuth.mockReturnValue({
      user: { username: "Fahad" },
      isAuthenticated: true,
      logout: mockLogout,
    });
  });

  it("calls logout and navigates home after successful logout", async () => {
    mockLogout.mockResolvedValueOnce(undefined);

    const user = userEvent.setup();
    renderCTAButtons();

    await user.click(screen.getByRole("button", { name: /exit session/i }));

    await waitFor(() => {
      expect(mockLogout).toHaveBeenCalledOnce();
      expect(screen.getByTestId("current-path")).toHaveTextContent("/");
    });

    expect(screen.getByRole("heading", { name: "Home Page" })).toBeInTheDocument();
  });

  it("navigates home even if logout throws an error", async () => {
    mockLogout.mockRejectedValueOnce(new Error("Logout failed"));

    const user = userEvent.setup();
    renderCTAButtons();

    await user.click(screen.getByRole("button", { name: /exit session/i }));

    await waitFor(() => {
      expect(mockLogout).toHaveBeenCalledOnce();
      expect(screen.getByTestId("current-path")).toHaveTextContent("/");
    });

    expect(screen.getByRole("heading", { name: "Home Page" })).toBeInTheDocument();
  });

  it("shows sign-in and registration options when unauthenticated", () => {
    mockUseAuth.mockReturnValue({
      user: null,
      isAuthenticated: false,
      logout: mockLogout,
    });

    renderCTAButtons();

    expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /try for free/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /exit session/i })).not.toBeInTheDocument();
  });
});