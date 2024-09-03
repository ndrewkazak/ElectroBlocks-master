import { COLOR_THEME } from "../../core/blockly/constants/colors";

export default `<category name="NeoPixels" colour="${COLOR_THEME.COMPONENTS}">
       <block type="neo_pixel_setup">
              <comment pinned="false" h="110" w="460">Бұл блок Arduino-ға деректерді неопиксельдерге жіберу үшін қандай аналогтық түйреуішті пайдалану керектігін айтады. Аналогтық түйреуіштер әдетте A1, A2, A2 және т.б.</comment>

             <field name="PIN">A0</field>
       </block>
       <block type="neo_pixel_set_color">
              <comment pinned="false" h="80" w="460">Бұл блок сіздің неопиксельді жарық жолағындағы бір жарықдиодтың түсін орнатады. Бұл блок бірінші неопиксель ретінде 1 пайдаланады.</comment>

         <value name="POSITION">
           <block type="math_number">
             <field name="NUM">1</field>
           </block>
         </value>
         <value name="COLOR">
           <block type="color_picker_custom"> </block>
         </value>
       </block>
   </category>`;
