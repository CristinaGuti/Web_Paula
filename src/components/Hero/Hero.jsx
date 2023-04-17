import styled from 'styled-components'
import { H1 } from '../Text/Text'
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
            <H1>Tu consulta de sexología online</H1>

            <Button link='https://app.acuityscheduling.com/schedule.php?owner=17667345' text='Reserva cita' />

        </Container>
    )
}

export default Hero
