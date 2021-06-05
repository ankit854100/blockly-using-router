import * as Blockly from "blockly/core";
import "blockly/javascript";

Blockly.Blocks["block_type_run"] = {
  init: function () {
    this.appendDummyInput().appendField("while run always");
    this.appendStatementInput("NAME").setCheck(null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_run"] = function (block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `draw();\n${statements_name}`;
  return code;
};

Blockly.Blocks["block_type_if_bird"] = {
  init: function () {
    this.appendDummyInput().appendField("bird");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_if_bird"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "true";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_if_crawlers"] = {
  init: function () {
    this.appendDummyInput().appendField("crawlers");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_if_crawlers"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "true";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_duck"] = {
  init: function () {
    this.appendDummyInput().appendField("duck");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_duck"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "duck();";
  return code;
};

Blockly.Blocks["block_type_jump"] = {
  init: function () {
    this.appendDummyInput().appendField("jump");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_jump"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `jump();`;
  return code;
};
