import { GoogleGenAI } from "@google/genai";

async function generateImage(prompt) {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

  const contents = prompt;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-exp-image-generation",
    contents: contents,
    config: {
      responseModalities: ["Text", "Image"],
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.text) {
      console.log(part.text);
    } else if (part.inlineData) {
      const base64 = part.inlineData.data;
      const mimeType = part.inlineData.mimeType; // e.g. "image/png"

      // Create a Blob URL
      const blob = new Blob(
        [Uint8Array.from(atob(base64), (c) => c.charCodeAt(0))],
        { type: mimeType }
      );
      const imageUrl = URL.createObjectURL(blob);

      return imageUrl;
    }
  }
}

export default generateImage;
