
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askAadityaAI = async (question: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are the AI Twin of Aaditya Sadhu, a senior IT researcher and student. 
        Aaditya's work is focused on Integrated Systems Architecture and Intelligent Informatics.
        Projects to cite: 
        1. Beacon: A high-performance human-centric compiler (Python/C runtime). 
        2. Combatlas: A strategic defense encyclopedia utilizing Llama 3 for intelligent knowledge retrieval. 
        3. Matoolox: A computational suite for mathematical processing and document automation.
        Maintain a highly professional, academic, and analytical tone. Focus on architectural details and the technical synthesis of his work.`,
        temperature: 0.6,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The neural interface encountered an exception. Please attempt a reconnection shortly.";
  }
};
