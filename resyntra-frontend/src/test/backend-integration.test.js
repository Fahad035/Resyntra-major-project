
import { describe, it, expect } from "vitest";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000";

describe("Resyntra Backend Integration", () => {
  it("connects to the running FastAPI backend", async () => {
    const response = await fetch(`${API_URL}/openapi.json`);

    expect(response.ok).toBe(true);

    const data = await response.json();

    expect(data.info.title).toBe("Resyntra API");
    expect(data.paths).toHaveProperty("/auth/login");
    expect(data.paths).toHaveProperty("/auth/register");
    expect(data.paths).toHaveProperty("/auth/me");
  });

  it("exposes the login endpoint with POST support", async () => {
    const response = await fetch(`${API_URL}/openapi.json`);
    const data = await response.json();

    expect(data.paths["/auth/login"]).toHaveProperty("post");
  });

  it("exposes the registration endpoint with POST support", async () => {
    const response = await fetch(`${API_URL}/openapi.json`);
    const data = await response.json();

    expect(data.paths["/auth/register"]).toHaveProperty("post");
  });
});