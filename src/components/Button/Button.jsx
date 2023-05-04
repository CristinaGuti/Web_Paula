import { LinkButton } from '../ComponentStyles/ComponentStyles'


const Button = ({ link, text }) => {

    const buttonTxt = text.toUpperCase()

    return (
        <LinkButton href={link} target="_blank">{buttonTxt}</LinkButton>
    )
}

export default Button