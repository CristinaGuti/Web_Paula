import { useState } from 'react'
import logo from '../../assets/logo/logo-paula.png'
import menu from '../../assets/icons/icon-vulva-red.png'
import styled from 'styled-components'
import { NavBar, NavLink, LogoNav, MenuButton, MenuIcon } from '../ComponentStyles/ComponentStyles'



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const NavList = styled.ul`
    display: flex;
    align-items: center;
    margin: 0 20px;
    padding: 0;
    list-style: none;
  
    @media screen and (max-width: 1000px) {
      display: ${isOpen ? 'flex' : 'none'};
      flex-direction: column;
      position: fixed;
      z-index: 1;
      top: 10%;
      right: 0;
      align-items: end;
      background-color: var(--color-white);
      border-bottom-left-radius: 20px;
      padding: 1rem 2rem;
      margin: 0;
    }
  `


  return (
    <NavBar>

      <NavLink href="#">
        <LogoNav src={logo} alt="logo" />
      </NavLink>

      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon src={menu} alt="menu" />
      </MenuButton>

      <NavList>
        <NavLink href="#consultation">Consulta</NavLink>
        <NavLink href="#colaborations">Colaboraciones</NavLink>
        <NavLink href="#dataStudies">Análisis de datos</NavLink>
        <NavLink href="#podcast">Podcast</NavLink>
        <NavLink href="#courses">Cursos online</NavLink>
        <NavLink href="#networks">Redes</NavLink>
        <NavLink href="#contact">Contacto</NavLink>
      </NavList>

    </NavBar>
  )
}

export default Navbar