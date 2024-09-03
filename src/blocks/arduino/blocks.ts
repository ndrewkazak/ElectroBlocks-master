import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { IconType } from "blockly/core/icons";

Blockly.Blocks["arduino_loop"] = {
  init: function () {
    this.appendDummyInput().appendField("Цикл шексіз орындалады");
    this.appendDummyInput()
      .appendField(" Цикл ")
      .appendField(new Blockly.FieldNumber(3, 0, 1000), "LOOP_TIMES")
      .appendField("рет виртуалды түрде орындау");
    this.appendStatementInput("loop").setCheck(null);
    this.setColour(COLOR_THEME.ARDUINO_START_BLOCK);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setCommentText(
      "Цикл блогы Arduino қуатын жоғалтқанша қайталанып жұмыс істейді.  Егер сізде бар болса, ол орнату блогынан кейін бірден іске қосылады.\n\nСимуляторды пайдаланып жатсаңыз, оның қанша рет қайталанатынын басқара аласыз."
    );
    this.getIcon("comment")?.setBubbleSize(new Blockly.utils.Size(460, 170));
  },
};

Blockly.Blocks["arduino_setup"] = {
  init: function () {
    this.appendDummyInput().appendField("Setup (runs once)");
    this.appendStatementInput("setup").setCheck(null);
    this.setColour(COLOR_THEME.ARDUINO_START_BLOCK);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setCommentText(
      "Орнату блогы барлық кітапхана блоктарынан кейін жұмыс істейді.  Ол тек бір рет жұмыс істейді.\n\n орнату блогын пайдаланыңыз кодтағы айнымалыларды инициализациялаңыз."
    );
    this.getIcon("comment")?.setBubbleSize(new Blockly.utils.Size(460, 150));
  },
};
