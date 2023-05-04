import IconLink from '../LogoLink/IconLink'
import { FooterContainer, FooterList, FooterEmail } from '../ComponentStyles/ComponentStyles'


const Footer = () => {


    return (
        <FooterContainer id='contact'>

            <FooterEmail>workpaulaalvarez@gmail.com</FooterEmail>

            <FooterList>
                <IconLink link='https://www.linkedin.com/in/paula-%C3%A1lvarez-s%C3%A1nchez-de-amoraga-dataanalist/'
                    srcImg='icon-linkedin.png' altImg='linkedin' />

                <IconLink link='https://github.com/paulaalvarezsa'
                    srcImg='icon-github.png' altImg='github' />

                <IconLink link='https://www.instagram.com/paulaalvarezsexologa/'
                    srcImg='icon-instagram.webp' altImg='instagram' />

                <IconLink link='https://www.tiktok.com/@paulaalvarezsexologa'
                    srcImg='icon-tiktok.webp' altImg='tiktok' />

                <IconLink link='https://open.spotify.com/show/02O5h9s0pdZ1z7ZM9R9zEz'
                    srcImg='icon-spotify.png' altImg='spotify' />

                <IconLink link='https://youtube.com/playlist?list=PLpNdHcxIYepHqyVAWtmcILiRjGepxdiKJ'
                    srcImg='icon-youtube.png' altImg='youtube' />
            </FooterList>
        </FooterContainer>
    )
}

export default Footer