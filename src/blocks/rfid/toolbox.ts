import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { virtualCircuitComment } from "../comment-text";

export default `
<category name="RFID" colour="${COLOR_THEME.SENSOR}" >
           <block type="rfid_setup">
            <comment pinned="false" h="150" w="460">Бұл блок RFID сенсорын орнатады және Arduino-ға RFID деректерін жіберу үшін қай түйреуішті пайдалану керектігін айтады..${virtualCircuitComment}</comment>
               <field name="PIN_TX">6</field>
           </block>
           <block type="rfid_card">
           <comment pinned="false" h="60" w="460">RFID чипінің карта нөмірін (мәтіндік деректер) қайтарады.</comment>
           </block>
           <block type="rfid_tag">
                <comment pinned="false" h="60" w="460">RFID чипінің тегін қайтарады.</comment>
           </block>
           <block type="rfid_scan">
                <comment pinned="false" h="80" w="460">Жаңа RFID картасын іздейді. Жаңа RFID чипі табылса, шын мәнін қайтарады.</comment>
           </block>
       </category>
`;
