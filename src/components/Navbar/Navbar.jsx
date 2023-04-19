// import { useState } from 'react'
import logo from '../../assets/logo/logo-paula.png'
import { NavBar, NavLink, NavList, LogoNav } from '../ComponentStyles/ComponentStyles'
// import styled from 'styled-components'


const Navbar = () => {

    //     const [isOpen, setIsOpen] = useState(false)


    //     // Todo esto hay que juntarlo con lo de ComponentStyles y apañarlo
    //     const NavBar = styled.nav`
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   padding: 1rem;

    //   @media screen and (max-width: 1320px) {
    //     flex-direction: column;
    //     position: relative;
    //   }
    // `

    //     const NavMobile = styled.div`
    //     display: flex;
    //     align-items: center;
    //   justify-content: space-between;
    //   flex-direction: row;

    //   @media screen and (max-width: 1320px) {
    //     flex-direction: column;
    //     position: relative;
    //   }
    // `

    //     const LogoContainer = styled.div`
    //   margin-right: auto;
    // `

    //     const HamburgerContainer = styled.div`
    //   @media screen and (max-width: 1320px) {
    //     margin-top: 0.5rem;
    //   }
    // `

    //     const NavList = styled.ul`
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   list-style: none;

    //   @media screen and (max-width: 1320px) {
    //     display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    //     flex-direction: column;
    //     position: absolute;
    //     top: 100%;
    //     left: 0;
    //     right: 0;
    //     background-color: #fff;
    //     border: 1px solid #000;
    //     padding: 1rem;
    //     margin-top: 0.5rem;
    //   }
    // `;

    //     const NavLink = styled.a`
    //   color: #000;
    //   text-decoration: none;
    //   padding: 0.5rem;
    //   font-weight: bold;
    //   transition: color 0.3s;

    //   &:hover {
    //     color: #6e1e6e;
    //   }

    //   @media screen and (max-width: 1320px) {
    //     padding: 0.5rem 0;
    //   }
    // `;

    //     const LogoNav = styled.img`
    //   height: 50px;
    // `;

    //     const HamburgerButton = styled.button`
    //   display: none;
    //   flex-direction: column;
    //   justify-content: space-around;
    //   width: 32px;
    //   height: 32px;
    //   background-color: transparent;
    //   border: none;
    //   cursor: pointer;
    //   padding: 0;
    //   z-index: 10;

    //   @media screen and (max-width: 1320px) {
    //     display: flex;
    //   }
    // `;

    //     const HamburgerIcon = styled.div`
    //   width: 20px;
    //   height: 16px;
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: space-between;
    //   cursor: pointer;

    //   span {
    //     width: 100%;
    //     height: 2px;
    //     background-color: #000;
    //     transition: transform 0.3s;
    //     transform-origin: center;
    //   }

    //   span:first-child {
    //     transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    //   }

    //   span:nth-child(2) {
    //     opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    //   }

    //   span:last-child {
    //     transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    //   }
    // `

    return (
        <NavBar>
            {/* <NavMobile>
                <LogoContainer> */}
            <NavLink href="#">
                <LogoNav src={logo} alt="logo" />
            </NavLink>
            {/* </LogoContainer>

                <HamburgerContainer>
                    <HamburgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                        <HamburgerIcon isOpen={isOpen}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>
                        </HamburgerIcon>
                    </HamburgerButton>
                </HamburgerContainer>
            </NavMobile> */}

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