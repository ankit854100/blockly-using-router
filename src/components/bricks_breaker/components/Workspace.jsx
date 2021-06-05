import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import * as Blockly from "blockly";
import "../customBlocks";
import * as canvas from "./canvasAssets";

let workspace = new Blockly.Workspace();
let j = 0;

let newCode;
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
    newCode = code;
    // canvas.draw();
    canvas.reset();
    canvas.clearCanvas();
    canvas.start(newCode);
    props.canvasBG({ backgroundColor: canvas.bg });
  }

  function reset() {
    workspace.clear();
    newCode = "";
    canvas.clearCanvas();
    canvas.reset();
    props.canvasBG({ backgroundColor: "white" });
    Blockly.Xml.domToWorkspace(
      document.getElementById("startingBlock"),
      workspace
    );
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
        <category name="Bricks Breaker" colour="#4C97FF">
          <block type="block_type_bg"></block>
          <block type="block_type_timeout"></block>
          <block type="block_type_bricks"></block>
          <block type="block_type_paddle"></block>
          <block type="block_type_ball"></block>
          <block type="block_type_score"></block>
          <block type="block_type_lives"></block>
          <block type="block_type_right_pressed"></block>
          <block type="block_type_move_right"></block>
          <block type="block_type_left_pressed"></block>
          <block type="block_type_move_left"></block>
          <block type="block_type_move_ball"></block>
          <block type="block_type_either_wall_touched"></block>
          <block type="block_type_change_direction"></block>
          <block type="block_type_roof_touched"></block>
          <block type="block_type_change_vertical_direction"></block>
          <block type="block_type_ball_going_down"></block>
          <block type="block_type_ball_touches_paddle"></block>
          <block type="block_type_decrease_life"></block>
          <block type="block_type_restore_ball"></block>
          <block type="block_type_ball_collide"></block>
          <block type="block_type_remove_brick"></block>
          <block type="block_type_increment_score"></block>
          <block type="block_type_increase_horizontal_angle"></block>
        </category>
      </xml>
    </div>
  );
}

export { newCode };
