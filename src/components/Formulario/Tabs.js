import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import 'bootstrap/dist/js/bootstrap'

export const TabsTitle = ({ cantidad, onClick, setvalor }) => {

    const [key, setkey] = useState("home")
    const [res, setres] = useState()
    const [valoractual, setvaloractual] = useState()

    const respuesta = (e) => {
        if (e.target.tagName === "BUTTON") {
            setres(e.target.attributes[3].nodeValue)
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const def = () => {
        setvaloractual(res)
        setvalor(valoractual)
    }

    useEffect(() => {
        def()
    }, [def])

    return (
        <>
            <div className='d-flex flex-column '>

                <Tabs
                    id='controlled-tab-example'
                    activeKey={key}
                    onSelect={(k) => setkey(k)}
                    className='mb-3 justify-content-start rounded  '
                    justify
                    onClick={(e) => {
                        respuesta(e)
                    }}
                >
                    {cantidad?.map((element, item) => <Tab className='rounded' onClick={onClick(element.content)} id={item} eventKey={element.id} title={element.name}>{element.content} </Tab>)}

                </Tabs >
                <hr />
            </div>

        </>
    )
}
