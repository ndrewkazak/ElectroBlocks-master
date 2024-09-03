import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";
import loopTimes from "../../core/blockly/helpers/looptimes";
import { selectBoardBlockly } from "../../core/microcontroller/selectBoard";

Blockly.Blocks["joystick_setup"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./blocks/joystick/joystick.png", 15, 15)
      )
      .appendField("Джойстик орнату");
    this.appendDummyInput()
      .appendField("X Pin: ")
      .appendField(
        new Blockly.FieldDropdown(() => selectBoardBlockly().analogPins),
        "PIN_X"
      );
    this.appendDummyInput()
      .appendField("Y Pin: ")
      .appendField(
        new Blockly.FieldDropdown(() => selectBoardBlockly().analogPins),
        "PIN_Y"
      );
    this.appendDummyInput()
      .appendField("Батырма Pin-і: ")
      .appendField(
        new Blockly.FieldDropdown(selectBoardBlockly().digitalPins),
        "PIN_BUTTON"
      );
    this.appendDummyInput().appendField("------------------------------");
    this.appendDummyInput()
      .appendField("Қайталау саны")
      .appendField(new Blockly.FieldDropdown(() => loopTimes()), "LOOP");
    this.appendDummyInput()
      .appendField("Бос емес")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "ENGAGED");
    this.appendDummyInput()
      .appendField("Дәрежесі")
      .appendField(new Blockly.FieldAngle(0), "DEGREE");
    this.appendDummyInput()
      .appendField("Батырма Басылды")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "BUTTON_PRESSED");      
    this.appendDummyInput("COPY_ALL")
      .appendField("Барлығын көшіру: ")
      .appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["joystick_angle"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./blocks/joystick/joystick.png", 15, 15)
      )
      .appendField("Джойстик Бұрышы");
    this.setOutput(true, "Number");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["joystick_engaged"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./blocks/joystick/joystick.png", 15, 15)
      )
      .appendField("джойстик қосылды ма?");
    this.setOutput(true, "Boolean");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["joystick_button"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./blocks/joystick/joystick.png", 15, 15)
      )
      .appendField(" джойстик батырмасы басылды ма?");
    this.setOutput(true, "Boolean");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
