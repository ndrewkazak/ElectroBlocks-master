import { COLOR_THEME } from "../../core/blockly/constants/colors";

export default `
<category name="Пассивті дыбыстық сигнал" colour="${COLOR_THEME.COMPONENTS}" >
       
       <block type="passive_buzzer_tone">
       <value name="TONE">
                   <block type="math_number">
                       <field name="NUM">123</field>
                   </block>
               </value>
        <comment pinned="false" h="60" w="460">Бұл пассивті дыбыстық сигналды қалаған кез келген тонға орнатады. </comment>
       </block>

       <block type="passive_buzzer_note">
       <field name="TONE">131</field>
        <comment pinned="false" h="60" w="460">Бұл пассивті сигналды қалаған жазбаға орнатады..</comment>
       </block>
       </category>
`;
