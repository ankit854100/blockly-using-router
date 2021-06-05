import React, { useEffect } from "react";
import * as Blockly from "blockly";
import Blocks from "./Blocks";
import Button from "react-bootstrap/Button";

let workspace = new Blockly.Workspace();

export default function Workspace() {
  useEffect(() => {
    workspace = Blockly.inject("blocklyDiv", {
      toolbox: document.getElementById("toolbox")
    });
  });

  function run() {
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
      'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

    try {
      eval(code);
    } catch (e) {
      alert(e);
    }
  }
  function show() {
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    alert(code);
  }
  return (
    <React.Fragment>
      <div id="blocklyDiv"></div>
      <xml
        xmlns="https://developers.google.com/blockly/xml"
        id="toolbox"
        style={{ display: "none" }}
      >
        <Blocks />
      </xml>
      <br></br>
      <Button variant="primary" className="editor_button" onClick={run}> run code </Button>
      <Button variant="dark" className="editor_button" onClick={show}> show code </Button>
    </React.Fragment>
  );
}
