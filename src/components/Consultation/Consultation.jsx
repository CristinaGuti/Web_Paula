import styled from 'styled-components'
import video from '../../assets/video-consultation.mp4'
import IconDiv from '../IconDiv/IconDiv'
import { H2, Paragraph } from '../Text/Text'
import { Container } from '../ComponentStyles/ComponentStyles'


const Column = styled.div`
display: flex;
flex-direction: column;
width: 40%;
padding: 20px
`

const VideoColumn = styled.div`
display: flex;
flex-direction: column;
width: 40%;
justify-content: center;
align-items: center;
`

const IconColum = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const Video = styled.video`
width: 50%;
height: auto;
`

const Section = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`


const Consultation = () => {


    return (

        <Container id='consultation'>

            <H2>Consulta</H2>
            <Section>
                <Column>
                    <Paragraph>Consulta de sexología a tu medida. <br /> Especializada en diversidad y con perspectiva de género.</Paragraph>

                    <IconColum >
                        <IconDiv title={'Videoconsulta'} image={'icon-laptop-blue'} imageRed={'icon-laptop-red'} />
                        <IconDiv title={'Bono 4 sesiones'} image={'icon-bag-blue'} imageRed={'icon-bag-red'} />
                    </IconColum>
                </Column>

                <VideoColumn>
                    <Video src={video} controls></Video>
                </VideoColumn>

            </Section>

        </Container>

    )
}


export default Consultation