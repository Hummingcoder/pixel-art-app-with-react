import React, { useState } from "react";
import Colors from "../../colors";
import "../css/color.css";
import { useDispatch, useSelector } from "react-redux";
import { handlePaintColor } from "../store/canvasSlice";
const ColorsContainer = () => {
  const paintColor = useSelector((state) => state.canvas.paintColor);
  const dispatch = useDispatch();

  const [currentPalette, setcurrentPalette] = useState(Colors[0].name);

  function changePaintcolor(color) {
    dispatch(handlePaintColor(color));
  }
  return (
    <article className="color-container">
      <section className="palette-names">
        {Colors.map((palette) => (
          <button
            className={`${currentPalette === palette.name && "active"}`}
            onClick={() => setcurrentPalette(palette.name)}
            key={palette.name}
          >
            {currentPalette === palette.name && <div className="circle"></div>}{" "}
            <p>{palette.name}</p>
          </button>
        ))}
      </section>
      {Colors.map((palette) =>
        currentPalette === palette.name ? (
          <section className="color-section" key={palette.name}>
            {palette.palette.map((color, index) => (
              <button
                key={index}
                className={`color ${paintColor === color && "selected"}`}
                style={{ background: color }}
                onClick={() => changePaintcolor(color)}
              ></button>
            ))}
          </section>
        ) : null
      )}
    </article>
  );
};

export default ColorsContainer;
