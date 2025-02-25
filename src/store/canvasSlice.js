import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  canvasSize: {
    width: "16",
    height: "16",
  },

  isResizeCanvas: true,
  paintColor: "red",
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    handleCanvasSize: (state, action) => {
      state.canvasSize = action.payload;
    },
    handlePaintColor: (state, action) => {
      state.paintColor = action.payload;
    },
  },
});

export const { handleCanvasSize, handlePaintColor } = canvasSlice.actions;

export default canvasSlice.reducer;
