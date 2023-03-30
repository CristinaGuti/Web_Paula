import styled from 'styled-components'


const Blog = () => {

    const Section = styled.div`
    height: 200px;
    background-color: var(--color-light);
    `

    return (
        <Section id='blog'>
            <h2>Blog</h2>
        </Section>
    )
}


export default Blog