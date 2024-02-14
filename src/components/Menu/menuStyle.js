import { Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const colores = {
    coloresborder: 'rgb(129, 20, 20)',
    colorfondo: 'rgb(6, 57, 112)',
    colorfondo2: 'rgb(12,138,160)',
    colorfondo3: 'rgb(6, 70, 81)',
    colorletra: 'rgb(0, 0, 0)',
    imagenfondo1: 'radial-gradient(ellipse at top,rgb(12,138,160),transparent)'
};

const Herramientas = styled(Navbar)`

background:${colores.imagenfondo1} !important;
border-bottom:5px solid ${colores.coloresborder};
`

const Title = styled(Navbar.Brand)`

font-size: 30px;
padding: 0;
margin: 0;
font-weight: 600 !important;
//background-clip: text !important;
letter-spacing:2px;
font-family: 'Times New Roman', Times, serif !important;
border-top:2px solid transparent !important;
&:hover{
    border-top:2px solid ${colores.coloresborder} !important
}
`

const IconoMenu = styled(FontAwesomeIcon)`
gap:30px;
margin-right: 0;
margin-bottom:0;
font-size:0;
color:${colores.coloresborder}

`

const Casillas = styled(Nav.Link)`
cursor: pointer !important;
margin:auto;
font-size: 20px !important;
width: 100% !important;
padding:0px 20px 0 20px !important;
border-top: 2px solid transparent !important ;
/*  height: 53px !important; */
line-height:53px !important;
font-weight:700 !important;

@media  (min-width: 900px ){
    font-size: 20px !important;
    width: 200px !important;
}
@media  (max-width: 990px ){
    font-size: 20px !important;
    width: 100% !important;
}

 &:hover{
    opacity:1 !important;
    border-top: 2px solid ${colores.coloresborder} !important;
}

&:focus{
    background:${colores.colorfondo} ! important;
    color:red;
}

`
/* const cambio = !isfollowing ? <ListadoApp /> : !isfollowing
const cambiotable = !table ? <Tablelist />   : !settable
*/

const FormInline = styled(Form)`

gap:10px;
align-items: center;
margin-left:auto;
margin-right:20px;
/*   height: 30px; */
/* line-height:30px; */

`
const NavDrop = styled(NavDropdown)`


cursor: pointer ;
margin: 0 5px !important;
font-size: 20px !important;
width: auto !important;
padding:0px 10px 0 10px !important;
border-top: 2px solid transparent !important;
/* line-height:50px !important; */
text-decoration: none !important;
color:black !important;
margin-bottom:0px !important;
font-weight:700 !important;
z-index:200;

width: 100% !important;
border-top: 2px solid transparent !important;

&:hover{
    border-top: 2px solid ${colores.coloresborder} !important;
    color:${colores.colorletra};
}
`

const NavDroItem = styled(NavDropdown.Item)`
background: ${colores.colorfondo2} !important;
border-top:${colores.colorfondo2} !important;
font-size: 20px !important;
font-weight: 500 !important;

width: 100% !important;
border-top: 2px solid transparent !important;

&:hover{
    border-top: 2px solid ${colores.coloresborder} !important;
    background: ${colores.colorfondo3} !important;
    color:${colores.colorletra};
}
`

export { NavDroItem, NavDrop, FormInline, Casillas, IconoMenu, Title, Herramientas, colores }