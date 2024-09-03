import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { virtualCircuitComment, whatIsAPin } from "../comment-text";

export default `<category name="Button" colour="${COLOR_THEME.SENSOR}">       
<block type="button_setup">
      <comment pinned="false" h="200" w="460">Бұл блок (Bluetooth орнату блогы) Arduino-Ға Bluetooth құрылғыларын пайдаланып жатқанымызды айтады.${whatIsAPin}${virtualCircuitComment}</comment>
</block>
<block type="is_button_pressed">
  <comment pinned="false" h="60" w="460">Егер батырма басылса, true мәнін қайтарады.</comment>
</block>
</category>`;
