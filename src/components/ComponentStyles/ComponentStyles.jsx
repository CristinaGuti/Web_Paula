import styled from 'styled-components'


export const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    overflow: hidden;
    background-color: white;
    top: 0;
    left: 0;
    right: 0;
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

export const LogoImg = styled.img`
    width: 180px;
    margin: 12px 20px;
    transition: all 0.1s ease-in-out;
    &:hover {
    transform: translateY(-5%) scale(1.05) rotateX(10deg) rotateY(-5deg);
    }
`

export const IconImg = styled.img`
    width: 50px;
    margin: 12px 20px;
    transition: all 0.1s ease-in-out;
    &:hover {
    transform: translateY(-5%) scale(1.05);
    }
`

export const Container = styled.div`
    padding: 30px;
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
    color: black;
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