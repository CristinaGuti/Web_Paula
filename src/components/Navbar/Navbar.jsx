import './Navbar.css'
import logo from '../../assets/logo/logo-paula.png'
import styled from 'styled-components'


const Navbar = () => {

    const Link = styled.a`
    text-decoration: none;
    &:hover,
    &:focus {
    color: var(--color-red);
    }
    `


    return (
        <>
            <nav>
                <div>
                    <Link href="#"><img src={logo} alt="logo" /></Link>
                </div>

                <ul>
                    <li><Link href="#consultation">Consulta</Link></li>
                    <li><Link href="#colaborations">Colaboraciones</Link></li>
                    <li><Link href="#dataStudies">Análisis de datos</Link></li>
                    <li><Link href="#podcast">Podcast</Link></li>
                    <li><Link href="#courses">Cursos online</Link></li>
                    <li><Link href="#blog">Blog</Link></li>
                    <li><Link href="#networks">Redes</Link></li>
                    <li><Link href="#contact">Contacto</Link></li>
                </ul>
            </nav>
        </>
    )
}


export default Navbar