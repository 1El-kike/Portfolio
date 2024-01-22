/* eslint-disable react/jsx-pascal-case */
import 'bootstrap/dist/css/bootstrap.min.css'
import { Main } from "./Article_section/Estilos_css"
import { MainPrincipal } from './Article_section/MainPrincipal'
import { MainSequnds } from './Article_section/MainSequnds'
import { useState } from 'react'
import { MainThree } from './Article_section/MainThree'



export const PaginaPrincipal = ({ num, moverPaginas }) => {


    const [paginas] = useState([<MainPrincipal />, <MainSequnds />, <MainThree />])

    return (
        <>

            <Main style={{ marginRight: "1%" }} className="container justify-content-center" >

                {moverPaginas(paginas)}
                {
                    num === 0 ?
                        < MainPrincipal />
                        :
                        num === 1 ?
                            < MainSequnds />
                            :
                            num === 2 ?
                                < MainThree />
                                :
                                <p>Error de sistema</p>
                }

            </Main >
        </>
    )

}
