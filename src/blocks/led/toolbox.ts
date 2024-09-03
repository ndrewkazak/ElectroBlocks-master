import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { whatIsAPin } from "../comment-text";

export const LED_COMMENT = `Ашылмалы терезедегі түйреуішке бекітілген жарық диодты қосыңыз немесе өшіріңіз.${whatIsAPin}`;

export default `<category name="Жарықдиод" colour="${COLOR_THEME.COMPONENTS}">
   <block type="led">
    <comment pinned="false" h="145" w="460" >${LED_COMMENT}</comment>
   </block>

   <block type="led_fade">
    <comment pinned="false" h="175" w="460" >Бұл блок жарықдиодқа жалғанған түйреуішке электр тогының мөлшерін реттейді. Ол жарықдиодты шамға жай өшу және қосылу әсерін береді.${whatIsAPin}</comment>
   <value name="FADE">
                   <block type="math_number">
                       <field name="NUM">125</field>
                   </block>
               </value>
   </block>
</category>`;
