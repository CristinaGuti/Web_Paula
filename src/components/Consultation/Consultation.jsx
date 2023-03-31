import styled from 'styled-components'
import videocall from '../../assets/icons/icon-laptop-blue.png'
import videocallRed from '../../assets/icons/icon-laptop-red.png'
import chat from '../../assets/icons/icon-chat-blue.png'
import bonus from '../../assets/icons/icon-bag-blue.png'
import { useState } from 'react'
import video from '../../assets/video-consultation.mp4'

const Consultation = () => {

    const [activeIcon, setactiveIcon] = useState(false)

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

    const H2 = styled.h2`
    font-family: "Gobold-Regular";
    margin: 20px;
    font-size: 3rem;
    text-align: center;
    `

    const Icon = styled.img`
    width: auto;
    height: 100px;
    margin: 30px;
    `

    const Video = styled.video`
    height: 400px;
    margin: 30px
    `

    const redIcon = () => {
        setactiveIcon(true)
    }

    return (

        <Container id='consultation'>

            <Column>
                <H2>Consulta</H2>
                <p>Consulta de sexología a tu medida, especializada en diversidad y con perspectiva de género.</p>
                <Section >
                    <div>
                        <Icon onMouseMove={redIcon} src={!activeIcon ? videocall : videocallRed} alt="videocall icon" />
                        <h4>VIDEOCONSULTA</h4>
                    </div>
                    <div>
                        <Icon src={bonus} alt="full bag icon" />
                        <h4>BONO 4 SESIONES</h4>
                    </div>
                </Section>
            </Column>
            <Column>
                <Video src={video} controls></Video>
            </Column>


        </Container>

    )
}


export default Consultation