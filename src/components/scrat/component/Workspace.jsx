import React, { useEffect } from "react";
import * as Blockly from "blockly";
import Blocks from "./Blocks";
import "../CustomBlocks";
import block1, { block2 } from "../BlocksLevels";
// import * as canvas from "./CanvasAssets";
import { Button } from "react-bootstrap";
import { leveltype, south, north, east, west, checkCarrots} from "./CanvasAssets";

// const south = canvas.south;
// const north = canvas.north;
// const east = canvas.east;
// const west = canvas.west;
// const checkCarrots = canvas.checkCarrots;


let blocks;
let workSpace = new Blockly.Workspace();
if (leveltype === 0) {
  blocks = block1.blocks;
} else {
  blocks = block2.blocks;
}

export default function Workspace(props) {
  useEffect(() => {
    if (props.status === "start") {
      workSpace = Blockly.inject("blocklyDiv", {
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

    if (props.status === "restart") {
      workSpace.clear();
      Blockly.Xml.domToWorkspace(
        document.getElementById("startingBlock"),
        workSpace
      );
    }

    workSpace.addChangeListener(Blockly.Events.disableOrphans);
  });

  async function southCommand(){
    await south();
  }

  async function northCommand(){
    await north();
  }

  async function eastCommand(){
    await east();
  }

  async function westCommand(){
    await west();
  }

  function collectCarrots(){
    checkCarrots();
  }

  

  function handleClick() {
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
      'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(workSpace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

    try {
      eval("(async () => {" + code + "})()");
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="blocklyInnerWrapper">
      <div className="buttonContainer">
        <Button
          variant="primary"
          size="sm"
          className="custombutton"
          onClick={handleClick}
        >
          {" "}
          run code{" "}
        </Button>
        <Button
          variant="danger"
          size="sm"
          className="custombutton"
          onClick={() => {
            props.resetGame();
          }}
        >
          {" "}
          restart{" "}
        </Button>
      </div>
      <div id="blocklyDiv"></div>

      <xml
        xmlns="https://developers.google.com/blockly/xml"
        id="toolbox"
        style={{ display: "none" }}
      >
        <Blocks blocks={blocks} />
        {/* <block type="controls_repeat_ext">
          <value name="TIMES">
            <block type="math_number" movable="false">
              <field name="NUM">2</field>
            </block>
          </value>
        </block> */}
        _
      </xml>
      <xml
        xmlns="https://developers.google.com/blockly/xml"
        id="startingBlock"
        style={{ display: "none" }}
      >
        <block type="when_run" deletable="false" movable="false" />
      </xml>
      <style jsx>{`
        .blocklyInnerWrapper {
          padding-right: 5px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .buttonContainer {
          padding: 5px 0 5px;
          text-align: right;
        }

        #blocklyDiv {
        height: 100%;
        width: 100%;
      }

     

      
      `}</style>
    </div>
  );
}
