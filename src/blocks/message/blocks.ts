import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";

import loopTimes from "../../core/blockly/helpers/looptimes";
Blockly.defineBlocksWithJsonArray([
  {
    type: "arduino_receive_message",
    message0: "%1 Ардуино хабарлама алды ма? ",
    args0: [
      {
        type: "field_image",
        src: "./blocks/message/message.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false,
      },
    ],
    output: "Boolean",
    colour: COLOR_THEME.ARDUINO,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "arduino_get_message",
    message0: "%1 Arduino-дан хабарлама алу",
    args0: [
      {
        type: "field_image",
        src: "./blocks/message/message.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false,
      },
    ],
    output: "String",
    colour: COLOR_THEME.ARDUINO,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "arduino_send_message",
    message0: "%1 Arduino жіберген хабарлама %2",
    args0: [
      {
        type: "field_image",
        src: "./blocks/message/message.png",
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
    colour: COLOR_THEME.ARDUINO,
    tooltip: "",
    helpUrl: "",
  },
]);

const messageSetupBlock: any = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./blocks/message/message.png", 15, 15)
      )
      .appendField("Arduino хабарламаларын баптау");

    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "-----------------------------------------"
    );
    this.appendDummyInput()
      .appendField("Қайталау саны")
      .appendField(new Blockly.FieldDropdown(() => loopTimes()), "LOOP");
    this.appendDummyInput()
      .appendField("Хабарлама қабылдай ма? ")
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
    this.setColour(COLOR_THEME.ARDUINO);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["message_setup"] = messageSetupBlock;
