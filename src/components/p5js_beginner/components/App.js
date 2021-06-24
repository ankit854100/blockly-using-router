import React from "react";
import Sketch from "react-p5";
import Workspace, { newCode, runCode } from "./Workspace";


function calRandom(int) {
  let i = Math.floor(Math.random() * int + 1);
  return i;
}

export default function App() {
  function P5() {
    const setup = (p5, canvasParentRef) => {
      p5.createCanvas(500, 500).parent(canvasParentRef);
    };

    const draw = (p5) => {
      p5.clear();

      if (runCode === true) {
        try {
          eval(newCode);
        } catch (e) {
          console.log(e);
        }
      }
    };

    return {
      first: setup,
      second: draw
    };
  }

  var values = P5();
  var setup = values.first;
  var draw = values.second;

  return (
    <div className="top-wrapper">
      <div className="blockly-container">
        <Workspace />
      </div>
      <div className="sketch-container">
        <Sketch setup={setup} draw={draw} />
      </div>
      <style jsx>{`
      .top-wrapper {
        background-color: #fff;
        display: flex;
        flex-direction: row;
        height: 100% !important;
        }

        .blockly-container {
        width: 100% !important;
        height: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        /* background-color: grey; */
        padding-right: 5px;
        }
        
        .sketch-container {
        display: flex !important;
        flex-direction: column !important;
        width: 40%;
        /* background-color: burlywood; */
        margin: 2.5625em 0 0 !important;
        border: 0.0625em solid #c3ccd9 !important;
        border-radius: 0.3125em !important;
        height: 31.25em;
        }

      `}</style>
    </div>
  );
}

