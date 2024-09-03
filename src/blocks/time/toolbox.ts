import { COLOR_THEME } from "../../core/blockly/constants/colors";

export const DELAY_COMMENT = `Бұл блок Arduino-ны х секундқа кідіртеді. Кешігу жүріп жатқанда ештеңе сезілмейді.`;

export default `<category colour="${COLOR_THEME.ARDUINO}" name="Таймер">
   <block type="time_setup">
   <comment pinned="false" h="80" w="460">Бұл блок бір цикл үшін виртуалды тізбекте қанша уақыт өтетінін орнатады.</comment>
   </block>
   <block type="delay_block">
      <comment pinned="false" h="90" w="460">
      ${DELAY_COMMENT}</comment>

   <value name="DELAY">

       <block type="math_number">
           <field name="NUM">0.2</field>
       </block>
   </value>
   </block>
   <block type="time_seconds">
      <comment pinned="false" h="80" w="460">Arduino қосылған секундтар санын алады.</comment>

   </block>

   </category>`;
