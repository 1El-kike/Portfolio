import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap'

export const Paginacion = ({ pagina, datospadre, p }) => {

    const [active, setactive] = useState(0)

    let items = [];
    let medio = Math.floor(pagina.length / 2)

    for (let number = 0; number < pagina.length; number++) {

        items.push(
            <Pagination.Item onClick={() => { setactive(active === number) }} key={number} active={number === active}>
                {number + 1}
            </Pagination.Item>
        )

    }
    items.splice(medio, 0, <Pagination.Ellipsis />)

    const moverNext = () => {

        setactive(active + 1)
        if (active === pagina.length - 1) {
            setactive(pagina.length - 1)
        }
    }
    const moverFirst = () => {

        setactive(0)
    }
    const moverPrev = () => {

        setactive(active - 1)
        if (active <= 1) {
            setactive(0)
        }
    }
    const moverLast = () => {

        setactive(pagina.length - 1)

    }

    const seleclik = (e) => {

        setactive(parseInt(e.target.innerHTML) - 1)


    }




    return (
        <>

            <div className='justify-content-center d-flex'  >

                <Pagination className='mb-auto' SelectPagina={active}>

                    <Pagination.First onClick={() => moverFirst()} />
                    <Pagination.Prev onClick={() => moverPrev()} />
                    <Pagination onClick={(e) => seleclik(e)}>{items}</Pagination>

                    <Pagination.Next onClick={() => moverNext()} />
                    <Pagination.Last onClick={() => moverLast()} />
                </Pagination>
                {datospadre(active)}
            </div>
        </>
    )
}
