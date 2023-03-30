import './Navbar.css'
import logo from '../../assets/logo.png'
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
                    <li><Link href="#instagram">Instagram</Link></li>
                    <li><Link href="#dataStudies">Mis estudios como analista de datos</Link></li>
                    <li><Link href="#contact">Contacto</Link></li>
                    <li><Link href="#courses">Docencia</Link></li>
                </ul>
            </nav>
        </>
    )
}


export default Navbar