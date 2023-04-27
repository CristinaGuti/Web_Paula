import { useState } from 'react'
import logo from '../../assets/logo/logo-paula.png'
import menu from '../../assets/icons/icon-vulva-red.png'
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
      `

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
        transform: translateY(-1%) scale(1.1);
      }
      `

  const MenuIcon = styled.img`
      width: 22px;
      height: cover;
      margin: 0;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: translateY(-1%) scale(1.2);
      }
      `

  const MenuButton = styled.div`
      margin: 0;
      padding-right: 30px ;
      display: inline;
      cursor: pointer;

      @media screen and (min-width: 1000px) {
          display: none;
      }
      `

  console.log(isOpen)

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