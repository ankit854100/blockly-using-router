import React, { useEffect } from "react";
import * as Blockly from "blockly";
import Blocks from "./Blocks";
import { Button } from "react-bootstrap";

let newCode;
let workspace = Blockly.Workspace();
export default function Workspace(props) {
  useEffect(() => {
    if (props.status === "start") {
      workspace = Blockly.inject("blocklyDiv", {
        toolbox: document.getElementById("toolbox"),
        scrollbars: true,
        move: {
          drag: true,
          wheel: true
        },
        grid: { spacing: 40, length: 2, colour: "#ccc", snap: true }
      });
    }
  });
  function runCode() {
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
      'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    let code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    // console.log(code);
    newCode = code;
    props.setSrc(newCode);
    // alert(code);
  }

  function reset() {
    newCode = "";
    props.setSrc(newCode);
    workspace.clear();
  }
  return (
    <React.Fragment>
      <div className="innerWrapper">
        <div className="buttonContainer">
          <Button
            variant="dark"
            size="sm"
            className="customButton"
            onClick={runCode}
          >
            {" "}
            run code{" "}
          </Button>
          <Button
            variant="dark"
            size="sm"
            onClick={reset}
            className="customButton"
          >
            {" "}
            reset{" "}
          </Button>
          <Button
            size="sm"
            variant="dark"
            className="customButton"
            onClick={() => {
              alert(newCode);
            }}
          >
            {" "}
            show code{" "}
          </Button>
        </div>
        <div id="blocklyDiv"></div>
        <xml
          xmlns="https://developers.google.com/blockly/xml"
          id="toolbox"
          style={{ display: "none" }}
        >
          <Blocks />
        </xml>
      </div>
    </React.Fragment>
  );
}

export { newCode };
