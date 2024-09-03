import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { virtualCircuitComment } from "../comment-text";

export default `
<category name="Температура сенсоры" colour="${COLOR_THEME.SENSOR}"  >
         <block type="temp_setup">
         <comment pinned="false" h="160" w="460">Бұл сенсор температура мен ылғалдылықты Цельсий бойынша оқиды. Сенсор түрін көрсетуді ұмытпаңыз.${virtualCircuitComment}</comment>
         </block>
         <block type="temp_get_temp">
          <comment pinned="false" h="60" w="460">Температураны Цельсий бойынша қайтарады.</comment>
         </block>
         <block type="temp_get_humidity">
            <comment pinned="false" h="60" w="460">Ылғалдылық пайызын қайтарады.</comment>
         </block>
       </category>
`;
