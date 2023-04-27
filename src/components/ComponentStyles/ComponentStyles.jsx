import styled from 'styled-components'


export const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    overflow: hidden;
    background-color: var(--color-white);
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

export const NavLink = styled.a`
    text-decoration: none;
    color: var(--color-black);
    padding: 0 10px;
    &:hover,
    &:focus {
        color: var(--color-red);
    }
`



export const NavList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0 20px;
`


export const LogoNav = styled.img`
    width: 200px;
    margin: 10px 20px;
    transition: all 0.1s ease-in-out;
    &:hover {
    transform: translateY(-1%) scale(1.15);
    }
`

export const LogoImg = styled.img`
    width: 180px;
    margin: 12px 20px;
    transition: all 0.1s ease-in-out;
    &:hover {
    transform: translateY(-5%) scale(1.05) rotateX(10deg) rotateY(-5deg);
    }
`

export const IconImg = styled.img`
    width: 20px;
    margin: 15px 10px 0 10px;
    transition: all 0.1s ease-in-out;
    &:hover {
        transform: translateY(-5%) scale(1.05);
    }

    @media (min-width: 576px) {
        width: 30px;
        margin: 12px 20px;
    }
`

export const ContainerColor = styled.div`
    padding: 30px;
    background-color: var(--color-light);
`

export const Container = styled.div`
    padding: 30px;
`

export const FooterContainer = styled.div`
    padding: 15px;
    background-color: var(--color-black);
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;

    }
`

export const Section = styled.div`
    width: 70%;
    margin: auto;
`

export const LinkButton = styled.a`
    text-decoration: none;
    background-color: var(--color-red);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    color: var(--color-black);
    padding: 15px 35px;
    display: block;
    width: 200px;
    margin:  20px auto;
    &:hover,
    &:focus {
        background-color: var(--color-podcast-light);
        transform: scale(1.05);
    }
`






export const InstagramContainer = styled.div`
padding: 10px;
`

export const InstagramWidget = styled.iframe`
width: 100%;
height: 380px;
border:0;
overflow:hidden;

  @media (min-width: 388px) {
    width: 80%;
    height: 450px;
  }
  @media (min-width: 576px) {
    width: 70%;
    height: 520px;
  }
  @media (min-width: 768px) {
    width: 60%;
    height: 560px;
  }
  @media (min-width: 992px) {
    width: 50%;
    height: 520px;
  }
  @media (min-width: 1200px) {
    height: 580px;
  }
  @media (min-width: 1400px) {
    height: 700px;
  }
`
export const FooterEmail = styled.p`
    text-align: left;
    align-items: center;
    margin: 0 20px;
`

export const FooterList = styled.ul`
    display: flex;
    align-items: center;
    margin: 0 20px;
    padding: 0;
`

export const FooterLink = styled.a`
    text-decoration: none;
    color: var(--color-blue);
    padding: 0 10px;
    &:hover,
    &:focus {
        color: var(--color-red);
    }
`