import Blockly from "blockly/core";
import "blockly/javascript";

Blockly.Blocks["draw"] = {
  init: function () {
    this.appendDummyInput().appendField("draw");
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["draw"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  return code;
};

Blockly.Blocks["block_type_random"] = {
  init: function () {
    this.appendValueInput("r").setCheck(null).appendField("random");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_random"] = function (block) {
  var value_r = Blockly.JavaScript.valueToCode(
    block,
    "r",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `calRandom(${value_r})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_stroke_2"] = {
  init: function () {
    this.appendValueInput("r").setCheck(null).appendField("stroke r:");
    this.appendValueInput("g").setCheck(null).appendField("g:");
    this.appendValueInput("b").setCheck(null).appendField("b:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_stroke_2"] = function (block) {
  var value_r = Blockly.JavaScript.valueToCode(
    block,
    "r",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_g = Blockly.JavaScript.valueToCode(
    block,
    "g",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_b = Blockly.JavaScript.valueToCode(
    block,
    "b",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `p5.stroke(${value_r}, ${value_g}, ${value_b});`;
  return code;
};

Blockly.Blocks["block_type_fill_2"] = {
  init: function () {
    this.appendValueInput("r").setCheck(null).appendField("fill r:");
    this.appendValueInput("g").setCheck(null).appendField("g:");
    this.appendValueInput("b").setCheck(null).appendField("b:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_fill_2"] = function (block) {
  var value_r = Blockly.JavaScript.valueToCode(
    block,
    "r",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_g = Blockly.JavaScript.valueToCode(
    block,
    "g",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_b = Blockly.JavaScript.valueToCode(
    block,
    "b",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `p5.fill(${value_r}, ${value_g}, ${value_b});`;
  return code;
};

Blockly.Blocks["block_type_background_2"] = {
  init: function () {
    this.appendValueInput("r").setCheck(null).appendField("background r:");
    this.appendValueInput("g").setCheck(null).appendField("g:");
    this.appendValueInput("b").setCheck(null).appendField("b:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_background_2"] = function (block) {
  var value_r = Blockly.JavaScript.valueToCode(
    block,
    "r",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_g = Blockly.JavaScript.valueToCode(
    block,
    "g",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_b = Blockly.JavaScript.valueToCode(
    block,
    "b",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `p5.background(${value_r}, ${value_g}, ${value_b});`;
  return code;
};

// background grey scale

Blockly.Blocks["block_type_background"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("set background  greyScale: ")
      .appendField(new Blockly.FieldNumber(0), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_background"] = function (block) {
  var number_value = block.getFieldValue("value");
  // TODO: Assemble JavaScript into code variable.
  var code = `p5.background(${number_value});`;
  return code;
};

Blockly.Blocks["block_type_background_rgb"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("set background  r: ")
      .appendField(new Blockly.FieldNumber(0), "r")
      .appendField(" g: ")
      .appendField(new Blockly.FieldNumber(0), "g")
      .appendField(" b: ")
      .appendField(new Blockly.FieldNumber(0), "b");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_background_rgb"] = function (block) {
  var number_r = block.getFieldValue("r");
  var number_g = block.getFieldValue("g");
  var number_b = block.getFieldValue("b");
  // TODO: Assemble JavaScript into code variable.
  var code = `p5.background(${number_r}, ${number_g}, ${number_b});`;
  return code;
};

// fill rgb
Blockly.Blocks["block_type_background_fill"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("fill  r: ")
      .appendField(new Blockly.FieldNumber(0), "r")
      .appendField(" g: ")
      .appendField(new Blockly.FieldNumber(0), "g")
      .appendField(" b: ")
      .appendField(new Blockly.FieldNumber(0), "b");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_background_fill"] = function (block) {
  var number_r = block.getFieldValue("r");
  var number_g = block.getFieldValue("g");
  var number_b = block.getFieldValue("b");
  // TODO: Assemble JavaScript into code variable.
  var code = `p5.fill(${number_r}, ${number_g}, ${number_b});`;
  return code;
};

// fill greyScale

Blockly.Blocks["block_type_background_fill_grey"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("fill  greyScale: ")
      .appendField(new Blockly.FieldNumber(0), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_background_fill_grey"] = function (block) {
  var number_value = block.getFieldValue("value");
  // TODO: Assemble JavaScript into code variable.
  var code = `p5.fill(${number_value});`;
  return code;
};

// no fill

Blockly.Blocks["block_type_background_nofill"] = {
  init: function () {
    this.appendDummyInput().appendField("nofill");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_background_nofill"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "p5.noFill();";
  return code;
};

// stroke rgb

Blockly.Blocks["block_type_background_stroke"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("stroke  r: ")
      .appendField(new Blockly.FieldNumber(0), "r")
      .appendField(" g: ")
      .appendField(new Blockly.FieldNumber(0), "g")
      .appendField(" b: ")
      .appendField(new Blockly.FieldNumber(0), "b");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_background_stroke"] = function (block) {
  var number_r = block.getFieldValue("r");
  var number_g = block.getFieldValue("g");
  var number_b = block.getFieldValue("b");
  // TODO: Assemble JavaScript into code variable.
  var code = `p5.stroke(${number_r}, ${number_g}, ${number_b});`;
  return code;
};

// stroke greyScale

Blockly.Blocks["block_type_background_strokegrey"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("stroke  greyscale:  ")
      .appendField(new Blockly.FieldNumber(0), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_background_strokegrey"] = function (block) {
  var number_value = block.getFieldValue("value");
  // TODO: Assemble JavaScript into code variable.
  var code = `p5.stroke(${number_value});`;
  return code;
};

// stroke weight

Blockly.Blocks["block_type_background_stroke_weight"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("stroke weight: ")
      .appendField(new Blockly.FieldNumber(0), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_background_stroke_weight"] = function (block) {
  var number_value = block.getFieldValue("value");
  // TODO: Assemble JavaScript into code variable.
  var code = `p5.strokeWeight(${number_value});`;
  return code;
};

// erase
Blockly.Blocks["block_type_background_erase"] = {
  init: function () {
    this.appendDummyInput().appendField("erase ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_background_erase"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "p5.erase();";
  return code;
};

// no erase

Blockly.Blocks["block_type_background_no_erase"] = {
  init: function () {
    this.appendDummyInput().appendField("no erase ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

// for loop
Blockly.JavaScript["block_type_background_no_erase"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "p5.noErase();";
  return code;
};

Blockly.Blocks["block_type_for"] = {
  init: function () {
    this.appendValueInput("start")
      .setCheck("Number")
      .appendField("count with")
      .appendField(
        new Blockly.FieldDropdown([
          ["index1", "index1"],
          ["index2", "index2"],
          ["index3", "index3"]
        ]),
        "NAME"
      );
    this.appendValueInput("terminate").setCheck("Number").appendField("to");
    this.appendValueInput("increment").setCheck("Number").appendField("by");
    this.appendStatementInput("for").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_for"] = function (block) {
  var dropdown_name = block.getFieldValue("NAME");
  var value_start = Blockly.JavaScript.valueToCode(
    block,
    "start",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_terminate = Blockly.JavaScript.valueToCode(
    block,
    "terminate",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_increment = Blockly.JavaScript.valueToCode(
    block,
    "increment",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_for = Blockly.JavaScript.statementToCode(block, "for");
  // TODO: Assemble JavaScript into code variable.
  var code = `for(let ${dropdown_name} = ${value_start}; ${dropdown_name} < ${value_terminate}; ${dropdown_name} += ${value_increment}){${statements_for}};`;
  return code;
};

Blockly.Blocks["block_type_for_index"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["index1", "index1"],
        ["index2", "index2"],
        ["index3", "index3"]
      ]),
      "drop"
    );
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_for_index"] = function (block) {
  var dropdown_drop = block.getFieldValue("drop");
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_drop;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_ellipse_2"] = {
  init: function () {
    this.appendValueInput("x")
      .setCheck(null)
      .appendField("ellipse")
      .appendField("x: ");
    this.appendValueInput("y").setCheck(null).appendField("y:");
    this.appendValueInput("w").setCheck(null).appendField("w:");
    this.appendValueInput("h").setCheck(null).appendField("h:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_ellipse_2"] = function (block) {
  var value_x = Blockly.JavaScript.valueToCode(
    block,
    "x",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_y = Blockly.JavaScript.valueToCode(
    block,
    "y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_w = Blockly.JavaScript.valueToCode(
    block,
    "w",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_h = Blockly.JavaScript.valueToCode(
    block,
    "h",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `p5.ellipse(${value_x}, ${value_y}, ${value_w}, ${value_h});`;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks["block_type_rect2"] = {
  init: function () {
    this.appendValueInput("x")
      .setCheck(null)
      .appendField("rectangle")
      .appendField("x: ");
    this.appendValueInput("y").setCheck(null).appendField("y:");
    this.appendValueInput("w").setCheck(null).appendField("w:");
    this.appendValueInput("h").setCheck(null).appendField("h:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_rect2"] = function (block) {
  var value_x = Blockly.JavaScript.valueToCode(
    block,
    "x",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_y = Blockly.JavaScript.valueToCode(
    block,
    "y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_w = Blockly.JavaScript.valueToCode(
    block,
    "w",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_h = Blockly.JavaScript.valueToCode(
    block,
    "h",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `p5.rect(${value_x}, ${value_y}, ${value_w}, ${value_h});`;
  return code;
};

Blockly.Blocks["block_type_circle_2"] = {
  init: function () {
    this.appendValueInput("x")
      .setCheck(null)
      .appendField("circle")
      .appendField("x: ");
    this.appendValueInput("y").setCheck(null).appendField("y:");
    this.appendValueInput("dia").setCheck(null).appendField("diameter: ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_circle_2"] = function (block) {
  var value_x = Blockly.JavaScript.valueToCode(
    block,
    "x",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_y = Blockly.JavaScript.valueToCode(
    block,
    "y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_dia = Blockly.JavaScript.valueToCode(
    block,
    "dia",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `p5.circle(${value_x}, ${value_y}, ${value_dia});`;
  return code;
};

Blockly.Blocks["block_type_line_2"] = {
  init: function () {
    this.appendValueInput("x1")
      .setCheck(null)
      .appendField("line")
      .appendField("x1:");
    this.appendValueInput("y1").setCheck(null).appendField("y1:");
    this.appendValueInput("x2").setCheck(null).appendField("x2:");
    this.appendValueInput("y2").setCheck(null).appendField("y2:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_line_2"] = function (block) {
  var value_x1 = Blockly.JavaScript.valueToCode(
    block,
    "x1",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_y1 = Blockly.JavaScript.valueToCode(
    block,
    "y1",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_x2 = Blockly.JavaScript.valueToCode(
    block,
    "x2",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_y2 = Blockly.JavaScript.valueToCode(
    block,
    "y2",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `p5.line(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2});`;
  return code;
};

Blockly.Blocks["block_type_triangle_2"] = {
  init: function () {
    this.appendValueInput("x1")
      .setCheck(null)
      .appendField("triangle")
      .appendField("x1:");
    this.appendValueInput("y1").setCheck(null).appendField("y1:");
    this.appendValueInput("x2").setCheck(null).appendField("x2:");
    this.appendValueInput("y2").setCheck(null).appendField("y2:");
    this.appendValueInput("x3").setCheck(null).appendField("x3");
    this.appendValueInput("y3").setCheck(null).appendField("y3");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.JavaScript["block_type_triangle_2"] = function (block) {
  var value_x1 = Blockly.JavaScript.valueToCode(
    block,
    "x1",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_y1 = Blockly.JavaScript.valueToCode(
    block,
    "y1",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_x2 = Blockly.JavaScript.valueToCode(
    block,
    "x2",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_y2 = Blockly.JavaScript.valueToCode(
    block,
    "y2",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_x3 = Blockly.JavaScript.valueToCode(
    block,
    "x3",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_y3 = Blockly.JavaScript.valueToCode(
    block,
    "y3",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `p5.triangle(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2}, ${value_x3}, ${value_y3});`;
  return code;
};

// // BASIC SHAPES
// // ellipse
// Blockly.Blocks["block_type_ellipse"] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField("Ellipse")
//       .appendField(" center x:")
//       .appendField(new Blockly.FieldNumber(0), "x")
//       .appendField("y: ")
//       .appendField(new Blockly.FieldNumber(0), "y")
//       .appendField("width:")
//       .appendField(new Blockly.FieldNumber(0), "width")
//       .appendField("height:")
//       .appendField(new Blockly.FieldNumber(0), "height");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(180);
//     this.setTooltip("");
//     this.setHelpUrl("http://www.example.com/");
//   }
// };

// Blockly.JavaScript["block_type_ellipse"] = function (block) {
//   var number_x = block.getFieldValue("x");
//   var number_y = block.getFieldValue("y");
//   var number_width = block.getFieldValue("width");
//   var number_height = block.getFieldValue("height");
//   // TODO: Assemble JavaScript into code variable.
//   // var code = `assets.isEllipseDrawn(1);\nassets.setEllipse(${number_x}, ${number_y}, ${number_width}, ${number_height});`;
//   var code = `p5.ellipse(${number_x}, ${number_y}, ${number_width}, ${number_height});`;
//   return code;
// };

// // rectangle
// Blockly.Blocks["block_type_rect"] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField("Rectangle")
//       .appendField("center x: ")
//       .appendField(new Blockly.FieldNumber(0), "x")
//       .appendField(" y: ")
//       .appendField(new Blockly.FieldNumber(0), "y")
//       .appendField(" width: ")
//       .appendField(new Blockly.FieldNumber(0), "w")
//       .appendField(" height: ")
//       .appendField(new Blockly.FieldNumber(0), "h");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(180);
//     this.setTooltip("");
//     this.setHelpUrl("http://www.example.com/");
//   }
// };

// Blockly.JavaScript["block_type_rect"] = function (block) {
//   var number_x = block.getFieldValue("x");
//   var number_y = block.getFieldValue("y");
//   var number_w = block.getFieldValue("w");
//   var number_h = block.getFieldValue("h");
//   // TODO: Assemble JavaScript into code variable.
//   // var code = `assets.isRectDrawn(1);\nassets.setRect(${number_x}, ${number_y}, ${number_w}, ${number_h});`;
//   var code = `p5.rect(${number_x}, ${number_y}, ${number_w}, ${number_h});`;
//   return code;
// };

// // triangle
// Blockly.Blocks["block_type_triangle"] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField("Triangle")
//       .appendField("x1: ")
//       .appendField(new Blockly.FieldNumber(0), "x1")
//       .appendField(" y1: ")
//       .appendField(new Blockly.FieldNumber(0), "y1")
//       .appendField(" x2: ")
//       .appendField(new Blockly.FieldNumber(0), "x2")
//       .appendField(" y2: ")
//       .appendField(new Blockly.FieldNumber(0), "y2")
//       .appendField(" x3: ")
//       .appendField(new Blockly.FieldNumber(0), "x3")
//       .appendField(" y3: ")
//       .appendField(new Blockly.FieldNumber(0), "y3");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(180);
//     this.setTooltip("");
//     this.setHelpUrl("http://www.example.com/");
//   }
// };

// Blockly.JavaScript["block_type_triangle"] = function (block) {
//   var number_x1 = block.getFieldValue("x1");
//   var number_y1 = block.getFieldValue("y1");
//   var number_x2 = block.getFieldValue("x2");
//   var number_y2 = block.getFieldValue("y2");
//   var number_x3 = block.getFieldValue("x3");
//   var number_y3 = block.getFieldValue("y3");
//   // TODO: Assemble JavaScript into code variable.
//   // var code = `assets.isTriangleDrawn(1);\nassets.setTraingle(${number_x1}, ${number_y1}, ${number_x2}, ${number_y2}, ${number_x3}, ${number_y3});`;
//   var code = `p5.triangle(${number_x1}, ${number_y1}, ${number_x2}, ${number_y2}, ${number_x3}, ${number_y3});`;
//   return code;
// };

// // line

// Blockly.Blocks["block_type_line"] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField("Line")
//       .appendField("x1: ")
//       .appendField(new Blockly.FieldNumber(0), "x1")
//       .appendField(" y1: ")
//       .appendField(new Blockly.FieldNumber(0), "y1")
//       .appendField(" x2: ")
//       .appendField(new Blockly.FieldNumber(0), "x2")
//       .appendField(" y2: ")
//       .appendField(new Blockly.FieldNumber(0), "y2");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(180);
//     this.setTooltip("");
//     this.setHelpUrl("http://www.example.com/");
//   }
// };

// Blockly.JavaScript["block_type_line"] = function (block) {
//   var number_x1 = block.getFieldValue("x1");
//   var number_y1 = block.getFieldValue("y1");
//   var number_x2 = block.getFieldValue("x2");
//   var number_y2 = block.getFieldValue("y2");
//   // TODO: Assemble JavaScript into code variable.
//   // var code = `assets.isLineDrawn(1);\nassets.setLine(${number_x1}, ${number_y1}, ${number_x2}, ${number_y2});`;
//   var code = `p5.line(${number_x1}, ${number_y1}, ${number_x2}, ${number_y2});`;
//   return code;
// };

// // circle

// Blockly.Blocks["block_type_circle"] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField("Circle")
//       .appendField(" x: ")
//       .appendField(new Blockly.FieldNumber(0), "x")
//       .appendField(" y: ")
//       .appendField(new Blockly.FieldNumber(0), "y")
//       .appendField(" diameter: ")
//       .appendField(new Blockly.FieldNumber(0), "diameter");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(180);
//     this.setTooltip("");
//     this.setHelpUrl("http://www.example.com/");
//   }
// };

// Blockly.JavaScript["block_type_circle"] = function (block) {
//   var number_x = block.getFieldValue("x");
//   var number_y = block.getFieldValue("y");
//   var number_diameter = block.getFieldValue("diameter");
//   // TODO: Assemble JavaScript into code variable.
//   // var code = `assets.isCircleDrawn(1);\nassets.setCircle(${number_x}, ${number_y}, ${number_diameter});`;
//   var code = `p5.circle(${number_x}, ${number_y}, ${number_diameter});`;
//   return code;
// };
