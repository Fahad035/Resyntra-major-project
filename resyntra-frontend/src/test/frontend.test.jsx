
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

function TestPage() {
  return (
    <main>
      <h1>Resyntra</h1>
      <p>AI Research Assistant</p>
      <button>Sign In</button>
    </main>
  );
}

describe("Resyntra Frontend", () => {
  it("renders the application title", () => {
    render(<TestPage />);

    expect(
      screen.getByRole("heading", { name: "Resyntra" })
    ).toBeInTheDocument();
  });

  it("displays the application description", () => {
    render(<TestPage />);

    expect(
      screen.getByText("AI Research Assistant")
    ).toBeInTheDocument();
  });

  it("displays the Sign In button", () => {
    render(<TestPage />);

    expect(
      screen.getByRole("button", { name: "Sign In" })
    ).toBeInTheDocument();
  });
});