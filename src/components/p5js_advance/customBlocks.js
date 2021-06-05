import Blockly from "blockly/core";

Blockly.Blocks["block_type_for_loop"] = {
  init: function () {
    this.appendValueInput("VARIABLE").setCheck(null).appendField("count with ");
    this.appendValueInput("INITIALIZATION").setCheck(null).appendField("from");
    this.appendValueInput("TERMINATION").setCheck(null).appendField("to");
    this.appendValueInput("INCREMENT").setCheck(null).appendField("by");
    this.appendStatementInput("do").setCheck(null).appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.Blocks["block_type_setup"] = {
  init: function () {
    this.appendDummyInput().appendField("setup");
    this.appendStatementInput("SETUP").setCheck(null).appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.Blocks["block_type_canvas"] = {
  init: function () {
    this.appendDummyInput().appendField("createCanvas");
    this.appendValueInput("WIDTH")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("width");
    this.appendValueInput("HEIGHT")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("height");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.Blocks["block_type_draw"] = {
  init: function () {
    this.appendDummyInput().appendField("draw");
    this.appendStatementInput("NAME").setCheck(null).appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.Blocks["block_type_background"] = {
  init: function () {
    this.appendValueInput("BACKGROUND")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("background greyScale:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
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

Blockly.Blocks["block_type_fill"] = {
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

Blockly.Blocks["block_type_stroke"] = {
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

Blockly.Blocks["block_type_stroke_weight"] = {
  init: function () {
    this.appendValueInput("WEIGHT")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("stroke weight: ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("http://www.example.com/");
  }
};

Blockly.Blocks["block_type_ellipse"] = {
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

Blockly.Blocks["block_type_rect"] = {
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

Blockly.Blocks["block_type_circle"] = {
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

Blockly.Blocks["block_type_line"] = {
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

Blockly.Blocks["block_type_triangle"] = {
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

Blockly.JavaScript["block_type_for_loop"] = function (block) {
  var value_variable = Blockly.JavaScript.valueToCode(
    block,
    "VARIABLE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_initialization = Blockly.JavaScript.valueToCode(
    block,
    "INITIALIZATION",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_termination = Blockly.JavaScript.valueToCode(
    block,
    "TERMINATION",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_increment = Blockly.JavaScript.valueToCode(
    block,
    "INCREMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_do = Blockly.JavaScript.statementToCode(block, "do");
  // TODO: Assemble JavaScript into code variable.
  var code = `for(let ${value_variable} = ${value_initialization}; ${value_variable} < ${value_termination}; ${value_variable} += ${value_increment}){\n${statements_do}\n}\n`;
  return code;
};

Blockly.JavaScript["block_type_setup"] = function (block) {
  var statements_setup = Blockly.JavaScript.statementToCode(block, "SETUP");
  // TODO: Assemble JavaScript into code variable.
  // var code = `p5.setup = () => {p5.clear();\n${statements_setup}};`;
  var code = `function setup(){\n${statements_setup}\n}\n`;
  return code;
};

Blockly.JavaScript["block_type_canvas"] = function (block) {
  var value_width = Blockly.JavaScript.valueToCode(
    block,
    "WIDTH",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_height = Blockly.JavaScript.valueToCode(
    block,
    "HEIGHT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  // var code = `p5.createCanvas(${value_width}, ${value_height});`;
  var code = `createCanvas(${value_width}, ${value_height});\n`;
  return code;
};

Blockly.JavaScript["block_type_draw"] = function (block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `function draw(){\n${statements_name}\n};\n`;
  return code;
};

Blockly.JavaScript["block_type_background"] = function (block) {
  var value_background = Blockly.JavaScript.valueToCode(
    block,
    "BACKGROUND",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  // var code = `p5.background(${value_background});`;
  var code = `background(${value_background});\n`;
  return code;
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
  var code = `background(${value_r}, ${value_g}, ${value_b});\n`;
  return code;
};

Blockly.JavaScript["block_type_fill"] = function (block) {
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
  var code = `fill(${value_r}, ${value_g}, ${value_b});\n`;
  return code;
};

Blockly.JavaScript["block_type_background_nofill"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "noFill();\n";
  return code;
};

Blockly.JavaScript["block_type_stroke"] = function (block) {
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
  var code = `stroke(${value_r}, ${value_g}, ${value_b});\n`;
  return code;
};

Blockly.JavaScript["block_type_stroke_weight"] = function (block) {
  var value_weight = Blockly.JavaScript.valueToCode(
    block,
    "WEIGHT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `strokeWeight(${value_weight});\n`;
  return code;
};

Blockly.JavaScript["block_type_ellipse"] = function (block) {
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
  var code = `ellipse(${value_x}, ${value_y}, ${value_w}, ${value_h});\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript["block_type_rect"] = function (block) {
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
  var code = `rect(${value_x}, ${value_y}, ${value_w}, ${value_h});\n`;
  return code;
};

Blockly.JavaScript["block_type_circle"] = function (block) {
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
  var code = `circle(${value_x}, ${value_y}, ${value_dia});\n`;
  return code;
};

Blockly.JavaScript["block_type_line"] = function (block) {
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
  var code = `line(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2});\n`;
  return code;
};

Blockly.JavaScript["block_type_triangle"] = function (block) {
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
  var code = `triangle(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2}, ${value_x3}, ${value_y3});\n`;
  return code;
};
