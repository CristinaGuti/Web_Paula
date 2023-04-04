import styled from 'styled-components'
import video from '../../assets/video-consultation.mp4'
import IconDiv from '../IconDiv/IconDiv'
import { H2 } from '../Text/Text'
import { Container } from '../ComponentStyles/ComponentStyles'


const Column = styled.div`
display: flex;
flex-direction: column;
width: 40%;
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
width: 225px;
height: 400px;
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

            <Section>
                <Column>
                    <H2>Consulta</H2>
                    <p>Consulta de sexología a tu medida.</p>
                    <p>Especializada en diversidad y con perspectiva de género.</p>

                    <IconColum >
                        <IconDiv title={'VIDEOCONSULTA'} image={'icon-laptop-blue'} imageRed={'icon-laptop-red'} />
                        <IconDiv title={'BONO 4 SESIONES'} image={'icon-bag-blue'} imageRed={'icon-bag-red'} />
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