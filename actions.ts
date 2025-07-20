"use server";

import { AI } from "./lib/ai";

interface Track {
  track: string;
  description: string;
  matchRank: number;
}

const ai = new AI();

export async function personalityTest(
  formData: Record<string, string | number>
): Promise<Track[]> {
  try {
    const aiResponse = await ai.personalityTest(formData);

    return aiResponse;
  } catch (error) {
    console.error("Error calling AI:", error);
    return [];
  }
}

export async function generateRoadmap(
  formData: Record<string, unknown>
): Promise<unknown> {
  try {
    const aiResponse = await ai.generateRoadmap(formData);

    return aiResponse;
  } catch (error) {
    console.error("Error calling AI:", error);
    return {};
  }
}
