// src/components/Homepage.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sceneWrapper from "../utils/sceneWrapper";
import InputBox from "./InputBox";
import StoryDisplay from "./StoryDisplay";
import { setData, setIsLoading } from "../store/Slices/sceneSlice";
import { useNavigate } from "react-router-dom";
import generateAudio from "../utils/audioGeneration";

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.data);

  const handleSubmit = async (input) => {
    if (input.trim() === "") {
      alert("Please Enter something.");
      return;
    }
    dispatch(setIsLoading(true));
    navigate("/whatif");
    try {
      const scenesData = await sceneWrapper(input);
      dispatch(setData(scenesData));
      if (scenesData?.length === 0) {
        throw new Error("Error occured while generating output");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">What if?</h1>

      {/* Input Box */}
      <InputBox onSubmit={handleSubmit} />

      {/* Loader ya Story */}
      {isLoading && (
        <div className="flex items-center justify-center mt-8">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
