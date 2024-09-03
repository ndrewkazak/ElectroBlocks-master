import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { virtualCircuitComment } from "../comment-text";

export default `
<category name="Ултрадыбыстық сенсор" colour="${COLOR_THEME.SENSOR}" >
       <block type="ultra_sonic_sensor_setup">
       <comment pinned="false" h="180" w="460">Бұл блок қашықтықты өлшейтін Ультрадыбыстық сенсорды орнатады. Ол үшін ультрадыбыстық дыбыс толқындарын пайдаланады.${virtualCircuitComment}</comment>
         <field name="PIN_TRIG">11</field>
         <field name="PIN_ECHO">10</field>
       </block>
       <block type="ultra_sonic_sensor_motion">
        <comment pinned="false" h="60" w="460">Сенсор сезінген сантиметр санын қайтарады.</comment>
       </block>
       </category>
`;
