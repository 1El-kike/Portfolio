/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import { useEffect, useContext, useState } from 'react'
import { UserContext } from './AsideFormulario'
import { Accordion, Badge, Breadcrumb, Button, Col, Form, ListGroup, Modal, Row } from 'react-bootstrap'
import "./style.css"



export const Tools = () => {

    const num = useContext(UserContext)
    const [nume, setnum] = useState(1)
    const [table, settable] = useState()
    const [cambio, setcambio] = useState()
    const [list, setlist] = useState([])

    const changetabla = (e) => {
        settable(e.target.textContent)
    }

    const changelist = () => {
        if (table === "Jefe") {
            setlist([{
                cargo: "1ER JEFE",
                description: "Tabla de Asignaciones",
                href: "link1"
            }, {
                cargo: "2DO JEFE",
                description: "Tabla de Mando",
                href: "link2"
            }, {
                cargo: " JEFE ORGANO",
                description: " Tabla de tareas",
                href: "link3"
            }, {
                cargo: " JEFE DE DEPARTAMENTO",
                description: " Tabla de Encargado",
                href: "link4"
            }])
        } else if (table === "Subordinado") {
            setlist([{
                cargo: "1ER ESPECIALISTA",
                description: "Tabla Princiapal",
                href: "link5"
            }, {
                cargo: "2DO ESPECIALISTA",
                description: "Tabla Secundaria",
                href: "link6"
            }, {
                cargo: "ADMINISTRADOR",
                description: "Tabla de Permiso",
                href: "link7"
            }, {
                cargo: "ENCARGADO",
                description: "Tabla de Resultado",
                href: "link8"
            }])
        } else if (table === "Administrador") {
            setlist([{
                cargo: "PERMISO",
                description: "Añadir Permiso",
                href: "link9"
            }, {
                cargo: "PRIORIDAD",
                description: "Añadir Prioridad",
                href: "link10"
            }, {
                cargo: "ELIMINAR",
                description: "Administrar Cuenta",
                href: "link11"
            }, {
                cargo: "AÑADIR",
                description: "Administrar Usuarios",
                href: "link12"
            }])
        }
    }



    const [show, setshow] = useState(false)


    const handleOpen = (element) => {
        setshow(true)
        setcambio(element.cargo)
    }
    const handleClose = () => {
        setshow(false)
    }


    const ModalOpen = () => {



        return (
            <Modal show={show} onHide={() => handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {cambio}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                            <Form.Label>Usuario:</Form.Label>
                            <Form.Control type='text'
                                placeholder=''
                                autoFocus>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type='password'
                                placeholder='password'
                                autoFocus>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={() => handleClose()}>Canselar</Button>
                    <Button variant='primary' >Login</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const def = () => {
        setnum(num)
    }
    useEffect(() => {
        changelist();
    }, [table])


    useEffect(() => {
        def()
    }, [def])

    const [elem, setelem] = useState(
        {
            list1: [{
                name: "",
                ele: [""]
            }
            ],
            list2: [{
                name: "",
                ele: [""]
            }],
            list3: [{
                name: "",
                ele: [""]
            }],
            list4: [{
                name: "",
                ele: [""]
            }],
            list5: [{
                name: "",
                ele: [""]

            }],
            list6: [{
                name: "",
                ele: [""]

            }]
        }
    )

    useEffect(() => {

        if (table == "Tools") {
            setelem({
                ...elem,
                list1: [{
                    name: "Email",
                    ele: ["Inbox", "Email detail", "Compose"]
                }
                ],
                list2: [{
                    name: "Events",
                    ele: ["Create an event", "Event detail", "Event list"]
                }],
                list3: [{
                    name: "Table",
                    ele: ["Basic table", "Advance tables", "Bulk select"]
                }],
                list4: [{
                    name: "Chart",
                    ele: ["Chartjs", "D3js", "ECharts",]
                }],
                list5: [{
                    name: "Faq",
                    ele: ["Faq basic", "Fag alt", "Fag accordion", "Plugin"]

                }],
                list6: [{
                    name: "Customization",
                    ele: ["Dark mode", "Styling", "Congiguration", "Plugin"]

                }]
            })
        }

        if (table == "Structure") {
            setelem({
                ...elem,
                list1: [{
                    name: "Components",
                    ele: ["Accordion", "Alert", "Anchor", "Animated icons", "Background", "Badges ", "Buttons", "Cookie notice"]
                }
                ],
                list2: [{
                    name: "Maps",
                    ele: ["Google map", "Leaflet map",]
                }],
                list3: [{
                    name: "Icons",
                    ele: ["Font awesome", "Feather", "Material icons"]
                }],
                list4: [{
                    name: "Utilities",
                    ele: ["Background", "Display", "Position", "Visibility"]
                }],
                list5: [{
                    name: "Forms",
                    ele: ["Basic", "Advance", "Floating labels", "Wizard"]

                }],
                list6: [{
                    name: "Multi Level",
                    ele: ["Lewer two", "Level Three", "Lever Four",]

                }]
            })
        }

        if (table == "Changelog") {
            setelem({
                ...elem,
                list1: [{
                    name: "Email",
                    ele: ["Inbox", "Email detail", "Compose"]
                }
                ],
                list2: [{
                    name: "Events",
                    ele: ["Create an event", "Event detail", "Event list"]
                }],
                list3: [{
                    name: "Table",
                    ele: ["Basic table", "Advance tables", "Bulk select"]
                }],
                list4: [{
                    name: "Utilities",
                    ele: ["Background", "Display", "Position", "Visibility"]
                }],
                list5: [{
                    name: "Faq",
                    ele: ["Faq basic", "Fag alt", "Fag accordion", "Plugin"]

                }],
                list6: [{
                    name: "Customization",
                    ele: ["Dark mode", "Styling", "Congiguration", "Plugin"]

                }]
            })
        }



    }, [table])


    const [opens, setopens] = useState(false)
    const [opens2, setopens2] = useState(false)


    const DivBreadcrumb = ({ e, p, x }) => {

        return (
            <>
                <Breadcrumb onClick={(e) => changetabla(e)}>
                    <Breadcrumb.Item href='#'>
                        {e}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href='#'>
                        {p}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href='#'>
                        {x}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </>
        )
    }

    const [datos, setdatos] = useState({
        new: [{
            d: "Datos",
            id: 1
        },
        {
            d: "Nuevo",
            id: 2
        },
        {
            d: "Hola Mundo",
            id: 3

        }]
    })



    const DivButton = ({ datos }) => {

        const add = () => {

        }
        const edit = () => {

        }
        const deletechange = (e) => {


            alert("Hola Mundo")
        }

        return (
            <>

                <h5 className='bg-grid mt-1'>NEW CHANGE</h5>
                <hr />
                {datos.map((e, item) =>
                    <>
                        <div className='row' id={item}>

                            <div className='col-8 mt-1 d-flex align-items-center bg-light' >
                                <div className='d-flex'>
                                    <span className='ms-1' style={{ color: "rgb(88, 89, 90)", fontWeight: "600" }}>
                                        {e.d}
                                    </span>
                                    <div className='ps-3'>
                                        <i className=' fa-solid fa-arrow-left'></i>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mt-1 d-flex align-items-end bg-light rounded'>
                                <div className='d-flex gap-1  mt-2 mb-2'>
                                    <button onClick={add} className='btn btn-info p-2 pt-1 pb-1 align-items-center'>
                                        <i className='fa-solid fa-add'></i>
                                    </button>
                                    <button onClick={edit} className='btn btn-primary p-2 pt-1 pb-1'>
                                        <i className='fa-solid fa-edit'></i>
                                    </button>
                                    <button onClick={(e) => deletechange(e)} className='btn btn-danger p-2 pt-1 pb-1'>
                                        <i className='fa-solid fa-trash'></i>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </>
                )}

            </>
        )
    }

    return (

        <div className='d-flex mt-1 flex-column' >

            {nume == 1 ?
                < div className='row'>
                    <div className='col-12 d-flex justify-content-between'>

                        <DivBreadcrumb
                            e={"Jefe"}
                            p={"Subordinado"}
                            x={"Administrador"}
                        />


                    </div>

                    <Row>
                        <Col sm={12}>
                            <ListGroup as='ol' numbered >
                                {list.map((element) => <ListGroup.Item onClick={() => handleOpen(element)}
                                    as='li'
                                    className='d-flex justify-content-between align-items-start' href={element.href}>
                                    <div className='ms-2 me-auto'>
                                        <div className='fw-bold' >

                                            {element.cargo}
                                        </div>
                                        {element.description}
                                    </div>
                                    <Badge bg='primary' pill>
                                        14
                                    </Badge>

                                </ListGroup.Item>
                                )}
                                <ModalOpen />

                            </ListGroup>
                        </Col>
                    </Row>

                    <div className='col-12'>

                    </div>
                </div>
                :
                nume == 2 ?
                    <div className='row'>
                        < div className='row'>
                            <div className='col-12 d-flex justify-content-between'>
                                <div onClick={() => setopens(true)}>

                                    <DivBreadcrumb
                                        e={"Tools"}
                                        p={"Structure"}
                                        x={"Changelog"}
                                    />
                                </div>
                            </div>
                            <div className='col-12'>
                                {opens &&
                                    <Accordion bg="lingh" defaultActiveKey="">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className='d-flex'><span className='fas fa-envelope-open  p-1'></span>{[elem.list1[0].name]}</Accordion.Header>
                                            <Accordion.Body>
                                                {[elem.list1[0].ele][0].map((e, i) => <li className='nav-link ps-1 pb-1  li' key={i}>{e}</li>)}
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header className='d-flex'><span className='fas fa-calendar-day  p-1'></span>{[elem.list2[0].name]}</Accordion.Header>
                                            <Accordion.Body>
                                                {[elem.list2[0].ele][0].map((e, i) => <li className='nav-link ps-1 pb-1  li' key={i}>{e}</li>)}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header className='d-flex'><span className='fas fa-table  p-1'></span>{[elem.list3[0].name]}</Accordion.Header>
                                            <Accordion.Body>
                                                {[elem.list3[0].ele][0].map((e, i) => <li className='nav-link ps-1 pb-1  li' key={i}>{e}</li>)}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header className='d-flex'><span className='fas fa-fire p-1'></span>{[elem.list4[0].name]}</Accordion.Header>
                                            <Accordion.Body>
                                                {[elem.list4[0].ele][0].map((e, i) => <li className='nav-link ps-1 pb-1  li' key={i}>{e}</li>)}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header className='d-flex'><span className='fas fa-question-circle  p-1'></span>{[elem.list5[0].name]}</Accordion.Header>
                                            <Accordion.Body>
                                                {[elem.list5[0].ele][0].map((e, i) => <li className='nav-link ps-1 pb-1  li' key={i}>{e}</li>)}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header className='d-flex'><span className='fas fa-wrench p-1'></span><span>{[elem.list6[0].name]}</span></Accordion.Header>
                                            <Accordion.Body>
                                                {[elem.list6[0].ele][0].map((e, i) => <li className='nav-link ps-1 pb-1  li' key={i}>{e}</li>)}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>}
                            </div>

                        </div>

                    </div>
                    :
                    nume == 3 &&
                    <div className='row'>
                        <div onClick={() => setopens2(true)}>
                            <DivBreadcrumb
                                e={"Add All"}
                                p={"Change Permisos"}
                                x={"Delete Change"}
                            />
                        </div>
                        {opens2 &&
                            <DivButton
                                datos={datos.new} />
                        }
                    </div>

            }
        </div >

    )
}
