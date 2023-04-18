import Button from '../Button/Button'
import { ContainerColor, Section } from '../ComponentStyles/ComponentStyles'
import { H2, H4, Paragraph } from '../Text/Text'


const Courses = () => {


    return (
        <ContainerColor id='courses'>
            <H2>Formación para empresas</H2>

            <Section>

                <Paragraph>Imparto cursos desde 2018 a empresas y particulares así como charlas de educación sexual y prevención del abuso en centros escolares e instituciones.</Paragraph>

                <Paragraph>Actualmente en línea: </Paragraph>
                <H4>Igualdad en el entorno laboral</H4>

                <Paragraph> Curso dirigido a empleados para que sus empresas cumplan con el objetivo de formación dentro de los planes de igualdad, creando un ambiente de trabajo inclusivo y respetuoso con su personal.
                    Son 6 horas, que se pueden completar en el plazo de un mes, completamente online y disponible en un click.</Paragraph>

                <Button link='https://classroom.google.com/c/NjIwOTY5MzAwMDRa?cjc=zbcpgcl' text='muestra tema 3' />

                <Button link='https://app.acuityscheduling.com/schedule.php?owner=17667345&appointmentType=21499789' text='comprar curso' />

            </Section>


        </ContainerColor>
    )
}


export default Courses