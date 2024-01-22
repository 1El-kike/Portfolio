import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Ventana } from './ventana';
import datojson from "../text/text.json"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import image from '../assets/images/87f2ec93e7e4d9b4a9331a8b7042fae1.jpg'
import image2 from '../assets/images/David.jpg'
import image3 from '../assets/images/12-tips-every-it-guy-should-know-man-with-laptop-11562889285hwldim1kbf.png'



export const TablaMes = () => {

    const [boton1, setboton1] = useState(false)
    const [boton2, setboton2] = useState(false)
    const [boton3, setboton3] = useState(false)


    const changebutton3 = () => {
        setboton3(!boton3)
        setboton2(false)
        setboton1(false)
    }
    const changebutton = () => {
        setboton1(!boton1)
        setboton2(false)
        setboton3(false)

    }
    const changebutton2 = () => {
        setboton2(!boton2)
        setboton1(false)
        setboton3(false)
    }

    /*   const [data, setdata] = useState([])
  
      useEffect(() => {
          try {
              fetch(datojson)
                  .then(response => response.json())
                  .then((data) => setdata(data))
                  .catch(error => console.error('Error'))
              console.log(data.Adultos)
          } catch (error) {
  
          }
  
  
      }, [data]) */

    const Modalpropio = ({ img, id, linea, sublinea }) => {


        return (
            <>
                {datojson.Adultos?.map(e => {



                    return <div className='list-group'>


                        <Link key={id} to='#' className='list-group-item list-group-item-action d-flex gap-3 py-1'>
                            <img width={32} height={32} alt='Cargando...' className='rounded-circle flex-shrink-0 mb-auto mt-auto ' src={img}></img>

                            <div className='d-flex gap-2 w-100 justify-content-between'>
                                <div>
                                    <p className='mb-0'>{e.economica[0]}</p>
                                    <p className='mb-0 opacity-75'>{e.vuelo}</p>
                                </div>
                                <div>
                                    <small className='opacity-50 text-nowrap'>now</small>

                                </div>
                            </div></Link >
                    </div >

                })
                }
            </>
        )
    }

    return (
        <>
            <div className='container text-info'>

                <h2 className='mt-3'>Plan de trabajos...</h2>
                <hr></hr>
                <div className='d-flex gap-3 justify-content-start'>
                    <button className='btn btn-info' onClick={changebutton}>Mes Cumplido <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></button>
                    {boton1 && <Ventana ancho={200} largo={300} arriba={205} izq_der={100}>
                        <Modalpropio
                            img={image}
                            linea={datojson.Adultos.economica} />
                    </Ventana>}
                    <button className='btn btn-info' onClick={changebutton2}>Mes Actual <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></button>
                    {boton2 && <Ventana ancho={200} largo={300} arriba={205} izq_der={250}>
                        <Modalpropio
                            img={image2} />
                    </Ventana>}
                    <button className='btn btn-info' onClick={changebutton3}>Mes proximo <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></button>
                    {boton3 && <Ventana ancho={200} largo={300} arriba={205} izq_der={370}>
                        <Modalpropio
                            img={image3} />
                    </Ventana>}
                </div>
            </div>

        </>
    )
}
