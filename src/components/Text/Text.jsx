import styled from "styled-components"

export const H1 = styled.h1`
    font-weight: 600;
    letter-spacing: 3px;
    margin: 8% 2% 5% 2%;
    font-family: "Gobold-Regular";
    font-size: 2.5rem;
    text-transform: uppercase;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
    color: var(--color-red);
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
    font-size: 1.8rem;
    text-align: center;
    color: var(--color-red);

    @media (min-width: 576px) {
        font-size: 2rem;
    }
    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
    `

export const H4 = styled.h4`
    padding: 10px;
    font-size: 1.2rem;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;

    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
    `

export const Paragraph = styled.p`
    font-size: 1rem;
    padding: 5px;

    @media (min-width: 768px) {
        font-size: 1.3rem;
        padding: 10px;
    }
    `

export const HeroParagraph = styled.p`
    font-size: 1rem;
    text-align: justify;
    padding: 5%;
    padding-top: 40%;
    margin: 0;
    color: white;
    
    @media (min-width: 576px) {
        font-size: 1rem;
        text-align: justify;
        padding: 0 6% 0 55%;
        color: black;
    }
    @media (min-width: 992px) {
        font-size: 1.3rem;
        text-align: justify;
        padding: 0 6% 0 55%;
        color: black;
  }
    `


