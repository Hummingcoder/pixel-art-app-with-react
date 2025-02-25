import React, { useRef, useState } from "react";
import "../css/canvasSize.css";
import { useDispatch } from "react-redux";
import { handleCanvasSize } from "../store/canvasSlice";
const CreateCanvas = ({ setisEditCanvasSize }) => {
  const dispatch = useDispatch();
  const sizeRef = useRef(null);

  const allCanvasSizes = [
    { width: 8, height: 8 },
    { width: 16, height: 16 },
    { width: 32, height: 32 },
    { width: 64, height: 64 },
  ];

  function handleCreateCanvas() {
    dispatch(handleCanvasSize(JSON.parse(sizeRef.current.value)));
    setisEditCanvasSize(false);
  }

  return (
    <div className="container">
      <section className="select_canvas">
        <div className="sizes-container">
          <label htmlFor="sizes">Choose canvas size:</label>
          <select ref={sizeRef} id="sizes" name="sizes">
            {allCanvasSizes.map((size) => (
              <option key={size.width} value={JSON.stringify(size)}>
                {size.width + "x" + size.height}
              </option>
            ))}
          </select>
        </div>

        <button className="createBtn" onClick={handleCreateCanvas}>
          Create Canvas
        </button>
      </section>
    </div>
  );
};

export default CreateCanvas;
