import styled from 'styled-components'
import { H1 } from '../Text/Text'


const Container = styled.div`
height: 500px;
padding-top: 100px;
background-color: var(--color-blue);
`

const Link = styled.a`
text-decoration: none;
  background-color: var(--color-red);
border-radius: 5px;
color: black;
padding: 15px 35px;
&:hover,
&:focus {
background-color: var(--color-podcast-light);
}
`


const Hero = () => {


    return (
        <Container>
            <H1>Tu consulta de sexología online</H1>

            <Link href='https://app.acuityscheduling.com/schedule.php?owner=17667345' target="_blank">RESERVA CITA</Link>

        </Container>
    )
}

export default Hero