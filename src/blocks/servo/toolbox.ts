import { COLOR_THEME } from "../../core/blockly/constants/colors";

export default `
<category name="Серво қозғалтқыш" colour="${COLOR_THEME.COMPONENTS}">

   <block type="rotate_servo">
    <comment pinned="false" h="180" w="460">Бұл блок сервоның бұрышы мен түйреуіштерін орнатады. Серво - бұл оның қаншалықты айналатынын басқаруға мүмкіндік беретін қозғалтқыш. Сіз болып табылатын түйреуіш Бұл блок серво үшін бұрыш пен түйреуішті орнатады. Серво - бұл оның қаншалықты айналатынын басқаруға мүмкіндік беретін қозғалтқыш. Сіз көрсеткен түйреуіш Arduino сервоның бұрышын басқару үшін пайдаланатын деректер түйреуіш болып табылады..</comment>
   <value name="DEGREE">
   <block type="math_number">
       <field name="NUM">50</field>
   </block>
   </value>
   </block>
   </category>
`;
