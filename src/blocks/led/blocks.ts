import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { selectBoardBlockly } from "../../core/microcontroller/selectBoard";
import { whatIsAPin } from "../comment-text";
import { ledColors } from "./virtual-circuit";

Blockly.Blocks["led"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("./blocks/led/led.png", 15, 15))
      .appendField("Жағу ")
      .appendField(
        new Blockly.FieldColour("red", null, {
          colourOptions: [
            "#ff0000",
            "#008000",
            "#0000ff",
            "#ffff00",
            "#ffffff",
            "#800080",
            "#ffa500",
          ],
        }),
        "COLOR"
      )
      .appendField(" led# ")
      .appendField(
        new Blockly.FieldDropdown(() => {
          return selectBoardBlockly().digitalPins;
        }),
        "PIN"
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["қосу", "ON"],
          ["өшіру", "OFF"],
        ]),
        "STATE"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["led_fade"] = {
  init: function () {
    this.appendValueInput("Жарықтығы")
      .setCheck("Number")
      .appendField(new Blockly.FieldImage("./blocks/led/led.png", 15, 15))
      .appendField("Жарықтығын өзгерту")
      .appendField(
        new Blockly.FieldColour("red", null, {
          colourOptions: [
            "#ff0000",
            "#008000",
            "#0000ff",
            "#ffff00",
            "#ffffff",
            "#800080",
            "#ffa500",
          ],
        }),
        "COLOR"
      )
      .appendField(" led# ")
      .appendField(
        new Blockly.FieldDropdown(() => {
          return selectBoardBlockly().pwmPins;
        }),
        "PIN"
      )
      .appendField(" ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
