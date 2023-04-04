import styled from 'styled-components'
import { H2 } from '../Text/Text'


const Container = styled.div`
height: 200px;
background-color: var(--color-black);
color: var(--color-white);
`


const Footer = () => {


    return (
        <Container id='contact'>
            <H2>Footer</H2>
        </Container>
    )
}


export default Footer