import React, { useState } from 'react'
import { Offcanvas, Button } from 'react-bootstrap'


export const MenuOffcanvas = () => {
    const [show, setshow] = useState(false)

    const handleShow = () => {
        setshow(true)
    }

    const handleClose = () => {
        setshow(false)
    }
    return (
        <>
            <Button variant='success'
                onClick={handleShow}>
                Launch
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    <Offcanvas.Body>Some text</Offcanvas.Body>
                </Offcanvas.Header>
            </Offcanvas>
        </>
    )
}
