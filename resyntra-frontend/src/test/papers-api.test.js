
import { describe, it, expect, afterEach } from "vitest";
import AxiosMockAdapter from "axios-mock-adapter";

import client from "@/api/client";
import {
  getPapers,
  getPaper,
  uploadPaper,
  deletePaper,
} from "@/api/papers";

const mock = new AxiosMockAdapter(client);

afterEach(() => {
  mock.reset();
  localStorage.clear();
});

describe("Resyntra Paper API", () => {
  it("fetches all papers successfully", async () => {
    const papers = [
      { id: 1, title: "AI Research Paper" },
      { id: 2, title: "Machine Learning Study" },
    ];

    mock.onGet("/papers").reply(200, papers);

    const result = await getPapers();

    expect(result).toEqual(papers);
    expect(result).toHaveLength(2);
  });

  it("fetches a single paper by ID", async () => {
    const paper = {
      id: 123,
      title: "Generative AI in Research",
    };

    mock.onGet("/papers/123").reply(200, paper);

    const result = await getPaper(123);

    expect(result).toEqual(paper);
    expect(result.id).toBe(123);
  });

  it("uploads a research paper using FormData", async () => {
    const uploadedPaper = {
      id: 456,
      filename: "research.pdf",
      status: "processing",
    };

    mock.onPost("/papers/upload").reply((config) => {
      expect(config.data).toBeInstanceOf(FormData);
      expect(config.data.get("file")).toBeInstanceOf(File);

      return [201, uploadedPaper];
    });

    const file = new File(
      ["Sample research paper content"],
      "research.pdf",
      { type: "application/pdf" }
    );

    const result = await uploadPaper(file);

    expect(result).toEqual(uploadedPaper);
    expect(result.filename).toBe("research.pdf");
  });

  it("deletes a paper by ID", async () => {
    mock.onDelete("/papers/123").reply(200, {
      message: "Paper deleted successfully",
    });

    const result = await deletePaper(123);

    expect(result.message).toBe("Paper deleted successfully");
  });

  it("propagates errors when fetching papers fails", async () => {
    mock.onGet("/papers").reply(500, {
      detail: "Failed to retrieve papers",
    });

    await expect(getPapers()).rejects.toMatchObject({
      response: {
        status: 500,
        data: {
          detail: "Failed to retrieve papers",
        },
      },
    });
  });
});