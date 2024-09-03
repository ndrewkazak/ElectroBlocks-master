import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { virtualCircuitComment, whatIsAPin } from "../comment-text";

export default `<category name="Цифрлық/Сандық" colour="${COLOR_THEME.SENSOR}">
       <block type="digital_read_setup">
            <comment pinned="false" h="150" w="460">Бұл блок (сандық оқуды орнату) Arduino-ға қай пиннің сезімтал екенін айтады.${whatIsAPin}${virtualCircuitComment}</comment>
       </block>
       <block type="digital_read">
            <comment pinned="false" h="70" w="460">Егер сенсор бірдеңені сезсе, true мәнін қайтарады.</comment>
       </block>
   </category>`;
