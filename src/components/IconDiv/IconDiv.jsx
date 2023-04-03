import styled from 'styled-components'

const IconDiv = ({ title, image, imageRed }) => {

    const Icon = styled.img`
    width: auto;
    height: 100px;
    margin: 30px;
    `

    const imageSrcBlue = require(`../../assets/icons/${image}.png`)
    const imageSrcRed = require(`../../assets/icons/${imageRed}.png`)

    return (
        <div>
            <Icon src={imageSrcBlue}
                onMouseEnter={e => (e.currentTarget.src = imageSrcRed)}
                onMouseLeave={e => (e.currentTarget.src = imageSrcBlue)}
            />
            <h4>{title}</h4>
        </div >
    )
}

export default IconDiv