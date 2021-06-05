import React, { useEffect, useRef, useState } from "react";
import Workspace from "./Workspace";
import dimension, {
  drawCharacter,
  drawingPath,
  restoreGame
} from "./CanvasAssets";

import "./App.css";

let ctx;

export default function App() {
  const ref = useRef();
  const [workspaceStatus, setStatus] = useState("start");

  useEffect(() => {
    const canvas = ref.current;
    canvas.width = dimension.w;
    canvas.height = dimension.h;

    ctx = canvas.getContext("2d");

    main(ctx);
  });

  function main() {
    ctx.clearRect(0, 0, dimension.w, dimension.h);
    drawCharacter(ctx);
    drawingPath(ctx);

    requestAnimationFrame(main);
  }

  function resetGame() {
    setStatus("reset");
    restoreGame();
  }

  return (
    <React.Fragment>
      <div className="sketch_top">
        <h4>
          Hey young artist show some creativity by drawing in the white rectangle.
        </h4>
        <div className="sketch_wrapper">
          <div className="sketch_rectangle">
            <canvas ref={ref}></canvas>
          </div>
          <Workspace resetGame={resetGame} status={workspaceStatus} />
        </div>
      </div>
    </React.Fragment>
  );
}
