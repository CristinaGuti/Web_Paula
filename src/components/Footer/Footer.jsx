import styled from 'styled-components'
import { H2 } from '../Text/Text'


const Footer = () => {

    const Footer = styled.div`
    height: 200px;
    background-color: var(--color-black);
    color: var(--color-white);
    `

    return (
        <Footer id='contact'>
            <H2>Footer</H2>
        </Footer>
    )
}


export default Footer