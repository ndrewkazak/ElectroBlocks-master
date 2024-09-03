import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { virtualCircuitComment } from "../comment-text";

export default `<category name="IR қашықтан басқару" colour="${COLOR_THEME.SENSOR}" >
<block type="ir_remote_setup">
       <comment pinned="false" h="200" w="460">Бұл блок ir қашықтан басқару сенсорын орнатады.${virtualCircuitComment}</comment>
</block>
<block type="ir_remote_has_code_receive">
       <comment pinned="false" h="60" w="460">Егер ir сенсоры хабарлама алған болса, true мәнін қайтарады.</comment>
</block>
<block type="ir_remote_get_code">
       <comment pinned="false" h="60" w="460">Ir қашықтан басқару пульті алған хабарды алыңыз.</comment>
</block>
</category>`;
