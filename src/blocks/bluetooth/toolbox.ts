import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { virtualCircuitComment } from "../comment-text";

export default `<category name="Bluetooth" colour="${COLOR_THEME.COMPONENTS}">
  <block type="bluetooth_setup">
      <comment pinned="false" h="150" w="460">Бұл блок (Bluetooth орнату блогы) Arduino-Ға Bluetooth құрылғыларын пайдаланып жатқанымызды айтады.${virtualCircuitComment}</comment>

    <field name="PIN_RX">11</field>
    <field name="PIN_TX">10</field>
  </block>
  <block type="bluetooth_send_message">
  <comment pinned="false" h="60" w="460">Бұл блок Bluetooth арқылы хабарлама жібереді.</comment>
    <value name="MESSAGE">
      <block type="text">
        <field name="TEXT">Сәлем</field>
      </block>
    </value>
  </block>

  <block type="bluetooth_has_message">
    <comment pinned="false" h="60" w="460">Егер Bluetooth хабарлама алған болса, true мәнін қайтарады.</comment>

  </block>
  <block type="bluetooth_get_message">
      <comment pinned="false" h="60" w="460">Bluetooth алған хабарды алыңыз.</comment>
  </block>
  </category>`;
