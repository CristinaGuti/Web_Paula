import styled from 'styled-components'
import { H2 } from '../Text/Text'
import rtve from '../../assets/colaborations/logo-rtve.png'
import pais from '../../assets/colaborations/logo-el-pais.png'
import confidencial from '../../assets/colaborations/logo-el-cofidencial.jpg'
import sputnik from '../../assets/colaborations/logo-sputnik.jpg'
import santamandanga from '../../assets/colaborations/logo-santamandanga-1.png'
import caliope from '../../assets/colaborations/logo-caliope-1.png'
import freeda from '../../assets/colaborations/logo-freeda.webp'
import igualdadgob from '../../assets/colaborations/logo-igualdadgob.png'
import joyclub from '../../assets/colaborations/logo-joyclub.png'
import bloom from '../../assets/colaborations/logo-bloom.jpg'
import eroticfeel from '../../assets/colaborations/logo-eroticfeel.png'
import felgtbi from '../../assets/colaborations/logo-felgtbi.png'


const Colaborations = () => {

    const Container = styled.div`
    padding: 30px;
   `

    const Section = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    `

    return (
        <Container id='colaborations'>

            <H2>Colaboraciones</H2>

            <Section>

                <a href="https://www.instagram.com/reel/CqQaMltIg2C/?igshid=MDJmNzVkMjY%3D">
                    <img src={freeda} alt="freeda" />
                </a>
                <a href="https://www.instagram.com/p/CpiIuarDI16/?igshid=MDJmNzVkMjY%3D">
                    <img src={igualdadgob} alt="ministerio de igualdad" />
                </a>
                <a href="https://www.instagram.com/p/Co49igSsQPp/?igshid=MDJmNzVkMjY=">
                    <img src={joyclub} alt="joy club" />
                </a>
                <a href="https://www.instagram.com/p/CfWFcjNjQ72/?igshid=MDJmNzVkMjY%3D">
                    <img src={bloom} alt="bebloomers" />
                </a>
                <a href="https://www.instagram.com/reel/CdYV7H2qbKk/?igshid=MDJmNzVkMjY%3D">
                    <img src={eroticfeel} alt="eroticfeel" />
                </a>
                <a href="https://www.instagram.com/p/CacADPHK2qU/?igshid=MDJmNzVkMjY=">
                    <img src={caliope} alt="caliope" />
                </a>
                <a href="https://www.instagram.com/tv/CXLm8ZsvYXf/?igshid=MDJmNzVkMjY%3D">
                    <img src={felgtbi} alt="federacion estatal lgtbi+" />
                </a>
                <a href="https://www.instagram.com/p/CGBDYSZjsFT/?hl=es">
                    <img src={santamandanga} alt="santa mandanga" />
                </a>
                <a href="https://elpais.com/elpais/2020/04/27/mordiscos_y_tacones/1587997514_831936.html">
                    <img src={pais} alt="el pais" />
                </a>
                <a href="https://www.elconfidencial.com/alma-corazon-vida/2020-03-26/sexo-cine-para-adultos-pornografia-espana_2515323/">
                    <img src={confidencial} alt="el confidencial" />
                </a>
                <a href="https://www.rtve.es/play/videos/telediario/td2_orgasmo_femenino_080819/5363172/">
                    <img src={rtve} alt="rtve" />
                </a>
                <a href="https://sputniknews.lat/20200229/no-es-educacion-es-mero-divertimento-se-puede-regular-el-porno-1090629604.html">
                    <img src={sputnik} alt="sputnik" />
                </a>

            </Section>

        </Container>
    )
}


export default Colaborations