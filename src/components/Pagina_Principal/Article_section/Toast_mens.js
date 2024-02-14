import React, { useState } from 'react'
import { Button, Col, Row, Toast } from 'react-bootstrap'








export const ToastMens = ({ body }) => {

    const [showA, setshowA] = useState(true);
    const [showB, setshowB] = useState(true);

    const toggleShowA = () => setshowA(!showA)
    const toggleShowB = () => setshowB(!showB)
    return (
        <Row className=' m-2 '>
            <Col md={6} className='mb-2 '>
                <Button onClick={toggleShowA} className='mb-2  toggleShowB'>
                    Toggle <strong>with</strong> Animation
                </Button>
                <Toast show={showA} className='bg-info' onClick={toggleShowA}>
                    <Toast.Header className='bg-dark'>
                        <img style={{ width: "35px", height: "35px" }}
                            src={require("../../../assets/images/Untitled.jpg")}
                            className='rounded w-2 me-2'
                            alt=''
                        ></img>
                        <strong className='me-auto'>Bootstrap </strong>
                        <small>11 min</small>
                    </Toast.Header>
                    <Toast.Body className='bg-dark'>{body}</Toast.Body>
                </Toast>
            </Col>
            <Col md={6} className='mb-2'>
                <Button onClick={toggleShowB} className='mb-2'>
                    Toggle <strong>with</strong> Animation
                </Button>
                <Toast show={showB} className='bg-info' onClick={toggleShowB}>
                    <Toast.Header className='bg-dark'>
                        <img style={{ width: "35px", height: "35px" }}
                            src={require("../../../assets/images/prod-24eta.png")}
                            className='rounded me-2'
                            alt=''
                        ></img>
                        <strong className='me-auto'>Bootstrap </strong>
                        <small>11 min</small>
                    </Toast.Header>
                    <Toast.Body className='bg-dark'>{body}</Toast.Body>
                </Toast>
            </Col>
        </Row>
    )
}
