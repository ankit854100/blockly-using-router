import React, { useEffect, useRef, useState } from "react";
import Workspace from "./Workspace";
import dimension, { hit, isChange } from "./canvasAssets";
import "bootstrap/dist/css/bootstrap.min.css";

let ctx;
export default function App() {
  const ref = useRef();
  const [canvasStyle, setCanvasStyle] = useState({ backgroundColor: "#fff" });
  useEffect(() => {
    let canvas = ref.current;
    canvas.width = dimension.w;
    canvas.height = dimension.h;
    ctx = canvas.getContext("2d");

    canvas.addEventListener("mousedown", (event) => {
      const rect = canvas.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;

      if (isChange) {
        hit(x, y);
      }
      // console.log("x & y", x, y);
    });

    // main();
  });

  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="blocklyWrapper">
          <div className="blocklyContainer">
            <Workspace canvasBG={setCanvasStyle} />
          </div>
          <div className="rectangle">
            <canvas ref={ref} id="gameCanvas" style={canvasStyle} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { ctx };

/* <button onClick={restart}> restart </button>
        <button onClick={start}> start </button> */
