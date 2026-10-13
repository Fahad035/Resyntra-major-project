
import { describe, it, expect, afterEach } from "vitest";
import AxiosMockAdapter from "axios-mock-adapter";

import api from "@/api/axios";
import {
  hybridSearch,
  semanticSearch,
  searchPapers,
} from "@/api/search";

const mock = new AxiosMockAdapter(api);

afterEach(() => {
  mock.reset();
  localStorage.clear();
});

describe("Resyntra Search API", () => {
  it("performs hybrid search with the expected payload", async () => {
    const responseData = {
      results: [
        { id: "paper-1", title: "AI Research Methods" },
      ],
    };

    mock.onPost("/search/hybrid", {
      query: "artificial intelligence",
      limit: 5,
    }).reply(200, responseData);

    const result = await hybridSearch("artificial intelligence", 5);

    expect(result).toEqual(responseData);
    expect(result.results).toHaveLength(1);
  });

  it("performs semantic search with the default limit", async () => {
    mock.onPost("/search/semantic", {
      query: "machine learning applications",
      limit: 10,
    }).reply(200, {
      results: [{ id: "paper-2", title: "Machine Learning Applications" }],
    });

    const result = await semanticSearch("machine learning applications");

    expect(result.results[0].id).toBe("paper-2");
  });

  it("searches papers with query parameters", async () => {
    mock.onGet("/search/papers", {
      params: {
        q: "deep learning",
        limit: 15,
      },
    }).reply(200, {
      results: [{ id: "paper-3", title: "Deep Learning Overview" }],
    });

    const result = await searchPapers("deep learning", 15);

    expect(result.results).toHaveLength(1);
    expect(result.results[0].title).toBe("Deep Learning Overview");
  });

  it("uses the default limit when searching papers", async () => {
    mock.onGet("/search/papers", {
      params: {
        q: "neural networks",
        limit: 20,
      },
    }).reply(200, {
      results: [],
    });

    const result = await searchPapers("neural networks");

    expect(result.results).toEqual([]);
  });

  it("propagates errors when semantic search fails", async () => {
    mock.onPost("/search/semantic").reply(500, {
      detail: "Semantic search failed",
    });

    await expect(
      semanticSearch("research query")
    ).rejects.toMatchObject({
      response: {
        status: 500,
        data: {
          detail: "Semantic search failed",
        },
      },
    });
  });
});