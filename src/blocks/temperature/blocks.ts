import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";
import loopTimes from "../../core/blockly/helpers/looptimes";

import { selectBoardBlockly } from "../../core/microcontroller/selectBoard";
Blockly.defineBlocksWithJsonArray([
  {
    type: "temp_get_temp",
    message0: "%1 Температура °C",
    args0: [
      {
        type: "field_image",
        src: "./blocks/temp/temp.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false,
      },
    ],
    output: "Number",
    colour: COLOR_THEME.SENSOR,
    tooltip: "",
    helpUrl: "",
  },

  {
    type: "temp_get_humidity",
    message0: "%1 Ылғалдылық %",
    args0: [
      {
        type: "field_image",
        src: "./blocks/temp/temp.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false,
      },
    ],
    output: "Number",
    colour: COLOR_THEME.SENSOR,
    tooltip: "",
    helpUrl: "",
  },
]);

const tempSetupBlock: any = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("./blocks/temp/temp.png", 15, 15))
      .appendField("Температура сенсорын орнату");
    this.appendDummyInput()
      .appendField("Pin# ")
      .appendField(
        new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
        "PIN"
      );
    this.appendDummyInput()
      .appendField("Түрі: ")
      .appendField(
        new Blockly.FieldDropdown([
          ["DHT11", "DHT11"],
          ["DHT21", "DHT21"],
          ["DHT22", "DHT22"],
        ]),
        "TYPE"
      );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "------------------------------------------"
    );
    this.appendDummyInput()
      .appendField("Қайталау саны")
      .appendField(
        new Blockly.FieldDropdown(() => {
          return loopTimes();
        }),
        "LOOP"
      );
    this.appendDummyInput()
      .appendField("Tтемпература Цельсий ")
      .appendField(new Blockly.FieldNumber(30, -200, 300, 0.00001), "temp");
    this.appendDummyInput()
      .appendField("Ылғалдылық ")
      .appendField(new Blockly.FieldNumber(5, 0, 300), "humidity");
      
    this.appendDummyInput("COPY_ALL")
      .appendField("Copy All: ")
      .appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["temp_setup"] = tempSetupBlock;
