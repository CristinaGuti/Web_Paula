import styled from 'styled-components'
import { H2 } from '../Text/Text'



const Blog = () => {

    const Section = styled.div`
    height: 200px;
    background-color: var(--color-light);
    `

    return (
        <Section id='blog'>
            <H2>Blog</H2>
        </Section>
    )
}


export default Blog