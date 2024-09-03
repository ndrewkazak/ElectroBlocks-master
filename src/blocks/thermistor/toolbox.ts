import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { virtualCircuitComment } from "../comment-text";

export default `
<category name="Термистор" colour="${COLOR_THEME.SENSOR}" >
       <block type="thermistor_setup">
            <comment pinned="false" h="180" w="460">Бұл блок температураны өлшеу үшін қолданылатын термисторды орнатады.${virtualCircuitComment}</comment>
            <field name="PIN">A0</field>

       </block>

       <block type="thermistor_read">
        <comment pinned="false" h="60" w="460">Температураны Цельсий бойынша қайтарыңыз.</comment>
       </block>
       </category>
`;
