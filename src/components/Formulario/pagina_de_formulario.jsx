import React from 'react'
import { Formulario } from './formulario'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AsideFormulario } from './AsideFormulario'

export const PaginaDeFormulario = () => {



    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <AsideFormulario />
                </div>
                <div className='col-md-8'>
                    <div className=' col-12 justify-content-end'>
                        <Formulario />

                    </div>
                </div>
            </div>
        </div>
    )
}
