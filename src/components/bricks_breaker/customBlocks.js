import * as Blockly from "blockly/core";
import "blockly/javascript";

Blockly.Blocks["when_run"] = {
  init: function () {
    this.appendDummyInput().appendField("set game");
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

Blockly.Blocks["block_type_set_game"] = {
  init: function () {
    this.appendDummyInput().appendField("set game");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_set_game"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  return code;
};

Blockly.Blocks["block_type_bg"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldLabelSerializable("set background color"),
        "NAME"
      )
      .appendField(new Blockly.FieldTextInput(""), "BG");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_bg"] = function (block) {
  var text_bg = block.getFieldValue("BG");
  // TODO: Assemble JavaScript into code variable.
  var code = `setBackground("${text_bg}");`;
  return code;
};

Blockly.Blocks["block_type_timeout"] = {
  init: function () {
    this.appendDummyInput().appendField("while lives is not zero");
    this.appendStatementInput("NAME").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_timeout"] = function (block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `clearCanvas();\n${statements_name}\nmyReq = requestAnimationFrame(draw); `;
  return code;
};
// myReq = setTimeout(function onTick() { clearCanvas();\n${statements_name}\ndraw();}, 10);
// clearCanvas();\n${statements_name}\nmyReq = requestAnimationFrame(draw);
Blockly.Blocks["block_type_bricks"] = {
  init: function () {
    this.appendDummyInput().appendField("draw bricks");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_bricks"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `\ndrawBricks();`;
  return code;
};

Blockly.Blocks["block_type_paddle"] = {
  init: function () {
    this.appendDummyInput().appendField("draw paddle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_paddle"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `\ndrawPaddle();`;
  return code;
};

Blockly.Blocks["block_type_ball"] = {
  init: function () {
    this.appendDummyInput().appendField("draw ball");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_ball"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `\ndrawBall();`;
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
  var code = `\ndrawScore();`;
  return code;
};

Blockly.Blocks["block_type_lives"] = {
  init: function () {
    this.appendDummyInput().appendField("draw lives");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_lives"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `\ndrawLives();`;
  return code;
};

Blockly.Blocks["block_type_right_pressed"] = {
  init: function () {
    this.appendDummyInput().appendField("right pressed");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_right_pressed"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `rightPressed`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_move_right"] = {
  init: function () {
    this.appendDummyInput().appendField("move right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_move_right"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `paddleX += 7;\nif (paddleX + paddleWidth > dimension.w)\n{\npaddleX = dimension.w - paddleWidth;\n}`;
  return code;
};

Blockly.Blocks["block_type_left_pressed"] = {
  init: function () {
    this.appendDummyInput().appendField("left pressed");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_left_pressed"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `leftPressed`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_move_left"] = {
  init: function () {
    this.appendDummyInput().appendField("move left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_move_left"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `paddleX += -7;\nif (paddleX < 0) \n{\npaddleX = 0;\n}`;
  return code;
};

Blockly.Blocks["block_type_move_ball"] = {
  init: function () {
    this.appendDummyInput().appendField("move ball");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_move_ball"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `x += dx;\ny += dy;`;
  return code;
};

Blockly.Blocks["block_type_either_wall_touched"] = {
  init: function () {
    this.appendDummyInput().appendField("either wall touched");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_either_wall_touched"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `x + dx > dimension.w - ballRadius || x + dx < ballRadius`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_change_direction"] = {
  init: function () {
    this.appendDummyInput().appendField("change horizontal direction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_change_direction"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `dx = -dx;`;
  return code;
};

Blockly.Blocks["block_type_roof_touched"] = {
  init: function () {
    this.appendDummyInput().appendField("roof touched");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_roof_touched"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `y + dy < ballRadius`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_change_vertical_direction"] = {
  init: function () {
    this.appendDummyInput().appendField("change vertical direction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_change_vertical_direction"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `dy = -dy;`;
  return code;
};

Blockly.Blocks["block_type_ball_going_down"] = {
  init: function () {
    this.appendDummyInput().appendField("ball going down");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_ball_going_down"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "y + dy > dimension.h - ballRadius";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_ball_touches_paddle"] = {
  init: function () {
    this.appendDummyInput().appendField("ball touches paddle");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_ball_touches_paddle"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "x > paddleX && x < paddleX + paddleWidth";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_decrease_life"] = {
  init: function () {
    this.appendDummyInput().appendField("decrease life");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_decrease_life"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "lives--;if (!lives) {\ncancelAnimationFrame(myReq);lose();\n}";
  return code;
};

Blockly.Blocks["block_type_restore_ball"] = {
  init: function () {
    this.appendDummyInput().appendField("restore ball and paddle position");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_restore_ball"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code =
    "if(lives) {\nx = dimension.w / 2;\ny = dimension.h - 30;\ndx = 3;\ndy = -3;\npaddleX = (dimension.w - paddleWidth) / 2;\n}";
  return code;
};
// "if (!lives) {\ncancelAnimationFrame(myReq);lose();\n} else {\nx = dimension.w / 2;\ny = dimension.h - 30;\ndx = 3;\ndy = -3;\npaddleX = (dimension.w - paddleWidth) / 2;\n}";

Blockly.Blocks["block_type_ball_collide"] = {
  init: function () {
    this.appendDummyInput().appendField("ball collide with brick");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_ball_collide"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "collision()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_remove_brick"] = {
  init: function () {
    this.appendDummyInput().appendField("remove brick");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_remove_brick"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "collidedBlock.status = 0;";
  return code;
};

Blockly.Blocks["block_type_increment_score"] = {
  init: function () {
    this.appendDummyInput().appendField("increment score");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_increment_score"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "score++;\nif(score === brickColumnCount*brickRowCount){win();}";
  return code;
};

Blockly.Blocks["block_type_increase_horizontal_angle"] = {
  init: function () {
    this.appendDummyInput().appendField("increase horizontal bounce angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_increase_horizontal_angle"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "dx += dx/7;";
  return code;
};
