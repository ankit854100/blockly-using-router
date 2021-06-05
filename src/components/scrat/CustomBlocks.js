import * as Blockly from "blockly/core";
import "blockly/javascript";

const rigth = "https://codesandbox.io/api/v1/sandboxes/dqjvl/fs/src/Images/right-arrow.svg";
const up = "https://codesandbox.io/api/v1/sandboxes/dqjvl/fs/src/Images/up-arrow.svg";
const leftArrow = "https://codesandbox.io/api/v1/sandboxes/dqjvl/fs/src/Images/left-arrow.svg";
const play = "https://codesandbox.io/api/v1/sandboxes/dqjvl/fs/src/Images/play.svg";
const down = "https://codesandbox.io/api/v1/sandboxes/dqjvl/fs/src/Images/down-arrow.svg"

// when run block
Blockly.Blocks["when_run"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("when run")
      .appendField(new Blockly.FieldImage(play, 20, 18, "*"));
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["when_run"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  return code;
};

// South block
Blockly.Blocks["south"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("S")
      .appendField(new Blockly.FieldImage(down, 20, 18, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["south"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  // var code = "await canvas.south();";
  var code  = "await southCommand();"
  return code;
};

// North block
Blockly.Blocks["north"] = {
  init: function () {
    this.setColour("#4C97FF");
    this.appendDummyInput()
      .appendField("N")
      .appendField(new Blockly.FieldImage(up, 20, 18, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["north"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  // var code = "await canvas.north();";
  var code  = "await northCommand();"

  return code;
};

// west arrow
Blockly.Blocks["west"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("W")
      .appendField(new Blockly.FieldImage(leftArrow, 20, 18, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["west"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  // var code = "await canvas.west();";
  var code  = "await westCommand();"
  return code;
};

// east block
Blockly.Blocks["east"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("E")
      .appendField(new Blockly.FieldImage(rigth, 20, 18, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["east"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  // var code = "await canvas.east();\n";
  var code  = "await eastCommand();"
  return code;
};

// collect block
Blockly.Blocks["block_type_collect"] = {
  init: function () {
    this.appendDummyInput().appendField("collect carrots");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_collect"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  // var code = "canvas.checkCarrots();";
  var code = "collectCarrots();"
  return code;
};

// while block
Blockly.Blocks["block_type_while"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("repeat ")
      .appendField(new Blockly.FieldNumber(2), "times")
      .appendField(" times");
    this.appendStatementInput("NAME").setCheck(null).appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_while"] = function (block) {
  var number_times = block.getFieldValue("times");
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `for(let i = 0; i < ${number_times}; i++){\n${statements_name}};`;
  return code;
};
