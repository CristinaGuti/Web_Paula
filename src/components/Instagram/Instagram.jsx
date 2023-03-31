import styled from 'styled-components'


const Instagram = () => {

    const Section = styled.div`
    height: 400px;
    background-color: var(--color-light);
    `

    const InstagramWidget = styled.iframe`
    width: 100%;
    border: 0;
    overflow: hidden;
    `

    return (
        <Section id='networks' >
            <h2>Instagram</h2>
            < script src="https://cdn.lightwidget.com/widgets/lightwidget.js" ></script >

            <InstagramWidget
                src="//lightwidget.com/widgets/80993f385be250dcbdf32b1db9dc0fc7.html"
                title="instagram"
                className='lightwidget-widget'
                height="600"
            ></InstagramWidget>
        </Section>
    )
}


export default Instagram