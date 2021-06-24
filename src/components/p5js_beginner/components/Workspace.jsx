import React, { useEffect } from "react";
import * as Blockly from "blockly";
import "../CustomBlocks";
import Blocks from "./Blocks";
import shapes, { background, stroke, fill, erase } from "./BlockTypes";
import { Button } from "react-bootstrap";

let newCode = "";
let runCode = false;

let workSpace = new Blockly.Workspace();


export default function Workspace() {
  useEffect(() => {
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

    // workSpace.addChangeListener(Blockly.Events.disableOrphans);
  });

  function handleClick() {
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
      'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(workSpace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

    newCode = code;
    runCode = true;
  }

  function handleReset() {
    newCode = "";
    runCode = false;
    workSpace.clear();
    Blockly.Xml.domToWorkspace(
      document.getElementById("startingBlock"),
      workSpace
    );
  }

  function showCode() {
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
      'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(workSpace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    alert(code);
  }

  return (
    <React.Fragment>
      <div className="inner-wrapper">
        <div className="button-container">
          <Button
            variant="success"
            size="sm"
            className="custombutton"
            onClick={handleClick}
          >
            {" "}
            run code{" "}
          </Button>
          <Button
            size="sm"
            variant="danger"
            className="custombutton"
            onClick={handleReset}
          >
            {" "}
            reset{" "}
          </Button>
          <Button
            size="sm"
            variant="primary"
            className="custombutton"
            onClick={showCode}
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
          <category name="Shapes" colour="%{BKY_LOGIC_HUE}">
            <Blocks blocks={shapes} />
          </category>
          <category name="background" colour="%{BKY_LOGIC_HUE}">
            <Blocks blocks={background} />
          </category>
          <category name="fill" colour="%{BKY_LOGIC_HUE}">
            <Blocks blocks={fill} />
          </category>
          <category name="stroke" colour="%{BKY_LOGIC_HUE}">
            <Blocks blocks={stroke} />
          </category>
          <category name="erase" colour="%{BKY_LOGIC_HUE}">
            <Blocks blocks={erase} />
          </category>
          <category name="Logic" colour="%{BKY_LOGIC_HUE}">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
            <block type="block_type_random"></block>
          </category>
          <category name="Loops" colour="%{BKY_LOOPS_HUE}">
            <block type="controls_repeat_ext">
              <value name="TIMES">
                <block type="math_number">
                  <field name="NUM">10</field>
                </block>
              </value>
            </block>
            _<block type="controls_whileUntil"></block>
            <block type="block_type_for"></block>
            <block type="block_type_for_index"></block>
          </category>
          <category name="Math" colour="%{BKY_MATH_HUE}">
            <block type="math_number">
              <field name="NUM">123</field>
            </block>
            <block type="math_arithmetic"></block>
            <block type="math_single"></block>
          </category>
          <category name="Text" colour="%{BKY_TEXTS_HUE}">
            <block type="text"></block>
            <block type="text_length"></block>
            <block type="text_print"></block>
          </category>
        </xml>
        <xml
          xmlns="https://developers.google.com/blockly/xml"
          id="startingBlock"
          style={{ display: "none" }}
        >
          <block type="draw" deletable="false" movable="false" />
        </xml>
      </div>
      <style jsx>{`
          .inner-wrapper {
          display: flex !important;
          flex-direction: column !important;
          /* background-color: yellowgreen !important; */
          height: 100% !important;
          }

          .button-container {
          padding: 5px 0;
          text-align: right;
          background-color: #fff !important; 
          }

          #blocklyDiv {
          height: 100%;
          width: 100%;
          }

          {/* .blocklySvg {
          /* border-radius: 5px !important; */
          /* border: 1px solid black !important; */
          background-color: #f9f9f9 !important;
          /* #c3ccd9 */
          }

          .blocklyToolboxDiv {
          background-color: white !important;
          border: 0.0625em solid #c3ccd9;
          }

          .blocklyFlyoutBackground {
          fill: #f9f9f9 !important;
          stroke: #c3ccd9 !important;
          stroke-width: 0.0625em !important;
          }

          .blocklyMainBackground {
          /* stroke-width: 0 !important; */
          rx: 0.3125em !important;
          ry: 0.3125em !important;
          stroke: #c3ccd9 !important;
          stroke-width: 2 !important;
          } */}
        `}</style>
    </React.Fragment>
  );
}

export { newCode, runCode };
