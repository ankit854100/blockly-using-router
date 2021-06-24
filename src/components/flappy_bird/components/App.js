import React, { useEffect, useRef } from "react";
import Workspace from "./Workspace";
import draw from "./canvasAssets";
import "bootstrap/dist/css/bootstrap.min.css";

let ctx;
export default function App() {
  const ref = useRef();

  useEffect(() => {
    let canvas = ref.current;
    canvas.width = 288;
    canvas.height = 512;
    ctx = canvas.getContext("2d");

    // draw();
  });

  function handleClick() {
    draw();
  }

  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="blocklyWrapper">
          <div className="blocklyContainer">
            <Workspace />
          </div>
          <div className="bird-rectangle">
            <canvas ref={ref} id="canvas"></canvas>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bird-rectangle{
          width: 30%;
          height: 614px;
          background-color: #fff;
          margin-top: 41px;
          text-align: center;
          padding-top: 20px;
          border-radius: 5px;
          border: 1px solid #c3ccd9;
          margin-right: 5px;
        }
      `}</style>
    </React.Fragment>
  );
}

export { ctx };
