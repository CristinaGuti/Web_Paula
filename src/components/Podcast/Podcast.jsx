import styled from 'styled-components'
import { H2 } from '../Text/Text'
import { Container } from '../ComponentStyles/ComponentStyles'


const SpotifyWidget = styled.iframe`
width: 1000px;
height: 279px;
border-radius: 12px;
`


const Podcast = () => {


    return (
        <Container id='podcast'>
            <H2>Podcast</H2>

            < SpotifyWidget
                src="https://open.spotify.com/embed/show/02O5h9s0pdZ1z7ZM9R9zEz?theme=0"
                title="podcast"
                allowfullscreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></SpotifyWidget>
        </Container>
    )
}

export default Podcast