import { COLOR_THEME } from "../../core/blockly/constants/colors";

export default `
<category name="Қозғалтқыш" colour="${COLOR_THEME.COMPONENTS}">
   <block type="move_motor">
    <comment pinned="false" h="220" w="460">Мотор нөмірі мотор қалқанында. Жылдамдық қозғалтқыш арқылы қанша электр тоғы өтетінін анықтайды. Қозғалтқышыңыздың қаншалықты үлкен екеніне байланысты нақты жылдамдықты шешеді.

Дәл қазір мотор қозғалысы тек Adafruit мотор қалқанының 1 нұсқасымен жұмыс істейді. Жақында біз 2-нұсқасын және басқа мотор қалқанының кітапханаларын қосатын боламыз.</comment>

   <value name="SPEED">
                   <block type="math_number">
                       <field name="NUM">50</field>
                   </block>
               </value>
               <value name="MOTOR">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
   </block>
   </category>
`;
