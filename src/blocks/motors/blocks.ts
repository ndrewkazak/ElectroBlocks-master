import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";

Blockly.defineBlocksWithJsonArray([
  // BEGIN JSON EXTRACT
  {
    type: "move_motor",
    message0: "%1 Қозғалтқышты жылжыту %2 Қай қозғалтқыш %3 Бағыт %4 %5 Жылдамдық %6",
    args0: [
      {
        type: "field_image",
        src: "./blocks/motor/motor.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false,
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_dropdown",
        name: "MOTOR",
        // check: "Number",
        // align: "RIGHT",
        options: [
          ["1", "1"],
          ["2", "2"],
        ],
      },
      
      {
        type: "field_dropdown",
        name: "DIRECTION",
        options: [
          ["Сағат тілімен", "CLOCKWISE"],
          ["Сағат тіліне қарсы", "ANTICLOCKWISE"],
        ],
      },
      {
        type: "input_dummy",
        align: "RIGHT",
      },
      {
        type: "input_value",
        name: "SPEED",
        check: "Number",
        align: "RIGHT",
      },
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: "",
  },
]);
