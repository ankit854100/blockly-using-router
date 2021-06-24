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
  var code = `${statements_name} \nif(gameEnd) gameOver();\nif (!gameEnd) myReq = requestAnimationFrame(draw);`;
  return code;
};

Blockly.Blocks["block_type_background"] = {
  init: function () {
    this.appendDummyInput().appendField("draw backgound");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_background"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\ndrawBg();";
  return code;
};

Blockly.Blocks["block_type_while_game_not_over"] = {
  init: function () {
    this.appendDummyInput().appendField("while game not over");
    this.appendStatementInput("NAME").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_while_game_not_over"] = function (block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `for (var i = 0; i < pipe.length; i++) {\nconstant = pipeNorth.height + gap;\n${statements_name}\n}`;
  return code;
};

Blockly.Blocks["block_type_north_pipes"] = {
  init: function () {
    this.appendDummyInput().appendField("draw north pipes");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_north_pipes"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "drawNorthPipes(i);";
  return code;
};

Blockly.Blocks["block_type_south_pipes"] = {
  init: function () {
    this.appendDummyInput().appendField("draw south pipes");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_south_pipes"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "drawSouthPipes(i);";
  return code;
};

Blockly.Blocks["block_type_move_pipes"] = {
  init: function () {
    this.appendDummyInput().appendField("move pipes");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_move_pipes"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `\nmovePipes(i);`;
  return code;
};

Blockly.Blocks["block_type_bird"] = {
  init: function () {
    this.appendDummyInput().appendField("draw bird");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_bird"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\ndrawBird();";
  return code;
};

Blockly.Blocks["block_type_ground"] = {
  init: function () {
    this.appendDummyInput().appendField("draw ground");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_ground"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\ndrawGround();";
  return code;
};

Blockly.Blocks["block_type_gravity"] = {
  init: function () {
    this.appendDummyInput().appendField("add gravity");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_gravity"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\nbY += gravity;";
  return code;
};

Blockly.Blocks["block_type_score"] = {
  init: function () {
    this.appendDummyInput().appendField("draw score");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_score"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "drawScore();";
  return code;
};

Blockly.Blocks["block_type_pipe_collision"] = {
  init: function () {
    this.appendDummyInput().appendField("bird collide with pipe");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_pipe_collision"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "didCollide(i)";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_game_over"] = {
  init: function () {
    this.appendDummyInput().appendField("game over");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_game_over"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\nstopGame();";
  return code;
};

Blockly.Blocks["block_type_pipe_passed"] = {
  init: function () {
    this.appendDummyInput().appendField("pipe passed");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_pipe_passed"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "isPipePassed(i)";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_increment_score"] = {
  init: function () {
    this.appendDummyInput().appendField("increment score");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_increment_score"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\nscore++;";
  return code;
};

Blockly.Blocks["block_type_ground_touched"] = {
  init: function () {
    this.appendDummyInput().appendField("ground touched");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_ground_touched"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "groundIsTOuched()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_key_pressed"] = {
  init: function () {
    this.appendDummyInput().appendField("any key pressed");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_key_pressed"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "keyPressed";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_move_up"] = {
  init: function () {
    this.appendDummyInput().appendField("move up");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_move_up"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\nmoveUp();";
  return code;
};
