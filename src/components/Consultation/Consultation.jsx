import video from '../../assets/video-consultation.mp4'
import IconDiv from '../IconDiv/IconDiv'
import { H2, Paragraph } from '../Text/Text'
import { ContainerColor, ConsultContainer, ConsultColumn, IconColum, VideoColumn, Video } from '../ComponentStyles/ComponentStyles'


const Consultation = () => {


    return (

        <ContainerColor id='consultation'>

            <H2>Consulta</H2>

            <ConsultContainer>
                <ConsultColumn>
                    <Paragraph>Consulta de sexología a tu medida. <br /> Especializada en diversidad y con perspectiva de género.</Paragraph>

                    <IconColum >
                        <IconDiv title={'Videoconsulta'} image={'icon-laptop-blue'} imageRed={'icon-laptop-red'} />
                        <IconDiv title={'Sesión de pareja'} image={'icon-chat-blue'} imageRed={'icon-chat-red'} />
                    </IconColum>
                </ConsultColumn>

                <VideoColumn>
                    <Video src={video} controls></Video>
                </VideoColumn>

            </ConsultContainer>

        </ContainerColor>

    )
}


export default Consultation