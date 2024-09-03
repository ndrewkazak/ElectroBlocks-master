import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { whatIsAPin } from "../comment-text";

export default `
<category name="Пинмен жұмыс" colour="${COLOR_THEME.COMPONENTS}">
   <block type="digital_write">
    <comment pinned="false" h="130" w="460">Бұл блок (сандық жазу) түйреуішті қосады және өшіреді.${whatIsAPin}</comment>
   </block>
   <block type="analog_write">
    <comment pinned="false" h="200" w="400" >Бұл блок (аналогтық жазу) 0-ден 255-ке дейінгі санды түйреуішке жібереді.
255 түйреуіштер толығымен қосулы, ал 0 түйреуіш өшірулі дегенді білдіреді.${whatIsAPin}</comment>
       <value name="WRITE_VALUE">
                   <block type="math_number">
                       <field name="NUM">150</field>
                   </block>
        </value>
    </block>
</category>
`;
