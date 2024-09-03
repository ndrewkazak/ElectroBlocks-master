import { selectBoardBlockly } from "../../core/microcontroller/selectBoard";
import Blockly from "blockly";

import { COLOR_THEME } from "../../core/blockly/constants/colors";
import loopTimes from "../../core/blockly/helpers/looptimes";
import {
  configuredPins,
  getAvailablePins,
} from "../../core/blockly/helpers/getAvialablePinsFromSetupBlock";

const analogReadBlock: any = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./blocks/arduino/analog_read.png", 15, 15)
      )
      .appendField("Аналогты пинды оқу#")
      .appendField(
        new Blockly.FieldDropdown(() => {
          return configuredPins(
            "digital_read_setup",
            selectBoardBlockly().analogPins
          );
        }),
        "PIN"
      );

    this.setOutput(true, "Number");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["analog_read"] = analogReadBlock;

const analogReadSetupBlock: any = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./blocks/arduino/analog_read.png", 15, 15)
      )
      .appendField("Аналогты пинды оқуды баптау");
    this.appendDummyInput()
      .appendField("Пин #")
      .appendField(
        new Blockly.FieldDropdown(() => {
          return getAvailablePins(
            "analog_read_setup",
            this.getFieldValue("PIN"),
            selectBoardBlockly().analogPins
          );
        }),
        "PIN"
      );
    const info = this.appendDummyInput("SHOW_CODE_VIEW")
      .appendField("Түрі")
      .appendField(
        new Blockly.FieldDropdown([
          ["Потенциометр", "POTENTIOMETER"],
          ["Фото сенсор (фоторезистор)", "PHOTO_SENSOR"],
          ["Топырақ сенсоры", "SOIL_SENSOR"],
          ["Сенсор", "SENSOR"],
        ]),
        "TYPE"
      );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "------------------------------------"
    );
    this.appendDummyInput("LOOP_TIMES")
      .appendField("Қайталау саны")
      .appendField(
        new Blockly.FieldDropdown(() => {
          return loopTimes();
        }),
        "LOOP"
      );

    this.appendDummyInput("LEVEL")
      .appendField("Сенсордың көрсеткіші: ")
      .appendField(new Blockly.FieldNumber(512, 0, 1024, 0.000001), "state");
    this.appendDummyInput("COPY_ALL")
      .appendField("Барлығын көшіру: ")
      .appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["analog_read_setup"] = analogReadSetupBlock;
