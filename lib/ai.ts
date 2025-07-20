import { GenerateContentConfig, GoogleGenAI, Type } from "@google/genai";
import { prompts } from "./prompts";

export class AI {
  #ai: GoogleGenAI;
  constructor() {
    console.log("GEMINI_API_KEY", process.env.GEMINI_API_KEY);
    this.#ai = new GoogleGenAI({});
  }
  async ask(
    prompt: string,
    responseSchema?: GenerateContentConfig["responseSchema"]
  ) {
    const response = await this.#ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      ...(responseSchema
        ? {
            config: {
              responseMimeType: "application/json",
              responseSchema,
            },
          }
        : {}),
    });

    console.log("AI response:", response.text, typeof response.text);
    if (!response.text) {
      return [];
    }

    try {
      return JSON.parse(response.text);
    } catch (error) {
      console.error("Error parsing AI response:", error);
      return response.text; // Return raw text if parsing fails
    }
  }

  async personalityTest(formData: Record<string, unknown>) {
    try {
      const answers = Object.entries(formData).reduce((acc, [Key, value]) => {
        return `${acc}${Key}: ${value}\n`;
      }, "");
      const formattedPrompt = prompts.format("personality_test", {
        answers,
      });

      console.log("Formatted prompt:", formattedPrompt);

      const response = await this.ask(formattedPrompt, {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            track: { type: Type.STRING },
            description: { type: Type.STRING },
            matchRank: { type: Type.NUMBER },
          },
        },
      });

      return response;
    } catch (error) {
      console.error("Error during AI personality test:", error);
    }
  }

  async generateRoadmap(formData: Record<string, unknown>) {
    try {
      const formattedPrompt = prompts.format("generate_roadmap", formData);
      console.log("Formatted prompt for roadmap:", formattedPrompt);

      //       {
      //   "id": "unique-id",
      //   "title": "Nom de la tâche ou phase",
      //   "description": "Résumé de l'objectif ou des compétences à acquérir",
      //   "duration": "Nombre de semaines (ou estimation)",
      //   "children": [ ... sous-tâches ... ]
      // }

      const response = await this.ask(formattedPrompt, {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: {
              type: Type.STRING,
            },
            parentId: {
              type: Type.STRING,
            },
            name: {
              type: Type.STRING,
            },
            description: {
              type: Type.STRING,
            },
            duration: {
              type: Type.STRING,
            },
            steps: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: {
                    type: Type.STRING,
                  },
                  details: {
                    type: Type.STRING,
                  },
                  resources: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.STRING,
                    },
                  },
                },
              },
            },
          },
        },
      });

      return response;
    } catch (error) {
      console.error("Error during AI roadmap generation:", error);
    }
  }
}
