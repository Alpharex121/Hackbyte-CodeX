// src/components/StoryDisplay.jsx
import React from "react";

const StoryDisplay = ({ scenes }) => {
  return (
    <div className="mt-8 w-full max-w-lg">
      <h2 className="text-2xl font-semibold mb-4">Teri Story</h2>
      {scenes.map((scene) => (
        <div key={scene.sceneId} className="bg-gray-800 p-4 rounded-lg mb-4 shadow-md">
          <p className="text-gray-300">Scene {scene.sceneId}</p>
          <p className="text-white font-medium">{scene.script}</p>
          <p className="text-gray-400 text-sm mt-2">Image Prompt: {scene.imagePrompt}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryDisplay;