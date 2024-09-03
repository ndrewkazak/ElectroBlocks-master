import { COLOR_THEME } from "../../core/blockly/constants/colors";

export default `
<category name="Мәтін" colour="${COLOR_THEME.VALUES}">
   <block type="text"></block>
   <block type="text_join">
      <comment pinned="false" h="60" w="460">Бірнеше мәтін блоктарын бір мәтін блогына айналдырады.</comment>
   </block>
   <block type="text_length">
   <comment pinned="false" h="80" w="460">Мәтін блогының ішіндегі әріптер санын алады.  Мысалы, "робот" сақтайтын мәтіндік блок 5 қайтарады.</comment>
     <value name="VALUE">
       <block type="text">
         <field name="TEXT">abc</field>
       </block>
     </value>
   </block>
   <block type="parse_string_block">
   <comment pinned="false" h="220" w="460">Бұл блок мәтіндік блокты бөлімдерге бөліп, сол бөлімдердің бірін қайтарады.  Ол мәтіндік блокты бөлгіш таңба бойынша бөледі.  

Сізде "12-0-40" сақтайтын мәтіндік блок бар делік, ал сіздің бөлетін таңбаңыз "-".  Егер сіз позицияға 1 қойсаңыз, ол 12-ні қайтарады.  Егер сіз 40 алғыңыз келсе, онда сіз позицияға 2-ден өтесіз.</comment>

     <value name="VALUE">
       <block type="text">
         <field name="TEXT">blue,red,green</field>
       </block>
     </value>
     <value name="POSITION">
       <block type="math_number">
         <field name="NUM">1</field>
       </block>
     </value>
   </block>

   <block type="number_to_string">
   <comment pinned="false" h="190" w="460">Бұл блок санды мәтіндік блокқа айналдырады.  Дәлдік санның қанша ондық бөлшегі мәтінге айналатынын басқарады.    
   
Айталық, сізде 5.23234 бар, ал дәлдік үшін 2-ні көрсетесіз.  Бұл блок "5.23"қайтаратын мәтіндік блок.</comment>
     <value name="NUMBER">
       <block type="math_number">
         <field name="NUM">5.23234</field>
       </block>
     </value>
   </block>
   <block type="text_isEmpty">
   <comment pinned="false" h="60" w="460">Мәтін блогының ішінде ештеңе болмаса, true мәнін қайтарады.</comment>
     <value name="VALUE">
       <block type="text">
         <field name="TEXT"></field>
       </block>
     </value>
   </block>
   <block type="text_changeCase">
     <value name="TEXT">
       <block type="text">
         <field name="TEXT">abc</field>
       </block>
     </value>
   </block>
   </category>
`;
