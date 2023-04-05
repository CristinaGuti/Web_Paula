import styled from 'styled-components'
import { H2 } from '../Text/Text'
import { Container } from '../ComponentStyles/ComponentStyles'
import LogoLink from '../LogoLink/LogoLink'


const Section = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > p {
  margin-top: 2rem;
  }
`

const LinkColumn = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`

const DataStudies = () => {


    return (
        <Container id='dataStudies'>

            <H2>Mis estudios como analista de datos</H2>

            <Section>
                <p>¡Hola! Me llamo Paula Álvarez y me apasiona el mundo de la sexología y la educación.
                    He fundado mi propia consulta en la que ofrezco asesoramiento y disfruto de la
                    divulgación sobre educación sexual y feminismo en el podcast "Nos tienen contentas"
                    junto a mi compañera Rocío Romero.
                </p>

                <p>Además, tras completar el bootcamp de Ironhack, he decidido explorar mi otra pasión:
                    el análisis de datos. Actualmente me dedico al análisis y visualización de datos
                    utilizando herramientas como Python, SQL, Tableau y Power BI. Me encanta explorar la
                    información y descubrir patrones y tendencias que puedan ayudar a las empresas y
                    organizaciones a tomar decisiones más informadas y estratégicas.
                </p>

                <p>Estoy siempre en busca de nuevos retos y en constante aprendizaje. Si necesitas ayuda
                    en el análisis de datos, no dudes en contactarme. ¡Estoy aquí para ayudarte!
                </p>


                <LinkColumn>
                    <LogoLink link='https://www.linkedin.com/in/paula-%C3%A1lvarez-s%C3%A1nchez-de-amoraga-dataanalist/'
                        srcImg='logo-linkedin.png' altImg='linkedin' />

                    <LogoLink link='https://github.com/paulaalvarezsa'
                        srcImg='logo-github.png' altImg='github' />
                </LinkColumn>
            </Section>

        </Container>
    )
}


export default DataStudies