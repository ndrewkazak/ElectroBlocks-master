import { COLOR_THEME } from "../../core/blockly/constants/colors";

export default `<category name="Циклдар" colour="${COLOR_THEME.CONTROL}">
     <block type="controls_repeat_ext">
       <value name="TIMES">
         <block type="math_number">
           <field name="NUM">10</field>
         </block>
       </value>
     </block>
     <block type="controls_for">
         <comment pinned="false" h="140" w="460">A for «блокпен санау» айнымалы «to» нүктесіне жеткеннен кейін циклды тоқтататын цикл жасайды. Бұл блокты үйренудің ең жақсы жолы - оны сүйреп апарып, симуляторда оның мәндерімен ойнау.</comment>

       <value name="FROM">
         <block type="math_number">
           <field name="NUM">1</field>
         </block>
       </value>
       <value name="TO">
         <block type="math_number">
           <field name="NUM">10</field>
         </block>
       </value>
       <value name="BY">
         <block type="math_number">
           <field name="NUM">1</field>
         </block>
       </value>
     </block>
   </category>
`;
