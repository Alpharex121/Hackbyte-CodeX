import axios from "axios";

async function generateAudio(promptText) {
  try {
    // Connect to the Google TTS API
    const endpoint =
      "https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=" +
      import.meta.env.VITE_TTS_KEY;

    const payload = {
      audioConfig: {
        audioEncoding: "MP3",
        effectsProfileId: ["small-bluetooth-speaker-class-device"],
        pitch: 0,
        speakingRate: 0.85,
      },
      input: {
        text: promptText,
      },
      voice: {
        languageCode: "en-US",
        name: "en-US-Chirp3-HD-Achernar",
      },
    };

    const response = await axios.post(endpoint, payload);

    // Google TTS returns base64 encoded audio in audioContent
    const audioContent = response.data.audioContent;
    if (!audioContent) {
      throw new Error("No audio content received");
    }

    // Convert base64 to binary
    const audioBlob = base64ToBlob(audioContent, "audio/mp3");

    // Create object URL from blob
    const audioUrl = URL.createObjectURL(audioBlob);
    return audioUrl;
  } catch (error) {
    console.error("Error generating audio:", error);
    throw error;
  }
}

// Helper function to convert base64 to Blob
function base64ToBlob(base64, mimeType) {
  const byteCharacters = atob(base64);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: mimeType });
}

export default generateAudio;
