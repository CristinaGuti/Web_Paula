import { H2, Paragraph } from '../Text/Text'
import LogoLink from '../LogoLink/LogoLink'
import { ContainerColor, WorkLinkContainer, Section } from '../ComponentStyles/ComponentStyles'


const DataStudies = () => {


    return (
        <ContainerColor id='dataStudies'>

            <H2>Mis estudios como analista de datos</H2>

            <Section>
                <Paragraph>Además, tras completar el bootcamp de Ironhack, he decidido explorar mi otra pasión:
                    el análisis de datos. Actualmente me dedico al análisis y visualización de datos
                    utilizando herramientas como Python, SQL, Tableau y Power BI. Me encanta explorar la
                    información y descubrir patrones y tendencias que puedan ayudar a las empresas y
                    organizaciones a tomar decisiones más informadas y estratégicas.
                </Paragraph>

                <Paragraph>Estoy siempre en busca de nuevos retos y en constante aprendizaje. Si necesitas ayuda
                    en el análisis de datos, no dudes en contactarme. ¡Estoy aquí para ayudarte!
                </Paragraph>

            </Section>

            <WorkLinkContainer>
                <LogoLink link='https://www.linkedin.com/in/paula-%C3%A1lvarez-s%C3%A1nchez-de-amoraga-dataanalist/'
                    srcImg='logo-linkedin.png' altImg='linkedin' />

                <LogoLink link='https://github.com/paulaalvarezsa'
                    srcImg='logo-github.png' altImg='github' />
            </WorkLinkContainer>

        </ContainerColor>
    )
}


export default DataStudies