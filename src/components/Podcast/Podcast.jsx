import { H2 } from '../Text/Text'
import { Container, PodcastContainer, PodcastWidget } from '../ComponentStyles/ComponentStyles'


const Podcast = () => {


    return (
        <Container id='podcast'>
            <H2>Podcast</H2>

            <PodcastContainer>
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
            </PodcastContainer>

        </Container>
    )
}

export default Podcast