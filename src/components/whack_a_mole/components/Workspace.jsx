import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import * as Blockly from "blockly";
import "../customBlocks";
import { main, countTimer, resetGame, play } from "./canvasAssets";

let workspace = new Blockly.Workspace();
let j = 0;
let newCode = "";

export default function Workspace(props) {
  useEffect(() => {
    if (j === 0) {
      workspace = Blockly.inject("blocklyDiv", {
        toolbox: document.getElementById("toolbox"),
        scrollbars: true,
        move: {
          drag: true,
          wheel: true
        },
        grid: { spacing: 40, length: 2, colour: "#ccc", snap: true }
      });
      Blockly.Xml.domToWorkspace(
        document.getElementById("startingBlock"),
        workspace
      );
    }
    workspace.addChangeListener(Blockly.Events.disableOrphans);
    j++;
  });

  function runCode() {
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
      'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    // alert(code);

    // try {
    //   eval(code);
    // } catch (e) {
    //   alert(e);
    // }
    newCode = code;
    main();
    alert(code);
  }

  function reset() {
    // workspace.clear();
    resetGame();
  }
  return (
    <div className="BlocklyInnerContainer">
      <div className="buttonContainer">
        <Button size="sm" className="customButton" onClick={runCode}>
          {" "}
          run code{" "}
        </Button>
        <Button size="sm" className="customButton" onClick={reset}>
          {" "}
          reset{" "}
        </Button>
      </div>
      <div id="blocklyDiv"></div>
      <xml
        xmlns="https://developers.google.com/blockly/xml"
        id="startingBlock"
        style={{ display: "none" }}
      >
        <block type="when_run" deletable="false" movable="false" />
      </xml>
      <xml
        xmlns="https://developers.google.com/blockly/xml"
        id="toolbox"
        style={{ display: "none" }}
      >
        <category name="Logic" colour="%{BKY_LOGIC_HUE}">
          <block type="controls_if"></block>
        </category>
        <category name="game blocks" colour="#4C97FF">
          <block type="block_type_timeout"></block>
          <block type="block_type_holes"></block>
          <block type="block_type_mole"></block>
          <block type="block_type_move_mole"></block>
          <block type="block_type_score"></block>
          <block type="block_type_time"></block>
        </category>
      </xml>
    </div>
  );
}

export { newCode };
