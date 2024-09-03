import { COLOR_THEME } from "../../core/blockly/constants/colors";

export default `<category name="Digit Display" colour="${COLOR_THEME.COMPONENTS}">
       <block type="digital_display_setup">
            <comment pinned="false" h="150" w="460">Сандық дисплейде сандар мен әріптер көрсетіледі.  Тек 7 жарықдиодты сызық болғандықтан, кейбір таңбалар шектеулі болуы мүмкін</comment>
           <field name="CLK_PIN">10</field>
    <field name="DIO_PIN">11</field>

       </block>
       <block type="digital_display_set">
            <comment pinned="false" h="70" w="460">Мәтінді орнатады және түстерді қосады және өшіреді.</comment>
            <value name="TEXT">
                <block type="text">
                    <field name="TEXT">Робот</field>
                </block>
            </value>
       </block>
   </category>`;
