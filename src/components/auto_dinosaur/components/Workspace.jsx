import * as Blockly from "blockly";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "../customBlocks";
import * as Game from "./game";

let workspace = new Blockly.Workspace();

export default function Workspace(props) {
  useEffect(() => {
    workspace = Blockly.inject("blocklyDinoDiv", {
      toolbox: document.getElementById("toolbox")
    });
  });

  function handleClick() {
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
    // newCode = code;
    props.fun();
  }

  function draw(){
    Game.setIsDraw();
  }

  function duck(){
    Game.setIsDuck();
  }

  function jump(){
    Game.setIsJump();
  }

  return (
    <React.Fragment>
      {/* <div id="blocklyDiv"></div> */}
      <div className="dino-blocklyInnerWrapper">
        <div className="dino-buttonContainer">
          <Button
            variant="primary"
            size="sm"
            className="custombutton"
            onClick={handleClick}
          >
            {" "}
            run{" "}
          </Button>
        </div>
        <div id="blocklyDinoDiv"></div>

        <xml
          xmlns="https://developers.google.com/blockly/xml"
          id="toolbox"
          style={{ display: "none" }}
        >
          <block type="controls_if"></block>
          <block type="block_type_run"></block>
          <block type="block_type_if_bird"></block>
          <block type="block_type_if_crawlers"></block>
          <block type="block_type_duck"></block>
          <block type="block_type_jump"></block>
        </xml>
      </div>
    </React.Fragment>
  );
}
