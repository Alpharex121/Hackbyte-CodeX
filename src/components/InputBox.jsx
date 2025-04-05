// src/components/InputBox.jsx
import React, { useState } from "react";

const InputBox = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput(""); // Input clear karo
  };

  return (
    <form onSubmit={handleFormSubmit} className="w-full max-w-lg">
      <div className="flex items-center bg-gray-800 rounded-lg p-2 shadow-lg">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your what if scenario here..."
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default InputBox;
