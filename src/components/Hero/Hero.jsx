import styled from 'styled-components'
import { H1, HeroParagraph } from '../Text/Text'
import Button from '../Button/Button'
import Paula from '../../assets/image-paula.jpg'


const Container = styled.div`
height: 600px;
padding-top: 100px;
background-image: url(${Paula});
background-attachment: fixed;
background-size: cover;
background-position: center;
`


const Hero = () => {


    return (
        <Container>
            <HeroParagraph>¡Hola! Me llamo Paula Álvarez y me apasiona el mundo de la sexología y la educación.
                He fundado mi propia consulta en la que ofrezco asesoramiento y disfruto de la
                divulgación sobre educación sexual y feminismo en el podcast "Nos tienen contentas"
                junto a mi compañera Rocío Romero.
            </HeroParagraph>

            <H1>Tu consulta de sexología online</H1>

            <Button link='https://app.acuityscheduling.com/schedule.php?owner=17667345' text='Reserva cita' />

        </Container>
    )
}

export default Hero
