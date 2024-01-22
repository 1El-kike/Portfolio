
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/css/vuelos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faCommentAlt, faFileWord, faMagic, faNavicon, faPlane, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faCalendarTimes, faHeart } from '@fortawesome/free-regular-svg-icons'

export const Aside = () => {


    const LinkAside = ({ nombre, icono,link }) => {

        return (
            <>
                <div className='form-grup h5  mt-3 ' >
                    <Link className='input-grup d-flex gap-4 text-black hover' to={link}>

                        <FontAwesomeIcon className='text-secondary' icon={icono}></FontAwesomeIcon>
                        {nombre}
                    </Link>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='container'>
                <br />
                <div style={{ width: "290px", height: "100vh" }} className='flex-shrink-0 mb-4 rounded mt-4 bg-light p-3 vuelos'>

                    <div className='image-text d-flex'>
                        <span className='image d-flex gap-2 '>
                            <FontAwesomeIcon className='p-2 m-1 ' style={{ fontSize: "28px", background: "#cbcbcb", }} icon={faNavicon}></FontAwesomeIcon>
                            <h4 style={{ display: "flex", gap: '2px' }}><span className='bg-warning m-1 p-2'>K</span><span className='bg-warning m-1 p-2'>A</span><span className='bg-warning m-1 p-2'>Y</span><span className='bg-info m-1 p-2'>A</span><span className='bg-info m-1 p-2'>K</span></h4>
                        </span>

                    </div>
                    <div className='mt-3' style={{ borderTop: "1px solid #393838" }}>

                        <LinkAside
                            icono={faUserCircle}
                            nombre="Iniciar sesión"
                        />
                       
                        
                    </div>
                    <div className='mt-3' style={{ borderTop: "1px solid #393838" }}>

                        <LinkAside
                            icono={faPlane}
                            nombre="Vuelos"
                        />
                        <LinkAside
                            icono={faBed}
                            nombre="Alojamiento"
                        />
                        <LinkAside
                            icono={faCar}
                            nombre="Auto"
                        />
                        
                    </div>
                    <div className='mt-3' style={{ borderTop: "1px solid #393838" }}>

                        <LinkAside
                            icono={faFileWord}
                            nombre="Explore"
                        />
                        <LinkAside
                            icono={faBed}
                            nombre="Blog"
                        />
                        <LinkAside
                            icono={faCar}
                            nombre="Vuelos directos"
                        />
                         <LinkAside
                            icono={faCalendarTimes}
                            nombre="El mejor momento"
                        />
                        
                    </div>
                    <div className='mt-3' style={{ borderTop: "1px solid #393838" }}>

                        <LinkAside
                            icono={faCommentAlt}
                            nombre="Vuelos"
                        />
                       
                        
                    </div>
                    <div className='mt-3' style={{ borderTop: "1px solid #393838"}}>

                        <LinkAside
                            icono={faHeart}
                            nombre="Trips"
                        />
                       
                        
                    </div>

                    <div className='mt-3' style={{ borderTop: "1px solid #393838", borderBottom: "1px solid #ccc" }}>

                    <LinkAside
                            icono={faMagic}
                            nombre="KAYAK for Busin..."
                        />
                    </div>


                </div>
            </div >
        </>
    )
}
