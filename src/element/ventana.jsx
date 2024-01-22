import styled from "styled-components"

const Newvenana = styled.div`
    position: absolute;
    color: #1f1e1e;
box-shadow: 1px 2px 10px #868585   ;
    border-radius: 6px;
background-color: #fafbfc;
z-index: 99;
`

export const Ventana = ({ children, ancho = 400, largo = 300, arriba = 50, izq_der = 50 }) => {
    return (
        <Newvenana style={{ width: `${ancho}px`, height: `${largo}px`, top: `${arriba}px`, left: `${izq_der}px` }}>
            {children}
        </Newvenana>
    )
}
