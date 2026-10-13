
import { describe, it, expect, afterEach } from "vitest";
import AxiosMockAdapter from "axios-mock-adapter";

import client from "@/api/client";
import { summarizePaper } from "@/api/summarizer";

const mock = new AxiosMockAdapter(client);

afterEach(() => {
  mock.reset();
  localStorage.clear();
});

describe("Resyntra Summarizer API", () => {
  it("generates a summary for a paper", async () => {
    const paperId = "paper-123";

    const summaryResponse = {
      summary:
        "This paper explores generative AI techniques for academic research.",
    };

    mock.onPost("/summarizer", { paper_id: paperId }).reply(200, summaryResponse);

    const result = await summarizePaper(paperId);

    expect(result).toEqual(summaryResponse);
    expect(result.summary).toContain("generative AI");
  });

  it("sends the paper ID in the expected request payload", async () => {
    const paperId = "paper-456";

    mock.onPost("/summarizer").reply((config) => {
      const payload = JSON.parse(config.data);

      expect(payload).toEqual({ paper_id: paperId });

      return [200, { summary: "Generated test summary." }];
    });

    const result = await summarizePaper(paperId);

    expect(result.summary).toBe("Generated test summary.");
  });

  it("propagates backend errors when summarization fails", async () => {
    mock.onPost("/summarizer").reply(500, {
      detail: "Summary generation failed",
    });

    await expect(summarizePaper("paper-789")).rejects.toMatchObject({
      response: {
        status: 500,
        data: {
          detail: "Summary generation failed",
        },
      },
    });
  });
});