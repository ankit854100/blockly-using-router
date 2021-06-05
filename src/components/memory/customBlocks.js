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

// Blockly.Blocks["when_run"] = {
//   init: function () {
//     this.appendDummyInput().appendField("set game");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

// Blockly.JavaScript["when_run"] = function (block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = "";
//   return code;
// };

Blockly.Blocks["block_type_create_board"] = {
  init: function () {
    this.appendDummyInput().appendField("create board");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_create_board"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `if(j == 0){props.createBoard();j++;}`;
  return code;
};

Blockly.Blocks["block_type_draw_score"] = {
  init: function () {
    this.appendDummyInput().appendField("draw score");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_draw_score"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code =
    "var s = document.getElementById('score');\ns.innerHTML='Score: ' + game.score;";
  return code;
};

Blockly.Blocks["block_type_increase_score"] = {
  init: function () {
    this.appendDummyInput().appendField("increase score");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_increase_score"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\ngame.incrementScore();";
  return code;
};

Blockly.Blocks["block_type_score"] = {
  init: function () {
    this.appendDummyInput().appendField("score");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_score"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "game.score";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_while_game"] = {
  init: function () {
    this.appendDummyInput().appendField("while game not ended");
    this.appendStatementInput("NAME").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_while_game"] = function (block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `myTimeout = setTimeout(function onTick() { \n${statements_name}\nmain();}, 200);`;
  return code;
};

Blockly.Blocks["block_type_flip"] = {
  init: function () {
    this.appendDummyInput().appendField("cardIsClicked");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_flip"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "game.isClicked";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_flip_card"] = {
  init: function () {
    this.appendDummyInput().appendField("flip card");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_flip_card"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `game.flipCard();`;
  return code;
};

Blockly.Blocks["block_type_card_chosen"] = {
  init: function () {
    this.appendDummyInput().appendField("number cards chosen");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_card_chosen"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "game.noOfCards";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_equating"] = {
  init: function () {
    this.appendValueInput("FIRST").setCheck(null);
    this.appendValueInput("SECOND").setCheck(null).appendField(" = ");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_equating"] = function (block) {
  var value_name1 = Blockly.JavaScript.valueToCode(
    block,
    "FIRST",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_name2 = Blockly.JavaScript.valueToCode(
    block,
    "SECOND",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_name1} === ${value_name2}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_first_card_id"] = {
  init: function () {
    this.appendDummyInput().appendField("first card ID");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_first_card_id"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  // var code = "game.cardsChosenId[0] === game.cardsChosenId[1]";
  var code = "game.cardsChosenId[0]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_second_card_id"] = {
  init: function () {
    this.appendDummyInput().appendField("second card ID");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_second_card_id"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "game.cardsChosenId[1]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_flip_again"] = {
  init: function () {
    this.appendDummyInput().appendField("flip again");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_flip_again"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `\nvar cards = document.querySelectorAll("img");\ncards[game.cardsChosenId[0]].setAttribute("src", game.blank);\ncards[game.cardsChosenId[1]].setAttribute("src", game.blank);\nconsole.log("You have clicked the same image!");\ngame.resetArrays();\nconsole.log(game.cardsChosen);`;
  // var code = "console.log('same cards are chosen');";
  return code;
};

Blockly.Blocks["block_type_first_card"] = {
  init: function () {
    this.appendDummyInput().appendField("first card");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_first_card"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "game.cardsChosen[0]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_second_card"] = {
  init: function () {
    this.appendDummyInput().appendField("second card");
    this.setOutput(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_second_card"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "game.cardsChosen[1]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["block_type_remove_cards"] = {
  init: function () {
    this.appendDummyInput().appendField("remove cards");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_remove_cards"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `\nvar cards = document.querySelectorAll("img");\n\ncards[game.cardsChosenId[0]].removeEventListener("click", game.cardClickFunction);\ncards[game.cardsChosenId[1]].removeEventListener("click", game.cardClickFunction);\ngame.wonCardsPush(game.cardsChosen);\ngame.resetArrays();`;
  // var code = `game.sameCards();`;
  return code;
};
// cards[game.cardsChosenId[0]].setAttribute("src", game.white);\ncards[game.cardsChosenId[1]].setAttribute("src", game.white);
Blockly.Blocks["block_type_end_game"] = {
  init: function () {
    this.appendDummyInput().appendField("end game");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["block_type_end_game"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `clearTimeout(myTimeout);\nvar s = document.getElementById("score");\ns.innerHTML="YOU WIN:)"\nnewCode=""`;
  return code;
};
