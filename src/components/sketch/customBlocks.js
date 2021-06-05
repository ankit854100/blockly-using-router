import * as Blockly from "blockly/core";
import "blockly/javascript";

// when run blocks
Blockly.Blocks["when_run"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("when run")
      .appendField(
        new Blockly.FieldImage(
          "https://www.flaticon.com/svg/static/icons/svg/727/727245.svg",
          40,
          40,
          "*"
        )
      );
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["when_run"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  return code;
};

// move forward and backward block
Blockly.Blocks["block_type_move_fb"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("move")
      .appendField(
        new Blockly.FieldDropdown([
          ["forward", "F"],
          ["backward", "B"]
        ]),
        "direction"
      )
      .appendField("by")
      .appendField(new Blockly.FieldTextInput("100"), "pixels")
      .appendField("pixels");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(178);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_move_fb"] = function (block) {
  var dropdown_direction = block.getFieldValue("direction");
  var text_pixels = block.getFieldValue("pixels");
  var code = "";
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_direction === "F") {
    code = `moveForward(${text_pixels});`;
  }
  if (dropdown_direction === "B") {
    code = `moveBackward(${text_pixels});`;
  }

  return code;
};

// move left right blocks
Blockly.Blocks["block_type_move_lr"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("move")
      .appendField(
        new Blockly.FieldDropdown([
          ["left", "L"],
          ["right", "R"]
        ]),
        "direction"
      )
      .appendField("by")
      .appendField(new Blockly.FieldAngle(90), "angle")
      .appendField("angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(173);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_move_lr"] = function (block) {
  var dropdown_direction = block.getFieldValue("direction");
  var angle_angle = block.getFieldValue("angle");
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (dropdown_direction === "L") {
    code = `moveLeft(${angle_angle});`;
  }
  if (dropdown_direction === "R") {
    code = `moveRight(${angle_angle});`;
  }
  return code;
};

// jump forward backward block
Blockly.Blocks["block_type_jump_fb"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("jump")
      .appendField(
        new Blockly.FieldDropdown([
          ["forward", "F"],
          ["backward", "B"]
        ]),
        "direction"
      )
      .appendField("by")
      .appendField(new Blockly.FieldTextInput("100"), "pixels")
      .appendField("pixels");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(173);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_jump_fb"] = function (block) {
  var dropdown_direction = block.getFieldValue("direction");
  var text_pixels = block.getFieldValue("pixels");
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (dropdown_direction === "F") {
    code = `jumpForward(${text_pixels});`
  }
  if (dropdown_direction === "B") {
    code = `jumpBackward(${text_pixels});`;
  }
  return code;
};

// color blocks

Blockly.Blocks["block_type_set_color"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("set")
      .appendField(new Blockly.FieldColour("#ff0000"), "color")
      .appendField("color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(173);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_set_color"] = function (block) {
  var colour_color = block.getFieldValue("color");
  // TODO: Assemble JavaScript into code variable.
  // var colorString = colour_color + "";
  var code = `setColor("${colour_color}");`;
  return code;
};

// random color block
Blockly.Blocks["block_type_set_color_random"] = {
  init: function () {
    this.appendDummyInput().appendField(" set random color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(173);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_set_color_random"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "...;\n";
  return code;
};
