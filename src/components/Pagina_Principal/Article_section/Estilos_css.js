import styled from "styled-components"

const Main = styled.main`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: 500;
`


const Article = styled.article`
display: flex;
justify-content: space-between;
width: 100%;
gap: 20px;

@media(max-width:800px){
flex-direction: column;
justify-content: space-between;
margin-top: 20px;
margin-bottom: 20px;
}
`

export { Main, Article }
