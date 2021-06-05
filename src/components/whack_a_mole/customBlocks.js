import * as Blockly from "blockly/core";
import "blockly/javascript";

Blockly.Blocks["when_run"] = {
  init: function () {
    this.appendDummyInput().appendField("start game");
    this.appendStatementInput("NAME").setCheck(null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["when_run"] = function (block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `${statements_name}`;
  return code;
};

Blockly.Blocks["block_type_timeout"] = {
  init: function () {
    this.appendDummyInput().appendField("while count not equals to 0");
    this.appendStatementInput("NAME").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_timeout"] = function (block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `gameTimeout = setTimeout(function onTick() { ${statements_name}\nmain();}, 1000);`;
  return code;
};

Blockly.Blocks["block_type_holes"] = {
  init: function () {
    this.appendDummyInput().appendField("create holes");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_holes"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\ndrawGrid();";
  return code;
};

Blockly.Blocks["block_type_mole"] = {
  init: function () {
    this.appendDummyInput().appendField("create mole");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_mole"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\ndrawImage();";
  return code;
};

Blockly.Blocks["block_type_move_mole"] = {
  init: function () {
    this.appendDummyInput().appendField("move mole");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_move_mole"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "changePosition();";
  return code;
};

Blockly.Blocks["block_type_score"] = {
  init: function () {
    this.appendDummyInput().appendField("draw score");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_score"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\ndrawScore();";
  return code;
};

Blockly.Blocks["block_type_time"] = {
  init: function () {
    this.appendDummyInput().appendField("draw time");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_time"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "drawTime();";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
