import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, css } from "styled-components";



const GrupoInput = styled.div`
    position: relative;
    z-index:90;
    `
const IcoBuscador = styled(FontAwesomeIcon)`
        color:red;
        font-size:20px;
        position:absolute;
        right:8px;
        top:11px
    
    `
const IcoValidar = styled(FontAwesomeIcon)`
        position:absolute;
        right:10px;
        bottom:14px;
        z-index:100;
        font-size:16px;
        opacity:0;

        ${props => props.valido === 'true' && css`
            opacity:1;
            color:${colores.exito};
        `}

        ${props => props.valido === 'false' && css`
            opacity:1;
            color:${colores.error};
        `}
    `


const colores = {

    border: "#0075FF",
    error: "#F66060",
    exito: "#1ed12d",
    gradiente: "radial-gradient(ellipse at top,rgb(12,138,160),transparent)",
    gadientent2: "radial-gradient(ellipse at bottom,rgb(107,0,123),transparent)"

}

const Formularios = styled.form`

    display: grid;
    background:${colores.gradiente} ,${colores.gadientent2};
    grid-template-columns:1fr 1fr;
    gap: 20px;
    margin-left:0 ;
    width:auto;
    padding:0 50px 20px 50px;
    border-radius:4px;

    @media (max-width:800px){
        grid-template-columns:1fr;
    }
`;


const Label = styled.label`
display:block;
font-weight:700;
padding:10px;
color: aqua;
min-height:40px;
cursor:pointer;

${props => props.valido === 'false' && css`

    color:${colores.error}
`}

`;

const Inputt = styled.input`
    width:100%;
    background:#fff;
    border-radius:3px;
    height:45px;
    line-height:45px;
    padding:0 40px 0 10px;
    transition:.3s ease all;
    border:3px solid transparent;

    &:focus{
        border:3px solid ${colores.border};
        outline:none;
        box-shadow:3px 0 30px rgba(163,163,163, 0.4)
    }

    ${props => props.valido === 'true' && css`
    border:3px solid transparent;
    `}

    ${props => props.valido === 'false' && css`
    border:3px solid ${colores.error} !important;
    `}

    `;

const Leyenda = styled.p`
        font-size:12px;
        margin-bottom:0;
        color: ${colores.error};
         display:none;  

         ${props => props.valido === 'false' && css`
         
         `}
        ${props => props.valido === 'false' && css`
        display:block;
        
`}

    `
const Terminos = styled.div`
        grid-column:span 2; 
        margin-right:auto;
    input{
        margin-right:15px;
    }

    @media(max-width:800px){
        grid-column:span 1;
    }
    `

const Botondiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    grid-column:span 2;

    @media(max-width:800px){
        grid-column:span 1;
    } 
    `
const Boton = styled.button`
        height:45px;
        line-height:45px;
        width:30%;
        background:#000;
        color:#fff;
        font-weight:bold;
        border:none;
        border-radius: 3px;
        cursor:pointer;
        transition: .1s ease all;
        
        &:hover {
            box-shadow: 3px 0px 30px rgba(163,163,163, .8)
        }
    `

const Mensajeexito = styled.p`
        font-size:14px;
        color:${colores.exito};
         
    `
const Mensajeerror = styled.div`
    height:45px;
    line-height:45px;
    background:${colores.error};
    padding:0px 15px;
    border-radius:3px;
    grid-column:span 2;
    

    p{
        margin:0;
        text-align:start;
        
    }
    b{
        margin-left:10px;
    }
    `

/* 
const funcion = () => {
    
                                                                 Con este codigo
                                                                 se puede validar una contraseña
                                                                 con otra de comprovacion
                                                                       
    if (password.campo.leght > 0) {
        if (password.campo !== password2.campo) {
            cambiarpassword((prevState) => {
                return { ...prevState, valido: 'false' }
            });
        } else {
            cambiarpassword((prevState) => {
                return { ...prevState, valido: 'true' }
            })
        }
    }

} 
funcion();\*/


export {
    Formularios, Label, GrupoInput, Inputt, Boton, Mensajeexito, Mensajeerror
    , Leyenda, IcoBuscador, IcoValidar, Botondiv, Terminos
}