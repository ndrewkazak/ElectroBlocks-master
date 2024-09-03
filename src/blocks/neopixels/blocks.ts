import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";

import { selectBoardBlockly } from "../../core/microcontroller/selectBoard";

Blockly.defineBlocksWithJsonArray([
  {
    type: "neo_pixel_set_color",
    message0: "%1 Жарықдиодтың түсін орнату %2 Қай жарықдиод: %3 Қандай түс: %4",
    args0: [
      {
        type: "field_image",
        src: "./blocks/neo_pixel/neo_pixel.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false,
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "POSITION",
        check: "Number",
        align: "RIGHT",
      },
      {
        type: "input_value",
        name: "COLOR",
        check: "Colour",
        align: "RIGHT",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: "",
  },
]);

Blockly.Blocks["neo_pixel_setup"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./blocks/neo_pixel/neo_pixel.png", 15, 15)
      )
      .appendField("Жарықдиодты түсті жолақты орнату");
    this.appendDummyInput()
      .appendField("Аналогтық деректер пині")
      .appendField(
        new Blockly.FieldDropdown(() => selectBoardBlockly().pwmPins),
        "PIN"
      );
    this.appendDummyInput()
      .appendField("Жарықдиодтар саны")
      .appendField(new Blockly.FieldNumber(30, 1, 150), "NUMBER_LEDS");
    this.appendDummyInput()
      .appendField("Жарықтық 1-ден 20-ға дейін")
      .appendField(new Blockly.FieldNumber(10, 1, 20, 1), "BRIGHTNESS");

    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
