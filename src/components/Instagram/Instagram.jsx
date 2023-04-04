import styled from 'styled-components'
import { H2 } from '../Text/Text'
import { Container } from '../ComponentStyles/ComponentStyles'


const InstagramWidget = styled.iframe`
width: 100%;
border: 0;
overflow: hidden;
`


const Instagram = () => {


    return (
        <Container id='networks' >
            <H2>Instagram</H2>
            < script src="https://cdn.lightwidget.com/widgets/lightwidget.js" ></script >

            <InstagramWidget
                src="//lightwidget.com/widgets/80993f385be250dcbdf32b1db9dc0fc7.html"
                title="instagram"
                className='lightwidget-widget'
                height="600"
            ></InstagramWidget>
        </Container>
    )
}


export default Instagram