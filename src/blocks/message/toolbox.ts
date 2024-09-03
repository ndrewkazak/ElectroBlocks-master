import { COLOR_THEME } from "../../core/blockly/constants/colors";

export default `
<category name="Хабарламалар" colour="${COLOR_THEME.ARDUINO}">
   <block type="message_setup">
    <comment pinned="false" h="100" w="460">Бұл блок Компьютер хабарларын жіберу Үшін Arduino және Arduino-дан хабарламалар жіберуге мүмкіндік береді.</comment>

   </block>
   <block type="arduino_send_message">
       <comment pinned="false" h="80" w="460">Бұл блок Arduino-дан компьютерге хабарлама жібереді.</comment>

        <value name="MESSAGE">
            <block type="text">
                <field name="TEXT">Сәлем!</field>
            </block>
        </value>
   </block>
   <block type="arduino_get_message">
    <comment pinned="false" h="80" w="460">Arduino компьютерден алған хабарламаны қайтарады.</comment>
   </block>
   <block type="arduino_receive_message">
       <comment pinned="false" h="80" w="460">Егер Arduino хабарлама алса, true мәнін қайтарады.</comment>

   </block>
   </category>
`;
