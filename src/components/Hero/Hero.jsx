import styled from 'styled-components'
import { H1 } from '../Text/Text'
import Button from '../Button/Button'


const Container = styled.div`
height: 500px;
padding-top: 100px;

background-image: url('../../assets/image-paula.jpg');
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
