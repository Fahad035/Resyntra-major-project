
import { describe, it, expect, afterEach } from "vitest";
import AxiosMockAdapter from "axios-mock-adapter";

import client from "@/api/client";
import { askQuestion } from "@/api/chat";

const mock = new AxiosMockAdapter(client);

afterEach(() => {
  mock.reset();
  localStorage.clear();
});

describe("Resyntra Chat API", () => {
  it("sends a question and returns the AI response", async () => {
    const paperId = "paper-123";
    const question = "What is the main contribution of this paper?";

    const chatResponse = {
      answer: "The paper proposes a novel approach to academic research.",
    };

    mock.onPost("/chat", {
      paper_id: paperId,
      question,
    }).reply(200, chatResponse);

    const result = await askQuestion(paperId, question);

    expect(result).toEqual(chatResponse);
    expect(result.answer).toContain("novel approach");
  });

  it("sends the expected paper ID and question payload", async () => {
    const paperId = "paper-456";
    const question = "Summarize the methodology.";

    mock.onPost("/chat").reply((config) => {
      const payload = JSON.parse(config.data);

      expect(payload).toEqual({
        paper_id: paperId,
        question,
      });

      return [200, { answer: "The methodology uses experimental evaluation." }];
    });

    const result = await askQuestion(paperId, question);

    expect(result.answer).toContain("experimental evaluation");
  });

  it("propagates backend errors when chat fails", async () => {
    mock.onPost("/chat").reply(500, {
      detail: "Failed to generate an answer",
    });

    await expect(
      askQuestion("paper-789", "What are the limitations?")
    ).rejects.toMatchObject({
      response: {
        status: 500,
        data: {
          detail: "Failed to generate an answer",
        },
      },
    });
  });
});