import styled from 'styled-components'
import { H2 } from '../Text/Text'
import { Container } from '../ComponentStyles/ComponentStyles'


const PodcastWidget = styled.iframe`
width: 624px;
height: 352px;
border-radius: 10px;
border: none;
`

const Section = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`


const Podcast = () => {


    return (
        <Container id='podcast'>
            <H2>Podcast</H2>

            <Section>
                <PodcastWidget
                    src="https://open.spotify.com/embed/show/02O5h9s0pdZ1z7ZM9R9zEz?theme=0"
                    title="podcast"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></PodcastWidget>

                <PodcastWidget
                    src="https://www.youtube.com/embed/videoseries?list=PLpNdHcxIYepHqyVAWtmcILiRjGepxdiKJ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></PodcastWidget>
            </Section>

        </Container>
    )
}

export default Podcast