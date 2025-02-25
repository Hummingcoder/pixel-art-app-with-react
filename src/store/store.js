import { configureStore } from "@reduxjs/toolkit";
import CanvasReducer from "../store/canvasSlice";
const store = configureStore({
  reducer: {
    canvas: CanvasReducer,
  },
});

export default store;
