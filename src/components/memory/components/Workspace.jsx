import React, { useEffect } from "react";
import * as Blockly from "blockly";
import { Button } from "react-bootstrap";
import "../customBlocks";
import * as game from "./game";

let workspace = new Blockly.Workspace();
let newCode;
let j = 0;
let myTimeout;

export default function Workspace(props) {
  useEffect(() => {
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

    workspace.addChangeListener(Blockly.Events.disableOrphans);
  });

  function runCode() {
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
      'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    newCode = code;
    // alert(code);
    main();
  }

  function reset() {
    game.restore();
    game.removeScore();
    // workspace.clear();
    // Blockly.Xml.domToWorkspace(
    //   document.getElementById("startingBlock"),
    //   workspace
    // );
    j = 0;
    clearTimeout(myTimeout);
  }

  function main() {
    try {
      eval(newCode);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <React.Fragment>
      <div className="blocklyInnerContainer">
        <div className="buttonContainer">
          <Button
            variant="success"
            size="sm"
            className="customButton"
            onClick={runCode}
          >
            {" "}
            run code{" "}
          </Button>
          <Button
            variant="danger"
            size="sm"
            className="customButton"
            onClick={reset}
          >
            {" "}
            reset{" "}
          </Button>
        </div>
        <div id="blocklyDiv"></div>
        <xml
          xmlns="https://developers.google.com/blockly/xml"
          id="toolbox"
          style={{ display: "none" }}
        >
          <category name="Logic" colour="%{BKY_LOGIC_HUE}">
            <category name="If">
              <block type="controls_if"></block>
            </category>
            <category name="Boolean" colour="%{BKY_LOGIC_HUE}">
              <block type="logic_compare"></block>
              <block type="block_type_equating"></block>
            </category>
          </category>
          <category name="Math" colour="%{BKY_MATH_HUE}">
            <block type="math_number">
              <field name="NUM">123</field>
            </block>
          </category>
          <category name="Memory Game" colour="#4C97FF">
            <block type="block_type_create_board"></block>
            <block type="block_type_while_game"></block>
            <block type="block_type_flip"></block>
            <block type="block_type_flip_card"></block>
            <block type="block_type_card_chosen"></block>
            <block type="block_type_first_card_id"></block>
            <block type="block_type_second_card_id"></block>
            <block type="block_type_flip_again"></block>
            <block type="block_type_first_card"></block>
            <block type="block_type_second_card"></block>
            <block type="block_type_remove_cards"></block>
            <block type="block_type_draw_score"></block>
            <block type="block_type_increase_score"></block>
            <block type="block_type_end_game"></block>
            <block type="block_type_score"></block>
          </category>
        </xml>
        <xml
          xmlns="https://developers.google.com/blockly/xml"
          id="startingBlock"
          style={{ display: "none" }}
        >
          <block type="when_run" deletable="false" movable="false" />
        </xml>
      </div>
    </React.Fragment>
  );
}
