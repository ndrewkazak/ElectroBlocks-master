import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";

import { selectBoardBlockly } from "../../core/microcontroller/selectBoard";
import loopTimes from "../../core/blockly/helpers/looptimes";
Blockly.defineBlocksWithJsonArray([
  {
    type: "bluetooth_get_message",
    message0: "%1 bluetooth-ге хабарлама алу",
    args0: [
      {
        type: "field_image",
        src: "./blocks/bluetooth/bluetooth.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false,
      },
    ],
    output: "String",
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "bluetooth_has_message",
    message0: "%1 bluetooth хабарлама алды ма?",
    args0: [
      {
        type: "field_image",
        src: "./blocks/bluetooth/bluetooth.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false,
      },
    ],
    output: "Boolean",
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "bluetooth_send_message",
    message0: "%1 bluetooth хабарлама жіберу %2",
    args0: [
      {
        type: "field_image",
        src: "./blocks/bluetooth/bluetooth.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false,
      },
      {
        type: "input_value",
        name: "MESSAGE",
        check: "String",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: "",
  },
]);

const bluetoothSetupBlock: any = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("/blocks/bluetooth/bluetooth.png", 15, 15)
      )
      .appendField("Bluetooth баптаулары");
    this.appendDummyInput()
      .appendField("RX Pin# ")
      .appendField(
        new Blockly.FieldDropdown(() => {
          return selectBoardBlockly().digitalPins;
        }),
        "PIN_RX"
      )
      .appendField("TX Pin#")
      .appendField(
        new Blockly.FieldDropdown(selectBoardBlockly().digitalPins),
        "PIN_TX"
      );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "-----------------------------------------"
    );
    this.appendDummyInput()
      .appendField("Қайталау саны")
      .appendField(new Blockly.FieldDropdown(() => loopTimes()), "LOOP");
    this.appendDummyInput()
      .appendField("Хабар қабылдап жатырсыз ба? ")
      .appendField(
        new Blockly.FieldCheckbox("TRUE", (value) => {
          if ("FALSE" === value) {
            this.getField("message").setValue("");
          }
          return value;
        }),
        "receiving_message"
      );      
    this.appendDummyInput()
      .appendField("Хабарлама:")
      .appendField(
        new Blockly.FieldTextInput("Сәлем Әлем! :)", (value) => {
          if (this.getFieldValue("receiving_message") === "FALSE") {
            return null;
          }
          return value;
        }),
        "message"
      );      
    this.appendDummyInput("COPY_ALL")
      .appendField("Барлығын көшіру: ")
      .appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["bluetooth_setup"] = bluetoothSetupBlock;
