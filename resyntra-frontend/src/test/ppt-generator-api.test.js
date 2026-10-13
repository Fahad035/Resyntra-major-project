
import { describe, it, expect, afterEach } from "vitest";
import AxiosMockAdapter from "axios-mock-adapter";

import client from "@/api/client";
import pptGeneratorApi from "@/api/pptGenerator";

const mock = new AxiosMockAdapter(client);

afterEach(() => {
  mock.reset();
  localStorage.clear();
});

describe("Resyntra PowerPoint Generator API", () => {
  it("generates a presentation with the requested slide count", async () => {
    const paperId = "paper-123";
    const slides = 12;

    const pptResponse = {
      message: "Presentation generated successfully",
      download_url: "/generated/research-presentation.pptx",
    };

    mock.onPost("/ppt-generator", {
      paper_id: paperId,
      slides,
    }).reply(200, pptResponse);

    const result = await pptGeneratorApi.generate(paperId, slides);

    expect(result).toEqual(pptResponse);
    expect(result.download_url).toContain(".pptx");
  });

  it("uses the default slide count of 10", async () => {
    mock.onPost("/ppt-generator", {
      paper_id: "paper-456",
      slides: 10,
    }).reply(200, {
      message: "Presentation generated successfully",
    });

    const result = await pptGeneratorApi.generate("paper-456");

    expect(result.message).toBe("Presentation generated successfully");
  });

  it("sends the expected paper ID and slide count", async () => {
    mock.onPost("/ppt-generator").reply((config) => {
      const payload = JSON.parse(config.data);

      expect(payload).toEqual({
        paper_id: "paper-789",
        slides: 8,
      });

      return [200, { message: "Presentation request accepted" }];
    });

    const result = await pptGeneratorApi.generate("paper-789", 8);

    expect(result.message).toBe("Presentation request accepted");
  });

  it("propagates errors when presentation generation fails", async () => {
    mock.onPost("/ppt-generator").reply(500, {
      detail: "Presentation generation failed",
    });

    await expect(
      pptGeneratorApi.generate("paper-error", 10)
    ).rejects.toMatchObject({
      response: {
        status: 500,
        data: {
          detail: "Presentation generation failed",
        },
      },
    });
  });
});