import { COLOR_THEME } from "../../core/blockly/constants/colors";

export default `<category name="RGB Жарықдиод" colour="${COLOR_THEME.COMPONENTS}">
   
   <block type="rgb_led_setup">
    <comment pinned="false" h="100" w="460">Бұл блок Arduino-ға әр түс үшін қай түйреуішті пайдалану керектігін айтады. RGB қызыл, жасыл және көк дегенді білдіреді. Түстерді біріктіру арқылы сіз басқа түстерді жасай аласыз.</comment>

                           <field name="PIN_RED">11</field>
                         <field name="PIN_GREEN">10</field>
                         <field name="PIN_BLUE">9</field>
 </block>

   <block type="set_color_led">
      <comment pinned="false" h="130" w="460">Бұл блок RGB светодиодының түсін орнатады. RGB қызыл, жасыл және көк дегенді білдіреді. Пайдаланушы түсін пайдалану үшін деректер->түс астындағы құралдар тақтасына өтіп, ең үлкен блокты таңдаңыз. Содан кейін әртүрлі түстерді көру үшін Google RGB түс таңдау құралын пайдаланыңыз.</comment>

   <value name="COLOUR">

                   <block type="color_picker_custom">
                   </block>
   </value>
   </block>
   </category>`;
