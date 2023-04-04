import logo from '../../assets/logo/logo-paula.png'
import { NavBar, NavLink, NavList, LogoImg } from '../ComponentStyles/ComponentStyles'


const Navbar = () => {


    return (
        <>
            <NavBar>
                <div>
                    <NavLink href="#"><LogoImg src={logo} alt="logo" /></NavLink>
                </div>
                <NavList>
                    <NavLink href="#consultation">Consulta</NavLink>
                    <NavLink href="#colaborations">Colaboraciones</NavLink>
                    <NavLink href="#dataStudies">Análisis de datos</NavLink>
                    <NavLink href="#podcast">Podcast</NavLink>
                    <NavLink href="#courses">Cursos online</NavLink>
                    <NavLink href="#blog">Blog</NavLink>
                    <NavLink href="#networks">Redes</NavLink>
                    <NavLink href="#contact">Contacto</NavLink>
                </NavList>
            </NavBar>
        </>
    )
}


export default Navbar