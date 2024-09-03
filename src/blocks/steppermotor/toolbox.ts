import { COLOR_THEME } from "../../core/blockly/constants/colors";

export default `
<category name="Қадамдық қозғалтқыш" colour="${COLOR_THEME.COMPONENTS}" >
       
       <block type="stepper_motor_setup">
             <field name="PIN_1">11</field>
             <field name="PIN_2">10</field>
             <field name="PIN_3">9</field>
             <field name="PIN_4">8</field>
             <field name="SPEED">10</field>
             <field name="TOTAL_STEPS">200</field>

        <comment pinned="false" h="140" w="460">Бұл блок қадамдық қозғалтқышты орнатады. Қадамдық қозғалтқыш оның айналу күйін басқаруға мүмкіндік береді.

Әрбір қадамның қаншалықты үлкен болатынын бақылау үшін қадамдар санын пайдаланыңыз. Сан неғұрлым аз болса, қадам соғұрлым үлкен болады.   </comment>
       </block>

       <block type="stepper_motor_move">
       <value name="STEPS">
                   <block type="math_number">
                       <field name="NUM">3</field>
                   </block>
               </value>
        <comment pinned="false" h="80" w="460">Бұл блоктар қадамдық қозғалтқыш қозғалатын көптеген қадамдарды басқарады</comment>
       </block>
       </category>

`;
