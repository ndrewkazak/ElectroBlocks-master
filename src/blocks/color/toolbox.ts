import { COLOR_THEME } from "../../core/blockly/constants/colors";

export default `
<category name="Түстер" colour="${COLOR_THEME.VALUES}">
<block type="color_picker_custom"></block>
<block type="colour_random"></block>
       <block type="colour_rgb">
         <comment pinned="false" h="70" w="460">Бұл реттелетін түсті жасау үшін пайдаланылады.  Реттелетін түсті табу үшін Google "RGB color picker" пайдаланыңыз.</comment>

         <value name="RED">
           <block type="math_number">
             <field name="NUM">100</field>
           </block>
         </value>
         <value name="GREEN">
           <block type="math_number">
             <field name="NUM">50</field>
           </block>
         </value>
         <value name="BLUE">
           <block type="math_number">
             <field name="NUM">0</field>
           </block>
         </value>
       </block>
     </category>
`;
