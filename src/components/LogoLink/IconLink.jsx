import { IconImg } from "../ComponentStyles/ComponentStyles"


const LogoLink = ({ link, srcImg, altImg }) => {

    const imageLink = require(`../../assets/icons-media/${srcImg}`)


    return (

        <a href={link}>
            <IconImg src={imageLink} alt={altImg} />
        </a>
    )

}

export default LogoLink