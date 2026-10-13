
import { describe, it, expect, afterEach } from "vitest";
import AxiosMockAdapter from "axios-mock-adapter";

import api from "@/api/client";
import { generateResearchGap } from "@/api/researchGap";

const mock = new AxiosMockAdapter(api);

afterEach(() => {
  mock.reset();
  localStorage.clear();
});

describe("Resyntra Research Gap Finder API", () => {
  it("generates research gaps successfully", async () => {
    const responseData = {
      topic: "Generative AI in education",
      research_gaps: [
        "Limited evaluation across diverse student groups",
        "Insufficient long-term effectiveness studies",
      ],
    };

    mock.onPost("/research-gap").reply(200, responseData);

    const result = await generateResearchGap({
      paperIds: ["paper-101", "paper-102"],
      topic: "Generative AI in education",
    });

    expect(result).toEqual(responseData);
  });

  it("sends paper IDs and topic in the expected payload", async () => {
    mock.onPost("/research-gap").reply((config) => {
      expect(JSON.parse(config.data)).toEqual({
        paper_ids: ["paper-201", "paper-202"],
        topic: "AI-powered healthcare",
      });

      return [200, { research_gaps: ["Limited real-world validation"] }];
    });

    const result = await generateResearchGap({
      paperIds: ["paper-201", "paper-202"],
      topic: "AI-powered healthcare",
    });

    expect(result.research_gaps).toHaveLength(1);
  });

  it("supports an empty paper ID list", async () => {
    mock.onPost("/research-gap").reply(200, {
      research_gaps: [],
    });

    const result = await generateResearchGap({
      paperIds: [],
      topic: "Machine learning",
    });

    expect(result.research_gaps).toEqual([]);
  });

  it("propagates backend errors", async () => {
    mock.onPost("/research-gap").reply(500, {
      detail: "Research gap analysis failed",
    });

    await expect(
      generateResearchGap({
        paperIds: ["paper-error"],
        topic: "Artificial intelligence",
      })
    ).rejects.toMatchObject({
      response: {
        status: 500,
        data: {
          detail: "Research gap analysis failed",
        },
      },
    });
  });
});