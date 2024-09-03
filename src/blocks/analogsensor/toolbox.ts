import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { virtualCircuitComment, whatIsAPin } from "../comment-text";

export default `
<category name="Аналогты" colour="${COLOR_THEME.SENSOR}" >
       <block type="analog_read_setup">
            <comment pinned="false" h="200" w="501">Бұл блок (analogread setup) Arduino-ға қай пиннің электр сезімтал екенін айтады.${whatIsAPin}${virtualCircuitComment}</comment>
        </block>
       <block type="analog_read">
            <comment pinned="false" h="140" w="460">Бұл блок (аналогтық оқу) түйреуіш арқылы өтетін электр энергиясының мөлшерін сезеді.${whatIsAPin}</comment>
       </block>
   </category>
`;
