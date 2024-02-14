import React from 'react'
import { Alert } from 'react-bootstrap'

export const Alerta = ({ alerHeader, parrafoHeader, parragofooter }) => {


    return (
        <Alert className='text-black bg-lingh mt-4 mb-4' style={{ width: "100%", height: "auto", }} variant="success">
            <Alert.Heading>{alerHeader}</Alert.Heading>
            <p>{parrafoHeader} </p>
            <hr />
            <p className="mb-0">
                {parragofooter}
            </p>

        </Alert>

    )
}
