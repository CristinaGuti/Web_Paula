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
export const LogoNav = styled.img`
width: 200px;
margin: 10px 20px;
transition: all 0.2s ease-in-out;
&:hover {
    transform: translateY(-1%) scale(1.1);
}
`
export const MenuButton = styled.div`
margin: 0;
padding-right: 30px ;
display: inline;
cursor: pointer;

@media screen and (min-width: 1000px) {
    display: none;
}
`
export const MenuIcon = styled.img`
width: 22px;
height: cover;
margin: 0;
transition: all 0.2s ease-in-out;
&:hover {
    transform: translateY(-1%) scale(1.2);
}
`


export const LogoImg = styled.img`
width: 180px;
height: 150px;
object-fit: contain;
margin: 0 20px;
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


export const Container = styled.div`
padding: 30px;
`
export const ContainerColor = styled.div`
padding: 30px;
background-color: var(--color-light);
`
export const Section = styled.div`
width: 80%;
margin: auto;
`


export const ConsultContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;

@media (min-width: 992px) {
    flex-direction: row;
}
`
export const ConsultColumn = styled.div`
display: flex;
flex-direction: column;
width: 80%;
padding: 20px;

@media (min-width: 992px) {
   width: 40%;
}
`
export const IconColum = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
`
export const IconConsult = styled.img`
width: auto;
height: 60px;
margin: 20px 30px 5px 30px;
&:hover{
    transform: scale(1.05);
}
@media (min-width: 768px) {
    height: 90px;
    margin: 20px 30px 10px 30px;
}
@media (min-width: 992px) {
    height: 120px;
    margin: 30px 30px 30px 30px;
}
@media (min-width: 1200px) {
    height: 150px;
    margin: 100px 30px 30px 30px;
}
`
export const VideoColumn = styled.div`
display: flex;
flex-direction: column;
width: 80%;
justify-content: center;
align-items: center;

@media (min-width: 768px) {
   width: 60%;
}
@media (min-width: 992px) {
   width: 40%;
}
`
export const Video = styled.video`
width: 50%;
height: auto;
`


export const ColabContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`
export const WorkLinkContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`


export const PodcastContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`
export const PodcastWidget = styled.iframe`
width: 624px;
height: 352px;
border-radius: 10px;
border: none;
margin-top: 20px;
`


export const LinkButton = styled.a`
text-decoration: none;
background-color: var(--color-blue);
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
border-radius: 10px;
color: var(--color-black);
display: block;
width: 150px;
margin:  20px auto;
padding: 15px 35px;
&:hover,
&:focus {
    background-color: var(--color-red);
    transform: scale(1.05);
}
@media (min-width: 768px) {
    width: 200px;
}
`
export const ButtonContainer = styled.div`
@media (min-width: 768px) {
    display: flex;
    justify-content: center;
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