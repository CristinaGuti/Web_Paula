import { useState } from 'react'
import logo from '../../assets/logo/logo-paula.png'
import menu from '../../assets/icons/icon-vulva-black.png'
// import { NavBar, NavLink, NavList, LogoNav } from '../ComponentStyles/ComponentStyles'
import styled from 'styled-components'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)


    // Todo esto hay que juntarlo con lo de ComponentStyles y apañarlo
    const NavBar = styled.nav`
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
    //   padding: 1rem;

      @media screen and (max-width: 1320px) {
        // flex-direction: column;
        // position: relative;
      }
      `

    const NavList = styled.ul`
        display: flex;
        // justify-content: space-between;
        align-items: center;
        margin: 0 20px;
        padding: 0;
        list-style: none;
  
        @media screen and (max-width: 1000px) {
          display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        //   flex-direction: column;
        //   position: absolute;
        //   top: 100%;
        //   left: 0;
        //   right: 0;
        //   background-color: #fff;
        //   border: 1px solid #000;
        //   padding: 1rem;
        //   margin-top: 0.5rem;
        }
      `

    const NavLink = styled.a`
      color: var(--color-black);
      text-decoration: none;
      margin: 0;
      padding: 0 10px;
      font-weight: bold;
      transition: color 0.2s;
    
      &:hover,
      &:focus {
        color: var(--color-red);
      }
      `

    const LogoNav = styled.img`
      width: 200px;
      margin: 10px 20px;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: translateY(-1%) scale(1.15);
      }
      `

    const MenuIcon = styled.img`
      width: 20px;
      height: cover;
      margin: 0;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: translateY(-1%) scale(1.15);
      }
      `

    const MenuButton = styled.div`
      margin: 0;
      padding: 0 50px;
      display: inline;
      cursor: pointer;

      @media screen and (min-width: 1000px) {
          display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')};
      }
      `



    const NavMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    @media screen and (max-width: 1320px) {
        flex-direction: column;
        position: relative;
    }
    `

    const LogoContainer = styled.div`
      margin-right: auto;
    `

    const HamburgerContainer = styled.div`
      @media screen and (max-width: 1320px) {
        margin-top: 0.5rem;
      }
    `

    const HamburgerButton = styled.button`
      display: none;
      flex-direction: column;
      justify-content: space-around;
      width: 32px;
      height: 32px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 10;

      @media screen and (max-width: 1320px) {
        display: flex;
      }
    `
    console.log('EL MENU:', isOpen)

    return (
        <NavBar>
            {/* <NavMobile> */}
            {/* <LogoContainer> */}
            <NavLink href="#">
                <LogoNav src={logo} alt="logo" />
            </NavLink>
            {/* </LogoContainer> */}

            {/* <HamburgerContainer> */}
            <MenuButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                <MenuIcon src={menu} alt="menu" />
            </MenuButton>
            {/* </HamburgerContainer> */}
            {/* </NavMobile> */}

            <NavList>
                <NavLink href="#consultation">Consulta</NavLink>
                <NavLink href="#colaborations">Colaboraciones</NavLink>
                <NavLink href="#dataStudies">Análisis de datos</NavLink>
                <NavLink href="#podcast">Podcast</NavLink>
                <NavLink href="#courses">Cursos online</NavLink>
                {/* <NavLink href="#blog">Blog</NavLink> */}
                <NavLink href="#networks">Redes</NavLink>
                <NavLink href="#contact">Contacto</NavLink>
            </NavList>


        </NavBar>
    )
}

export default Navbar