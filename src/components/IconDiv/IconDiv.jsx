import { H4 } from '../Text/Text'
import { IconConsult } from "../ComponentStyles/ComponentStyles"


const IconDiv = ({ title, image, imageRed }) => {

    const imageSrcBlue = require(`../../assets/icons/${image}.png`)
    const imageSrcRed = require(`../../assets/icons/${imageRed}.png`)


    return (
        <div>
            <a href="https://app.acuityscheduling.com/schedule.php?owner=17667345" target="_blank" rel="noreferrer">
                <IconConsult src={imageSrcBlue}
                    onMouseEnter={e => (e.currentTarget.src = imageSrcRed)}
                    onMouseLeave={e => (e.currentTarget.src = imageSrcBlue)}
                />

            </a>
            <H4>{title}</H4>
        </div >
    )
}

export default IconDiv