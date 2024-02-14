import { styled } from 'styled-components'

const DivContainer = styled.div`
max-width: 1300px;
width: 90%;
margin: auto;
`
const Div = styled.div`
display: grid;
grid-template-columns: repeat(9, 1fr);
grid-template-rows: repeat(1,auto 1fr auto);
grid-gap: 20px;
margin: auto;


@media(max-width:980px){
    grid-template-columns: 1fr;
}
`
const Butom = styled.button`
    display: fixed;
    margin: auto;
    width: 100%;
    bottom: 0;
`
const DivElemPlayer = styled.div`
/*  display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
 margin: auto; */
 display: grid;
 grid-row: span 4;
 grid-column: span 3;
 grid-template-columns: subgrid;
 grid-template-rows: subgrid;
 margin-top: 50px;
 margin-bottom: 50px ;

 `

const Titulo = styled.h2`
color: aliceblue;
margin: auto;
display: grid;
grid-column: span 3;
`

const P = styled.p`
display: grid;
grid-column: span 3;
grid-template-rows: subgrid;
margin: auto;
font-size: 1.0em;
color: aliceblue;
border: 2px solid black;
border-radius: 5px;
padding: 10px ;
text-align: start;
`
const Bottom = styled.button`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
background-color: transparent;
border: none;
border:2px solid transparent;
border-radius: 5px;
transition: backdrop-filter 0.3s;

&:active{
    border:2px solid black;
    border-radius: 5px;
}

&:focus{
    backdrop-filter: blur(5px);
}


&:last-child{
    border:none;
    border-radius: 5px;
    color: #fff;
    background-color: #050505;
    
}
&:last-child:active{
    
}
`
const DivButton = styled.div`
display: grid;
grid-column: span 3;
grid-template-columns: subgrid;
border: 2px dotted black;
padding: 10px ;
border-radius: 6px;


`
const icono = {

    blue: {
        fontSize: '29px',
        color: "blue",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingBottom: "2px",
        paddingTop: "2px"
    },
    red: {
        fontSize: '29px',
        color: "red",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingBottom: "2px",
        paddingTop: "2px"
    },
    span: {
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingBottom: "2px",
        paddingTop: "2px"
    }
}
export { Butom, Div, DivContainer, icono, DivButton, Bottom, P, Titulo, DivElemPlayer }