import React, { memo, useState } from 'react'
import { Card, Nav } from 'react-bootstrap'
import { CardEdixt } from '../Pagina_Principal/Aside/estilosAside'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

export const CardEdixts = memo(({ link, adress = "#", title, texto }) => {

    const [l1, l2, l3, l4] = link;
    const [a1, a2, a3, a4] = adress;
    const [t1, t2, t3, t4] = title;
    // const [tx1, tx2, tx3, tx4] = texto;
    const defaults = "Add"

    const [adret, setadret] = useState(defaults)
    const [opens, setopens] = useState(false)

    const functionlink = (title) => {
        setadret(title)

    }

    const open = () => {
        setopens(true)

    }

    return (
        <>
            <CardEdixt className='mt-3' text="dark">
                <Card.Header className='justify-content-center d-flex menu_lateral_form'>
                    <Nav variant="pills /* tabs */" defaultActiveKey="#first">
                        <Nav.Item  >
                            <Nav.Link key={1} onClick={() => functionlink(t1)} className='' href={a1}>
                                {l1}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link key={2} onClick={() => functionlink(t2)} className='bg-length' href={a2}>
                                {l2}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link key={3} onClick={() => functionlink(t3)} className='bg-length' href={a3}>
                                {l3}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link key={3} onClick={() => functionlink(t4)} className='bg-length' href={a4}>
                                {l4}
                            </Nav.Link>
                        </Nav.Item>


                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title onClick={() => open()}> {adret} </Card.Title>
                    <Card.Text >

                        {/*   {opens === true && tex} */}
                        {opens === true && texto}
                    </Card.Text>
                </Card.Body>
            </CardEdixt >
        </>
    )
})
