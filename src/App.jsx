import React, { useState } from "react";
import CreateCanvas from "./components/CreateCanvas";
import Canvas from "./components/Canvas";
import ColorsContainer from "./components/ColorsContainer";

const App = () => {
  const [isEditCanvasSize, setisEditCanvasSize] = useState(true);
  return (
    <main>
      {isEditCanvasSize ? (
        <CreateCanvas setisEditCanvasSize={setisEditCanvasSize} />
      ) : (
        <div className="main-container">
          <Canvas setisEditCanvasSize={setisEditCanvasSize} />
          <ColorsContainer />
        </div>
      )}
    </main>
  );
};

export default App;
