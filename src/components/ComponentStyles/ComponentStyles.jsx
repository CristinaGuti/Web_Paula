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
    width: 250px;
    margin: 12px 20px;
`

export const Container = styled.div`
padding: 30px;
`