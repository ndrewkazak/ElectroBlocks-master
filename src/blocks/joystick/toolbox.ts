import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { virtualCircuitComment, whatIsAPin } from "../comment-text";

export default `<category name="Джойстик" colour="${COLOR_THEME.SENSOR}">
   <block type="joystick_setup">
    <field name="PIN_X">A1</field>
    <field name="PIN_Y">A3</field>
    <field name="PIN_BUTTON">9</field>

    <comment pinned="false" h="400" w="460" >X және Y түйреуіштері қуаныш таяқшасының қай жерде орналасқанын анықтау үшін пайдаланылады. Түймешік түйреуіш джойстик басылып жатқанын анықтау үшін қолданылады.
    ${whatIsAPin}${virtualCircuitComment}
    </comment>
   </block>

    <block type="joystick_angle">
            <comment pinned="false" h="70" w="460" >Джойстик орналасқан бұрышты қайтарыңыз.
        </comment>
    </block>

    <block type="joystick_engaged">
            <comment pinned="false" h="80" w="460" >Біреу джойстикті бір орынға жылжытып жатқанда, шын екенін қайтарады.
        </comment>
    </block>
   <block type="joystick_button">
            <comment pinned="false" h="80" w="460" >Егер біреу джойстикті басып тұрса, шын екенін қайтарады.
        </comment>
    </block>
</category>`;
