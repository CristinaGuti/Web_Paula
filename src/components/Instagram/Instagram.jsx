import styled from 'styled-components'
import { H2 } from '../Text/Text'
import { Container } from '../ComponentStyles/ComponentStyles'


const InstagramWidget = styled.iframe`
width: 70%;
height: 1200px;
border:0;
overflow:hidden;
`


const Instagram = () => {

    return (
        <Container id='networks' >
            <H2>Instagram</H2>
            < script src="https://cdn.lightwidget.com/widgets/lightwidget.js" ></script >

            <InstagramWidget
                src="//lightwidget.com/widgets/078d0f49d6375305a79f3e002d9e9d66.html"
                title="instagram"
                allowtransparency="true"
                className='lightwidget-widget'
            ></InstagramWidget>
        </Container>
    )
}


export default Instagram