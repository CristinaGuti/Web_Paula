import { LogoImg } from "../ComponentStyles/ComponentStyles"


const LogoLink = ({ link, srcImg, altImg }) => {

    const imageLink = require(`../../assets/colaborations/${srcImg}`)


    return (

        <a href={link} target="_blank" rel="noreferrer">
            <LogoImg src={imageLink} alt={altImg} />
        </a>
    )

}

export default LogoLink