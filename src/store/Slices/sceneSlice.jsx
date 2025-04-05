// src/store/Slices/sceneSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const sceneSlice = createSlice({
  name: "data",
  initialState: {
    data: [], // User ka input
    isLoading: false,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setData, setIsLoading } = sceneSlice.actions;
export default sceneSlice.reducer;
