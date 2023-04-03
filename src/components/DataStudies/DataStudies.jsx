import styled from 'styled-components'
import { H2 } from '../Text/Text'


const DataStudies = () => {

    const Section = styled.div`
    height: 200px;
    background-color: var(--color-light);
    `

    return (
        <Section id='dataStudies'>
            <H2>Mis estudios como analista de datos</H2>
        </Section>
    )
}


export default DataStudies