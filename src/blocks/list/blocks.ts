import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";

[
  { type: "сан", blockName: "number", variable_type: "List Number" },
  { type: "жолдық", blockName: "string", variable_type: "List String" },
  { type: "логикалық", blockName: "boolean", variable_type: "List Boolean" },
  { type: "түстік", blockName: "colour", variable_type: "List Colour" },
].forEach(({ type, blockName, variable_type }) => {
  const humanType = type === "string" ? "text" : type;

  Blockly.Blocks[`create_list_${blockName}_block`] = {
    init: function () {
      const varField = new Blockly.FieldVariable(
        null,
        null,
        [variable_type],
        variable_type
      );
      (varField as any).showOnlyVariableAssigned = true;
      (varField as any).createNewVariable = false;
      this.appendDummyInput()
        .appendField(`Тізім`)
        .appendField(varField, "VAR")
        .appendField(" сақтайды ")
        .appendField(new Blockly.FieldNumber(2, 2, 1000), "Өлшемі")
        .appendField(` ${humanType}`);

      this.setColour(COLOR_THEME.DATA);
      this.setTooltip("");
      this.setHelpUrl("");
      this.setCommentText(
        `Бұл блок ${humanType} тізімін жасайды. Өлшем тізімдегі ${humanType} санын анықтайды.`
      );

      this.getIcon("comment")?.setBubbleSize(new Blockly.utils.Size(460, 80));
    },
  };

  Blockly.Blocks[`set_${blockName}_list_block`] = {
    init: function () {
      const varField = new Blockly.FieldVariable(
        null,
        null,
        [variable_type],
        variable_type
      );
      (varField as any).showOnlyVariableAssigned = false;

      this.appendValueInput("Мән")
        .setCheck(variable_type.replace("Тізім ", ""))
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(`Енгізілетін мән ${humanType}`);
      this.appendValueInput("Орны")
        .setCheck("Number")
        .appendField(" Тізім: ")
        .appendField(varField, "мән")
        .appendField(" орны: ");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(COLOR_THEME.DATA);
      this.setTooltip("");
      this.setHelpUrl("");

      this.setCommentText(
        `Бұл блок ${humanType}ды тізімге қояды. Орны ${humanType} тізімдегі қай жерде болатынын анықтайды. Тізімдегі бірінші ${humanType} 1-орыннан басталады..`
      );
      this.getIcon("comment")?.setBubbleSize(new Blockly.utils.Size(460, 120));
    },
  };

  Blockly.Blocks[`get_${blockName}_from_list`] = {
    init: function () {
      const varField = new Blockly.FieldVariable(
        null,
        null,
        [variable_type],
        variable_type
      );
      (varField as any).showOnlyVariableAssigned = false;

      this.appendDummyInput()
        .appendField(`Тізімнен ${humanType} өшіру `)
        .appendField(varField, "VAR");
      this.appendValueInput("POSITION")
        .setCheck("Number")
        .appendField(" Индексі: ");
      this.setInputsInline(true);
      this.setOutput(true, variable_type.replace("List ", ""));
      this.setColour(COLOR_THEME.DATA);
      this.setTooltip("");
      this.setHelpUrl("");
      this.setCommentText(
        `Бұл блок тізімнен ${humanType} алады. Орны тізімдегі қай жерден ${humanType} алатыныңызды анықтайды. Тізімдегі бірінші ${humanType} 1-орыннан басталады.`
      );


      this.getIcon("comment")?.setBubbleSize(new Blockly.utils.Size(460, 120));
    },
  };
});
