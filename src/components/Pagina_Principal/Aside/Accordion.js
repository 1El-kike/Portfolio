import React from 'react'
import { AccordionEdixt } from './estilosAside'
import { Accordion } from 'react-bootstrap'

export const Accordions = ({ header, body }) => {

    const [h1, h2] = header;
    const [b1, b2] = body

    return (
        <>
            <AccordionEdixt bg="lingh" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{h1}</Accordion.Header>
                    <Accordion.Body>
                        {b1}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>{h2}</Accordion.Header>
                    <Accordion.Body>
                        {b2}
                    </Accordion.Body>
                </Accordion.Item>
            </AccordionEdixt>
        </>
    )
}
