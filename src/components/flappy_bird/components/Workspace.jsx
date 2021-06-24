import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import * as Blockly from "blockly";
import "../flappyBirdCustomBlocks";
import draw, { resetGame } from "./canvasAssets";

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
    console.log(newCode);
    draw();
  }

  function reset() {
    // workspace.clear();
    // Blockly.Xml.domToWorkspace(
    //   document.getElementById("startingBlock"),
    //   workspace
    // );
    resetGame();
    newCode = "";
  }
  return (
    <div className="BlocklyInnerContainer">
      <div className="buttonContainer">
        <Button variant="success" size="sm" className="customButton" onClick={runCode}>
          {" "}
          run code{" "}
        </Button>
        <Button variant="danger" size="sm" className="customButton" onClick={reset}>
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
        <block type="when_flappy_run" deletable="false" movable="false" />
      </xml>
      <xml
        xmlns="https://developers.google.com/blockly/xml"
        id="toolbox"
        style={{ display: "none" }}
      >
        <category name="Logic" colour="%{BKY_LOGIC_HUE}">
          <block type="controls_if"></block>
        </category>
        <category name="flappy bird" colour="#4C97FF">
          <block type="block_type_background"></block>
          <block type="block_type_while_game_not_over"></block>
          <block type="block_type_north_pipes"></block>
          <block type="block_type_south_pipes"></block>
          <block type="block_type_move_pipes"></block>
          <block type="block_type_bird"></block>
          <block type="block_type_ground"></block>
          <block type="block_type_gravity"></block>
          <block type="block_type_score"></block>
          <block type="block_type_pipe_collision"></block>
          <block type="block_type_ground_touched"></block>
          <block type="block_type_game_over"></block>
          <block type="block_type_pipe_passed"></block>
          <block type="block_type_increment_score"></block>
          <block type="block_type_ground_touched"></block>
          <block type="block_type_key_pressed"></block>
          <block type="block_type_move_up"></block>
        </category>
      </xml>
    </div>
  );
}

export { newCode };
