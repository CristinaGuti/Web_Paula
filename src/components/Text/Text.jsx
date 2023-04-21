import styled from "styled-components"

export const H1 = styled.h1`
    font-weight: 600;
    letter-spacing: 3px;
    margin: 8% 2% 5% 2%;
    font-family: "Gobold-Regular";
    font-size: 2.5rem;
    text-transform: uppercase;
    color: var(--color-podcast-light);
    @media (min-width: 576px) {
    font-size: 3rem;
    }
    @media (min-width: 768px) {
    font-size: 3.7rem;
    }
    `

export const H2 = styled.h2`
    font-family: "Gobold-Regular";
    padding: 20px;
    font-size: 3rem;
    text-align: center;
    `

export const H4 = styled.h4`
    padding: 10px;
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    `

export const Paragraph = styled.p`
    font-size: 1.3rem;
    padding: 10px;
    `

export const HeroParagraph = styled.p`
    font-size: 0.8rem;
    padding: 5%;
    margin: 0;
    color: white;
    @media (min-width: 576px) {
    font-size: 1rem;
    text-align: end;
    padding: 5% 6% 0 55%;
    color: black;
    }
    @media (min-width: 768px) {
    font-size: 1.3rem;
    text-align: end;
    padding: 5% 6% 0 55%;
    color: black;

  }
    `


