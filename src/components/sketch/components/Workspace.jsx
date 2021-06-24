import React, { useEffect } from "react";
import * as Blockly from "blockly";
import Blocks from "./Blocks";
import * as canvas from "./CanvasAssets";
import Button from "react-bootstrap/Button"

let workSpace = new Blockly.Workspace();

let blockTypes = [
  "block_type_move_fb",
  "block_type_move_lr",
  "block_type_jump_fb",
  "block_type_set_color",
  "block_type_set_color_random"
];
export default function Workspace(props) {
  useEffect(() => {
    if (props.status === "start") {
      workSpace = Blockly.inject("blocklySketchDiv", {
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
        workSpace
      );
    }

    workSpace.addChangeListener(Blockly.Events.disableOrphans);
  });

  async function moveForward(pixel){
    await canvas.moveForward(pixel);
  }

  async function moveBackward(pixel){
    await canvas.moveBackward(pixel);
  }

  async function moveLeft(angle){
    await canvas.moveLeft(angle);
  }

  async function moveRight(angle){
    await canvas.moveRight(angle);
  }

  async function jumpForward(pixel){
    await canvas.jumpForward(pixel);
  }

  async function jumpBackward(pixel){
    await canvas.jumpBackward(pixel);
  }

  function setColor(code){
    canvas.setColor(code);
  }

  function handleClick() {
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
      'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(workSpace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

    // alert(code);
    console.log(code);
    try {
      eval("(async () => {" + code + "})()");
      // eval(code);
    } catch (e) {
      alert(e);
    }
  }

  function handleRestart() {
    props.resetGame();
  }

  return (
    <React.Fragment>
      <div className="sketch-workspace-wrapper">
        <div id="blocklySketchDiv"></div>
        <xml
          xmlns="https://developers.google.com/blockly/xml"
          id="toolbox"
          style={{ display: "none" }}
        >
          <Blocks blocks={blockTypes} />
        </xml>
        <xml
          xmlns="https://developers.google.com/blockly/xml"
          id="startingBlock"
          style={{ display: "none" }}
        >
          <block type="when_run" movable="false" deletable="false" />
        </xml>
        <div className="buttonContainer">
          <Button variant="outline-primary" className="sketch_button" onClick={handleClick}>
            {" "}
            run code{" "}
          </Button>
          <Button variant="outline-danger" className="sketch_button" onClick={handleRestart}>
            {" "}
            restart{" "}
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
