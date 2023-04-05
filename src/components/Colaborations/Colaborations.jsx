import styled from 'styled-components'
import { H2, Paragraph } from '../Text/Text'
import { Container } from '../ComponentStyles/ComponentStyles'
import LogoLink from '../LogoLink/LogoLink'


const Section = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`


const Colaborations = () => {


    return (
        <Container id='colaborations'>

            <H2>Colaboraciones</H2>


            <Section>


                <LogoLink link='https://www.instagram.com/reel/CqQaMltIg2C/?igshid=MDJmNzVkMjY%3D'
                    srcImg='logo-freeda.webp' altImg='freeda' />

                <LogoLink link='https://www.instagram.com/p/CpiIuarDI16/?igshid=MDJmNzVkMjY%3D'
                    srcImg='logo-igualdadgob.png' altImg='ministerio de igualdad' />

                <LogoLink link='https://www.instagram.com/p/Co49igSsQPp/?igshid=MDJmNzVkMjY='
                    srcImg='logo-joyclub.png' altImg='joy club' />

                <LogoLink link='https://www.instagram.com/p/CfWFcjNjQ72/?igshid=MDJmNzVkMjY%3D'
                    srcImg='logo-bloom.jpg' altImg='bebloomers' />

                <LogoLink link='https://www.instagram.com/reel/CdYV7H2qbKk/?igshid=MDJmNzVkMjY%3D'
                    srcImg='logo-eroticfeel.png' altImg='eroticfeel' />

                <LogoLink link='https://www.instagram.com/p/CacADPHK2qU/?igshid=MDJmNzVkMjY='
                    srcImg='logo-caliope-1.png' altImg='caliope' />

                <LogoLink link='https://www.instagram.com/tv/CXLm8ZsvYXf/?igshid=MDJmNzVkMjY%3D'
                    srcImg='logo-felgtbi.png' altImg='federacion estatal lgtbi+' />

                <LogoLink link='https://www.instagram.com/p/CGBDYSZjsFT/?hl=es'
                    srcImg='logo-santamandanga-2.png' altImg='santa mandanga' />

                <LogoLink link='https://elpais.com/elpais/2020/04/27/mordiscos_y_tacones/1587997514_831936.html'
                    srcImg='logo-el-pais.png' altImg='el pais' />

                <LogoLink link='https://www.elconfidencial.com/alma-corazon-vida/2020-03-26/sexo-cine-para-adultos-pornografia-espana_2515323/'
                    srcImg='logo-el-cofidencial.jpg' altImg='el confidencial' />

                <LogoLink link='https://www.rtve.es/play/videos/telediario/td2_orgasmo_femenino_080819/5363172/'
                    srcImg='logo-rtve.png' altImg='rtve' />

                <LogoLink link='https://sputniknews.lat/20200229/no-es-educacion-es-mero-divertimento-se-puede-regular-el-porno-1090629604.html'
                    srcImg='logo-sputnik.jpg' altImg='sputnik' />

            </Section>

            <Paragraph>Si quieres hacer una colaboración, contáctame a este email: <strong>workpaulaalvarez@gmail.com</strong></Paragraph>

        </Container>
    )
}

export default Colaborations