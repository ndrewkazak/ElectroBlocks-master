import { COLOR_THEME } from "../../core/blockly/constants/colors";

export default `<category colour="${COLOR_THEME.COMPONENTS}" name="СКД экраны">
   <block type="lcd_setup">
    <comment pinned="false" h="240" w="460">Бұл блок СКД экранын орнатады.

Чип жад түрін анықтайды. Чипті қай жерден сатып алғаныңызды тексеріңіз; егер сіз білмесеңіз, екеуін де қолданып көріңіз және оны көру оңай болады.

Өлшем үшін біз бірінші сан - ені, ал екінші сан - биіктік. 16 x 2, 16 солдан оңға қарай бос орындар, ал 2 жоғары және төмен 2 бос орын болады.</comment>
   </block>
   <block type="lcd_screen_simple_print">
    <comment pinned="false" h="120" w="460">СКД экрандарында бірдеңені басып шығарады, содан кейін оны өшіреді. "Көрсетілетін секундтар" блогы СКД экраны хабарламаны қанша секунд көрсететінін көрсетеді.</comment>
   <value name="ROW_1">
                   <block type="text">
                       <field name="TEXT"></field>
                   </block>
               </value>
               <value name="ROW_2">
                   <block type="text">
                       <field name="TEXT"></field>
                   </block>
               </value>
               <value name="ROW_3">
                   <block type="text">
                       <field name="TEXT"></field>
                   </block>
               </value>
               <value name="ROW_4">
                   <block type="text">
                       <field name="TEXT"></field>
                   </block>
               </value>
               <value name="DELAY">
                   <block type="math_number">
                       <field name="NUM">3</field>
                   </block>
               </value>
   </block>
   <block type="lcd_screen_print">
   <comment pinned="false" h="190" w="460">Бұл блок СКД экранында бірдеңені басып шығарады. Баған нөмірі x орнын басқарады, ал жол нөмірі y орнын басқарады. X солдан оңға қарай, ал Y жоғары және төмен дегенді білдіреді.

Y үшін төмендеген сайын сандар жоғарылайды. Сонымен, бірінші баған 1, ал келесі төмен баған 2.</comment>
   <value name="ROW">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
               <value name="COLUMN">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
               <value name="PRINT">
                   <block type="text">
                       <field name="TEXT">Hi</field>
                   </block>
               </value>
   </block>
   <block type="lcd_screen_clear">
        <comment pinned="false" h="60" w="460">Бұл блок СКД экранындағы барлық мәтінді өшіреді.</comment>
   </block>
   <block type="lcd_scroll">
    <comment pinned="false" h="70" w="460">Бұл блок барлық мәтінді солға немесе оңға жылжытады.</comment>
   </block>
   <block type="lcd_blink">
        <comment pinned="false" h="80" w="460">Бұл блок СКД экранындағы жыпылықтайтын орынды қосады немесе өшіреді.</comment>
   <value name="ROW">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
               <value name="COLUMN">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
   </block>
   <block type="lcd_backlight">
    <comment pinned="false" h="80" w="460">Бұл блок СКД экранындағы артқы жарықты қосады және өшіреді.</comment>
   </block>
   </category>
   `;
