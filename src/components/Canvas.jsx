import React, { useRef, useState } from "react";
import "../css/canvas.css";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";

const Canvas = ({ setisEditCanvasSize }) => {
  const { canvasSize, paintColor } = useSelector((state) => state.canvas);
  const [showGrid, setshowGrid] = useState(false);

  const canvasRef = useRef(null);

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

  function handleChecked(e) {
    if (e.target.checked) {
      setshowGrid(true);
    } else {
      setshowGrid(false);
    }
  }

  async function handleExport() {
    if (!canvasRef.current) return;

    const res = await html2canvas(canvasRef.current);

    const link = document.createElement("a");
    link.href = res.toDataURL("image/png");
    link.download = "canvas.png";
    link.click();
  }

  return (
    <>
      <section className="btn-sec">
        <span>
          <button className="btn" onClick={() => setisEditCanvasSize(true)}>
            new
          </button>
          <button className="btn" onClick={handleExport}>
            export as png
          </button>
        </span>
        <div className="grid-container">
          grid :{" "}
          <label className="switch">
            <input type="checkbox" onClick={handleChecked} />
            <span className="slider round"></span>
          </label>{" "}
        </div>
      </section>
      <div
        ref={canvasRef}
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
      </div>
    </>
  );
};

export default Canvas;
