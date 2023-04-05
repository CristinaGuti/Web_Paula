import styled from 'styled-components'
import { H4 } from '../Text/Text'


const Icon = styled.img`
width: auto;
height: 150px;
margin: 100px 30px 30px 30px;
&:hover{
    transform: scale(1.05);
}
`


const IconDiv = ({ title, image, imageRed }) => {

    const imageSrcBlue = require(`../../assets/icons/${image}.png`)
    const imageSrcRed = require(`../../assets/icons/${imageRed}.png`)


    return (
        <div>
            <Icon src={imageSrcBlue}
                onMouseEnter={e => (e.currentTarget.src = imageSrcRed)}
                onMouseLeave={e => (e.currentTarget.src = imageSrcBlue)}
            />
            <H4>{title}</H4>
        </div >
    )
}

export default IconDiv