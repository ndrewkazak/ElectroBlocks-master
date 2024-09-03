import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { selectBoardBlockly } from "../../core/microcontroller/selectBoard";

Blockly.Blocks["rgb_led_setup"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("./blocks/led/color_led.png", 15, 15))
      .appendField("RGB жарықдиодын орнату");
    this.appendDummyInput()
      .appendField("Сурет түрі")
      .appendField(
        new Blockly.FieldDropdown([
          ["Макет платасында", "BREADBOARD"],
          ["Аппаратқа кіріктірілген", "BUILT_IN"],
        ]),
        "PICTURE_TYPE"
      );
    this.appendDummyInput()
      .appendField("Қызыл")
      .appendField(
        new Blockly.FieldDropdown(() => selectBoardBlockly().pwmPins),
        "PIN_RED"
      )
      .appendField("Жасыл")
      .appendField(
        new Blockly.FieldDropdown(() => selectBoardBlockly().pwmPins),
        "PIN_GREEN"
      )
      .appendField("Көк")
      .appendField(
        new Blockly.FieldDropdown(() => selectBoardBlockly().pwmPins),
        "PIN_BLUE"
      );
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "set_color_led",
    message0: "%1 RGB жарық диоды түсін орнатыңыз %2",
    args0: [
      {
        type: "field_image",
        src: "./blocks/led/color_led.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false,
      },
      {
        type: "input_value",
        name: "COLOUR",
        check: "Colour",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: "",
  },
]);
