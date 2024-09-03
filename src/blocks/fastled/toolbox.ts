import { COLOR_THEME } from "../../core/blockly/constants/colors";

export default `<category name="FastLED" colour="${COLOR_THEME.COMPONENTS}">
       <block type="fastled_setup">
              <comment pinned="false" h="110" w="460">Бұл блок Arduino-ға деректерді пикселдерге жіберу үшін қандай аналогтық түйреуішті пайдалану керектігін айтады.  Аналогтық түйреуіштер әдетте A1, A2, A2 және т.б.</comment>

             <field name="PIN">A0</field>
       </block>
       <block type="fastled_set_all_colors">
                     <comment pinned="false" h="80" w="460">Бұл блок неопиксельдердегі барлық түстерді орнатады.</comment>
       </block>
       <block type="fastled_show_all_colors">
          <comment pinned="false" h="80" w="460">Барлық RGB LED жолақтарын көрсету үшін блокты пайдаланыңыз</comment>
       </block>
       <block type="fastled_set_color">
              <comment pinned="false" h="80" w="460">Бұл блок сіздің жарық жолағындағы бір жарықдиодтың түсін орнатады. Бұл блок бірінші пиксел ретінде 1 пайдаланады.</comment>

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
