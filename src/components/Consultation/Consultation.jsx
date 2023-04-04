import styled from 'styled-components'
import video from '../../assets/video-consultation.mp4'
import IconDiv from '../IconDiv/IconDiv'
import { H2 } from '../Text/Text'


const Container = styled.div`
height: 500px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const Column = styled.div`
display: flex;
flex-direction: column;
width: 40%;
`

const Section = styled.div`
height: 500px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const Video = styled.video`
height: 400px;
margin: 30px
`


const Consultation = () => {


    return (

        <Container id='consultation'>

            <Column>
                <H2>Consulta</H2>
                <p>Consulta de sexología a tu medida, especializada en diversidad y con perspectiva de género.</p>
                <Section >
                    <IconDiv title={'VIDEOCONSULTA'} image={'icon-laptop-blue'} imageRed={'icon-laptop-red'} />
                    <IconDiv title={'BONO 4 SESIONES'} image={'icon-bag-blue'} imageRed={'icon-bag-red'} />

                </Section>
            </Column>
            <Column>
                <Video src={video} controls></Video>
            </Column>


        </Container>

    )
}


export default Consultation