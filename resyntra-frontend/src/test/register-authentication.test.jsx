
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  MemoryRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import toast from "react-hot-toast";
import Register from "@/pages/auth/Register";

const { mockRegister } = vi.hoisted(() => ({
  mockRegister: vi.fn(),
}));

vi.mock("@/hooks/useAuth", () => ({
  default: () => ({
    register: mockRegister,
  }),
}));

vi.mock("@/components/common/ThemeToggle", () => ({
  default: () => <button type="button">Theme toggle</button>,
}));

vi.mock("react-hot-toast", () => ({
  default: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

function CurrentPath() {
  const location = useLocation();
  return <p data-testid="current-path">{location.pathname}</p>;
}

function renderRegister() {
  return render(
    <MemoryRouter initialEntries={["/register"]}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<h1>Login Page</h1>} />
      </Routes>
      <CurrentPath />
    </MemoryRouter>
  );
}

describe("Register Authentication", () => {
  beforeEach(() => {
    mockRegister.mockReset();
    vi.clearAllMocks();
  });

  it("creates an account and navigates to login", async () => {
    const user = userEvent.setup();
    mockRegister.mockResolvedValueOnce({});

    renderRegister();

    await user.type(
      screen.getByPlaceholderText("Choose a username"),
      "fahad_student"
    );

    await user.type(
      screen.getByPlaceholderText("you@example.com"),
      "student@example.com"
    );

    await user.type(
      screen.getByPlaceholderText("Create a password"),
      "ValidPassword123!"
    );

    await user.type(
      screen.getByPlaceholderText("Re-enter your password"),
      "ValidPassword123!"
    );

    await user.click(
      screen.getByRole("button", { name: "Create Account" })
    );

    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalledWith({
        username: "fahad_student",
        email: "student@example.com",
        password: "ValidPassword123!",
      });
    });

    expect(
      await screen.findByRole("heading", { name: "Login Page" })
    ).toBeInTheDocument();

    expect(toast.success).toHaveBeenCalledWith(
      "Account created! Check your email to verify your account."
    );
  });

  it("shows an error when registration fails", async () => {
    const user = userEvent.setup();
    mockRegister.mockRejectedValueOnce(new Error("Registration failed"));

    renderRegister();

    await user.type(
      screen.getByPlaceholderText("Choose a username"),
      "fahad_student"
    );

    await user.type(
      screen.getByPlaceholderText("you@example.com"),
      "student@example.com"
    );

    await user.type(
      screen.getByPlaceholderText("Create a password"),
      "ValidPassword123!"
    );

    await user.type(
      screen.getByPlaceholderText("Re-enter your password"),
      "ValidPassword123!"
    );

    await user.click(
      screen.getByRole("button", { name: "Create Account" })
    );

    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalledTimes(1);
      expect(toast.error).toHaveBeenCalledWith("Registration failed.");
    });

    expect(screen.getByTestId("current-path")).toHaveTextContent(
      "/register"
    );
  });
});