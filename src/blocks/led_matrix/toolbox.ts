import { COLOR_THEME } from "../../core/blockly/constants/colors";

export default `<category colour="${COLOR_THEME.COMPONENTS}" name="Жарықдиодты матрица">
     <block type="led_matrix_setup">
    <comment pinned="false" h="60" w="460">Бұл блок рұқсат матрицасын орнатады.</comment>
                           <field name="PIN_DATA">10</field>
                           <field name="PIN_CLK">12</field>
                           <field name="PIN_CS">11</field>

     </block>

     <block type="led_matrix_make_draw">
        <comment pinned="false" h="80" w="460">Жарық диодты матрицаға үлгі салу үшін құсбелгілерді қойыңыз.</comment>
     </block>
   <block type="led_matrix_turn_one_on_off">
   <comment pinned="false" h="150" w="460" >Жарық диодты матрицадағы бір жарықдиодты өшіреді немесе өшіреді.

Бағанның саны неғұрлым жоғары болса, жарық диоды соғұрлым оң болады. Жолдың саны неғұрлым жоғары болса, соғұрлым төмен болады.</comment>
   <value name="ROW">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
               <value name="COLUMN">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
   </block>
   </category>`;
