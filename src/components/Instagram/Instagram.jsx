import { H2 } from '../Text/Text'
import { InstagramContainer, InstagramWidget } from '../ComponentStyles/ComponentStyles'


const Instagram = () => {


  return (
    <InstagramContainer id='networks' >

      <H2>Instagram</H2>

      < script src="https://cdn.lightwidget.com/widgets/lightwidget.js" ></script >

      <InstagramWidget
        src="//lightwidget.com/widgets/078d0f49d6375305a79f3e002d9e9d66.html"
        title="instagram"
        allowtransparency="true"
        className='lightwidget-widget'
      >
      </InstagramWidget>

    </InstagramContainer>
  )
}


export default Instagram