import * as Blockly from "blockly/core";
import "blockly/javascript";
import left from "./images/left-arrow.svg";
import right from "./images/right-arrow.svg";
import up from "./images/up-arrow.svg";
import down from "./images/down-arrow.svg";

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

Blockly.Blocks["block_type_timeout"] = {
  init: function () {
    this.appendDummyInput().appendField("while snake is not dead");
    this.appendStatementInput("TIMEOUT").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_timeout"] = function (block) {
  // var number_refresh_rate = block.getFieldValue("refresh_rate");
  var statements_timeout = Blockly.JavaScript.statementToCode(block, "TIMEOUT");
  // TODO: Assemble JavaScript into code variable.
  var code = `\nchangingDirection = false;\nmyTimeout = setTimeout(function onTick() { clear();\n${statements_timeout}\nmain();}, 200);`;
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
  var code = `setBackground('${text_bg}');`;
  return code;
};

Blockly.Blocks["block_type_boundary_obstacle"] = {
  init: function () {
    this.appendDummyInput().appendField("restrict boundary");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_boundary_obstacle"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\nsetBoundaryObstacles();";
  return code;
};

Blockly.Blocks["block_type_draw_snake"] = {
  init: function () {
    this.appendDummyInput().appendField("draw snake");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_draw_snake"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\ndrawSnake();";
  return code;
};

Blockly.Blocks["block_type_draw_score"] = {
  init: function () {
    this.appendDummyInput().appendField("draw Score");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_draw_score"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\ndrawScore();";
  return code;
};

Blockly.Blocks["block_type_draw_food"] = {
  init: function () {
    this.appendDummyInput().appendField("draw food");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_draw_food"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\ndrawFood();";
  return code;
};

Blockly.Blocks["block_type_move_snake"] = {
  init: function () {
    this.appendDummyInput().appendField("start moving the snake");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_move_snake"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\nmoveSnake();";
  return code;
};

Blockly.Blocks["block_type_check_food"] = {
  init: function () {
    this.appendDummyInput().appendField("mouth is at food");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_check_food"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "checkFood()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_eat_food"] = {
  init: function () {
    this.appendDummyInput().appendField("eat food");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_eat_food"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\neat();";
  return code;
};

// Blockly.Blocks["block_type_increase_score"] = {
//   init: function () {
//     this.appendDummyInput().appendField("increase score");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour("#4C97FF");
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

// Blockly.JavaScript["block_type_increase_score"] = function (block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = "\nsetIncreaseScore();\nincreaseScore();";
//   return code;
// };

// score increment block
Blockly.Blocks["block_type_increase_score"] = {
  init: function () {
    this.appendDummyInput().appendField("increase score by: ");
    this.appendValueInput("NAME").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_increase_score"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `\nincrementValue=${value_name};\nsetIncreaseScore();\nincreaseScore();`;
  return code;
};

Blockly.Blocks["block_type_score_increment_value"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("increment value: ")
      .appendField(new Blockly.FieldNumber(5), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_score_increment_value"] = function (block) {
  var number_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = number_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_up"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("move up")
      .appendField(
        new Blockly.FieldImage(up, 15, 15, { alt: "*", flipRtl: "FALSE" })
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_up"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "setGoingUp();";
  return code;
};

Blockly.Blocks["block_type_down"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("move down")
      .appendField(
        new Blockly.FieldImage(down, 15, 15, { alt: "*", flipRtl: "FALSE" })
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_down"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\nsetGoingdown();";
  return code;
};

Blockly.Blocks["block_type_left"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("move left")
      .appendField(
        new Blockly.FieldImage(left, 15, 15, { alt: "*", flipRtl: "FALSE" })
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_left"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\nsetGoingLeft();";
  return code;
};

Blockly.Blocks["block_type_right"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("move right")
      .appendField(
        new Blockly.FieldImage(right, 15, 15, { alt: "*", flipRtl: "FALSE" })
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_right"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\nsetGoingRight();";
  return code;
};

Blockly.Blocks["block_type_snake_touched_itself"] = {
  init: function () {
    this.appendDummyInput().appendField("snake touch its body");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_snake_touched_itself"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "hasSnakeTouchedItself()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_snake_touched_boundary"] = {
  init: function () {
    this.appendDummyInput().appendField("snake touch boundary");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_snake_touched_boundary"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "hasGameEnded()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_end_game"] = {
  init: function () {
    this.appendDummyInput().appendField("end game");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_end_game"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\nendGame();";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks["block_type_generate_block"] = {
  init: function () {
    this.appendDummyInput().appendField("generate food");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_generate_block"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\ngenerateFood();";
  return code;
};

Blockly.Blocks["block_type_up_arrow_block"] = {
  init: function () {
    this.appendDummyInput().appendField("upward direction key pressed");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_up_arrow_block"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "isGoingUp";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_down_arrow_block"] = {
  init: function () {
    this.appendDummyInput().appendField("downward direction key pressed");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_down_arrow_block"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "isGoingDown";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_left_arrow_block"] = {
  init: function () {
    this.appendDummyInput().appendField("left direction key pressed");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_left_arrow_block"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "isGoingLeft";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_right_arrow_block"] = {
  init: function () {
    this.appendDummyInput().appendField("right direction key pressed");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_right_arrow_block"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "isGoingRight";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_input_left_key"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("set left direction letter code:")
      .appendField(new Blockly.FieldNumber(0), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_input_left_key"] = function (block) {
  var number_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `LEFT_KEY=${number_name};`;
  return code;
};

Blockly.Blocks["block_type_input_right_key"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("set right direction letter code:")
      .appendField(new Blockly.FieldNumber(0), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_input_right_key"] = function (block) {
  var number_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `RIGHT_KEY=${number_name};`;
  return code;
};

Blockly.Blocks["block_type_input_up_key"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("set upward direction letter code:")
      .appendField(new Blockly.FieldNumber(0), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_input_up_key"] = function (block) {
  var number_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `UP_KEY=${number_name};`;
  return code;
};

Blockly.Blocks["block_type_input_down_key"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("set downward direction letter code:")
      .appendField(new Blockly.FieldNumber(0), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_input_down_key"] = function (block) {
  var number_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `DOWN_KEY=${number_name};`;
  return code;
};
