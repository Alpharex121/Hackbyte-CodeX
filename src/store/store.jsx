import { configureStore } from "@reduxjs/toolkit";
import sceneSlice from "./Slices/sceneSlice";

const appStore = configureStore({
  reducer: {
    data: sceneSlice,
  },
});

export default appStore;
