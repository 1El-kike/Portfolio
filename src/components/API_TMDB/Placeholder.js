import React from 'react'
import { Placeholder, Spinner } from 'react-bootstrap'
import { DivElemPlayer, DivButton } from './Api'

export const Placeholders = () => {
    return (
        <DivElemPlayer >

            <Placeholder className='justify-content-center d-flex' animation='glow' style={{ gridColumn: "span 3", }}>
                <Placeholder xs={6} />
            </Placeholder>

            <div style={{ display: "grid", gridColumn: "span 3", margin: "auto", borderRadius: "6px", background: 'rgb(86, 86, 88)', opacity: "0.5" }}>
                <div className='justify-content-center align-items-center d-flex' style={{ width: '300px', gridColumn: "span 3", height: '400px' }}>
                    <Spinner style={{ width: "80px", height: "80px", }}
                        animation='grow' role='status' variant='info' size='lg'
                        className='d-flex justify-conten-center align-items-center' > {/* animaciones = grow y border*/}
                        <span className='visually-hidden'>Loading...</span>
                    </Spinner >
                </div>
            </div>

            <Placeholder animation='glow' style={{ gridColumn: "span 3", }}>
                <Placeholder lg={4} />
                <Placeholder lg={10} />
                <Placeholder lg={12} />
            </Placeholder>


            <DivButton>
                <Spinner />
            </DivButton>

        </DivElemPlayer >

    )
}
