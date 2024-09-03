import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";
import loopTimes from "../../core/blockly/helpers/looptimes";
import { selectBoardBlockly } from "../../core/microcontroller/selectBoard";

Blockly.Blocks["thermistor_setup"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./blocks/thermistor/thermistor.svg", 15, 15)
      )
      .appendField("Термисторды орнату");
    this.appendDummyInput()
      .appendField("Аналогтық пин #")
      .appendField(
        new Blockly.FieldDropdown(() => selectBoardBlockly().analogPins),
        "PIN"
      );

    this.appendDummyInput()
      .appendField("Әдепкі температура °C: ")
      .appendField(new Blockly.FieldNumber(25, -50, 50), "DEFAULT_TEMP");

    this.appendDummyInput()
      .appendField("Термистор Ом: ")
      .appendField(
        new Blockly.FieldNumber(10000, 1000, 1000000, 1000),
        "THERMISTOR_RESISTANCE"
      );

    this.appendDummyInput()
      .appendField("Резистор Ом: ")
      .appendField(
        new Blockly.FieldNumber(10000, 1000, 1000000, 1000),
        "NONIMAL_RESISTANCE"
      );

    this.appendDummyInput()
      .appendField("B Мәні")
      .appendField(new Blockly.FieldNumber(3950, 1000, 10000, 1), "B_VALUE");
    this.appendDummyInput().appendField("------------------------------");
    this.appendDummyInput()
      .appendField("Қайталау саны")
      .appendField(new Blockly.FieldDropdown(() => loopTimes()), "LOOP");
    this.appendDummyInput()
      .appendField("Температура °C")
      .appendField(new Blockly.FieldNumber(23, -500, 500), "TEMP");
      
    this.appendDummyInput("COPY_ALL")
      .appendField("Барлығын көшіру: ")
      .appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["thermistor_read"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./blocks/thermistor/thermistor.svg", 15, 15)
      )
      .appendField("Температураны оқу");
    this.setOutput(true, "Number");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
