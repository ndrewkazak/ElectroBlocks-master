import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";

import { selectBoardBlockly } from "../../core/microcontroller/selectBoard";
import loopTimes from "../../core/blockly/helpers/looptimes";
Blockly.defineBlocksWithJsonArray([
  {
    type: "rfid_scan",
    message0: "%1 rfid оқу құралы жаңа картаны тапты ма?",
    args0: [
      {
        type: "field_image",
        src: "./blocks/rfid/rfid.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false,
      },
    ],
    inputsInline: false,
    output: "Boolean",
    colour: COLOR_THEME.SENSOR,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "rfid_card",
    lastDummyAlign0: "RIGHT",
    metadata: "blue",
    message0: "%1 Карта нөмірін алу",
    args0: [
      {
        type: "field_image",
        src: "./blocks/rfid/rfid.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false,
      },
    ],
    inputsInline: false,
    output: "String",
    colour: COLOR_THEME.SENSOR,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "rfid_tag",
    lastDummyAlign0: "RIGHT",
    metadata: "blue",
    message0: "%1 Тегті алу",
    args0: [
      {
        type: "field_image",
        src: "./blocks/rfid/rfid.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false,
      },
    ],
    inputsInline: false,
    output: "String",
    colour: COLOR_THEME.SENSOR,
    tooltip: "",
    helpUrl: "",
  },
]);

const rfidSetupBlock: any = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("./blocks/rfid/rfid.png", 15, 15))
      .appendField("RFID орнату");
    this.appendDummyInput()
      .appendField("TX Pin#")
      .appendField(
        new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
        "PIN_TX"
      );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "-----------------------------------------"
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
      .appendField("Карточка сканерленген бе?")
      .appendField(
        new Blockly.FieldCheckbox("TRUE", (value) => {
          if ("FALSE" === value) {
            this.getField("card_number").setValue("");
            this.getField("tag").setValue("");
          }
          return value;
        }),
        "scanned_card"
      );          
    this.appendDummyInput()
      .appendField("Карта #:")
      .appendField(
        new Blockly.FieldTextInput("card#", (value) => {
          if (this.getFieldValue("scanned_card") === "FALSE") {
            return null;
          }
          return value;
        }),
        "card_number"
      );
    this.appendDummyInput()
      .appendField("Тэг#:")
      .appendField(
        new Blockly.FieldTextInput("tag", (value) => {
          if (this.getFieldValue("scanned_card") === "FALSE") {
            return null;
          }
          return value;
        }),
        "tag"
      );
      
    this.appendDummyInput("COPY_ALL")
      .appendField("Барлығын көшіру: ")
      .appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["rfid_setup"] = rfidSetupBlock;
