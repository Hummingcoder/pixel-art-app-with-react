import React, { useRef, useState } from "react";
import "../css/canvas.css";
import { useSelector } from "react-redux";
const Canvas = ({ setisEditCanvasSize }) => {
  const { canvasSize, paintColor } = useSelector((state) => state.canvas);
  function handleOnClick(e) {
    if (e.target.className === "pixel") {
      e.target.style.background = paintColor;

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  }
  function handleMouseMove(e) {
    if (e.target.className === "pixel") {
      e.target.style.background = paintColor;
    }
  }

  function handleMouseUp() {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }

  const [showGrid, setshowGrid] = useState(false);

  function handleChecked(e) {
    if (e.target.checked) {
      setshowGrid(true);
    } else {
      setshowGrid(false);
    }
  }

  return (
    <>
      <section className="btn-sec">
        <button className="new-btn" onClick={() => setisEditCanvasSize(true)}>
          new
        </button>
        <div className="grid-container">
          grid :{" "}
          <label className="switch">
            <input type="checkbox" onClick={handleChecked} />
            <span className="slider round"></span>
          </label>{" "}
        </div>
      </section>
      <section
        onMouseDown={handleOnClick}
        className="canvas no-select"
        style={{
          gridTemplateColumns: `repeat(${canvasSize.width} ,1fr)`,
          gap: showGrid ? ".8px" : "0",
          background: "black",
        }}
      >
        {Array(canvasSize.width * canvasSize.height)
          .fill("")
          .map((item, index) => (
            <div className="pixel" key={index}></div>
          ))}
      </section>
    </>
  );
};

export default Canvas;
