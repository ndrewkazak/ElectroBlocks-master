import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";

[
  { type: "сандық", blockName: "number", variable_type: "Number" },
  { type: "мәтіндік", blockName: "string", variable_type: "String" },
  { type: "логикалық", blockName: "boolean", variable_type: "Boolean" },
  { type: "түстік", blockName: "colour", variable_type: "Colour" },
].forEach(({ type, blockName, variable_type }) => {
  const humanType = type === "string" ? "text" : type;

  Blockly.Blocks[`variables_get_${blockName}`] = {
    init: function () {
      const fieldVar = new Blockly.FieldVariable(
        null,
        null,
        [variable_type],
        variable_type
      );
      (fieldVar as any).createNewVariable = false;
      (fieldVar as any).showOnlyVariableAssigned = false;
      this.appendDummyInput()
        // .appendField(`= ${humanType} variable`)
        .appendField(fieldVar, "VAR");
      this.setOutput(true, variable_type);
      this.setColour(COLOR_THEME.DATA);
      this.setTooltip("");
      this.setHelpUrl("");
      this.setCommentText(
        `Бұл блок айнымалы сақталатын мәнді алады. Бұл айнымалы ${humanType} сақтайды.`
      );

      this.getIcon("comment")?.setBubbleSize(new Blockly.utils.Size(460, 80));
    },
  };

  Blockly.Blocks[`variables_set_${blockName}`] = {
    init: function () {
      const fieldVar = new Blockly.FieldVariable(
        null,
        null,
        [variable_type],
        variable_type
      );
      (fieldVar as any).createNewVariable = false;
      (fieldVar as any).showOnlyVariableAssigned = false;
      this.appendValueInput("VALUE")
        .setCheck(variable_type)
        .appendField(`${humanType}`)
        .appendField(fieldVar, "VAR")
        .appendField(" = ");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(COLOR_THEME.DATA);
      this.setTooltip("");
      this.setHelpUrl("");
      this.setCommentText(
        `Бұл блок айнымалы сақталатын мәнді орнатады. Бұл айнымалы мән тек ${humanType} сақтайды.`
      );

      this.getIcon("comment")?.setBubbleSize(new Blockly.utils.Size(460, 90));
    },
  };
});
