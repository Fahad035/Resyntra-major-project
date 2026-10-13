
import { describe, it, expect, afterEach, vi } from "vitest";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import client from "@/api/client";

const mock = new AxiosMockAdapter(client);

afterEach(() => {
  mock.reset();
  localStorage.clear();
  vi.restoreAllMocks();
});

describe("Resyntra API Client", () => {
  it("sends a request successfully", async () => {
    mock.onGet("/test").reply(200, {
      message: "API connection successful",
    });

    const response = await client.get("/test");

    expect(response.status).toBe(200);
    expect(response.data.message).toBe("API connection successful");
  });

  it("attaches the access token to requests", async () => {
    localStorage.setItem("access_token", "test-access-token");

    mock.onGet("/papers").reply((config) => [
      200,
      { authorization: config.headers.Authorization },
    ]);

    const response = await client.get("/papers");

    expect(response.data.authorization).toBe("Bearer test-access-token");
  });

  it("does not attach authorization when no token exists", async () => {
    mock.onGet("/public-test").reply((config) => [
      200,
      { authorization: config.headers.Authorization },
    ]);

    const response = await client.get("/public-test");

    expect(response.data.authorization).toBeUndefined();
  });

  it("rejects failed API responses", async () => {
    mock.onGet("/test-error").reply(500, {
      detail: "Internal server error",
    });

    await expect(client.get("/test-error")).rejects.toMatchObject({
      response: {
        status: 500,
        data: { detail: "Internal server error" },
      },
    });
  });

  it("does not attempt token refresh for login failures", async () => {
    const refreshSpy = vi.spyOn(axios, "post");

    mock.onPost("/auth/login").reply(401, {
      detail: "Invalid credentials",
    });

    await expect(
      client.post("/auth/login", {
        email: "student@example.com",
        password: "wrong-password",
      })
    ).rejects.toMatchObject({
      response: { status: 401 },
    });

    expect(refreshSpy).not.toHaveBeenCalled();
  });

  it("refreshes the access token and retries a failed request", async () => {
    localStorage.setItem("access_token", "expired-access-token");
    localStorage.setItem("refresh_token", "valid-refresh-token");

    const refreshSpy = vi.spyOn(axios, "post").mockResolvedValue({
      data: { access_token: "new-access-token" },
    });

    mock.onGet("/protected").replyOnce(401, {
      detail: "Token expired",
    });

    mock.onGet("/protected").reply((config) => [
      200,
      { authorization: config.headers.Authorization },
    ]);

    const response = await client.get("/protected");

    expect(refreshSpy).toHaveBeenCalledWith(
      expect.stringMatching(/\/auth\/refresh$/),
      { refresh_token: "valid-refresh-token" }
    );

    expect(localStorage.getItem("access_token")).toBe("new-access-token");
    expect(response.status).toBe(200);
    expect(response.data.authorization).toBe("Bearer new-access-token");
  });

  it("clears stored authentication data when token refresh fails", async () => {
    localStorage.setItem("access_token", "expired-access-token");
    localStorage.setItem("refresh_token", "expired-refresh-token");
    localStorage.setItem("user", JSON.stringify({ username: "Fahad" }));

    vi.spyOn(axios, "post").mockRejectedValue(
      new Error("Refresh token expired")
    );

    mock.onGet("/protected").reply(401, {
      detail: "Token expired",
    });

    await expect(client.get("/protected")).rejects.toThrow(
      "Refresh token expired"
    );

    expect(localStorage.getItem("access_token")).toBeNull();
    expect(localStorage.getItem("refresh_token")).toBeNull();
    expect(localStorage.getItem("user")).toBeNull();
  });
});