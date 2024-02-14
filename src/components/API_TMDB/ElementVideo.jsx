import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCommentSms, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { P, DivElemPlayer, Titulo, DivButton, Bottom, icono } from './Api'




export const ElementVideo = ({ tituloPlayer, id, textPlayer, imagen }) => {


    const [contador, setcontador] = useState(0)

    const contar = () => {
        setcontador(contador + 1);


    }

    const [comment, setcomment] = useState(0)
    const comentario = () => {
        setcomment(comment + 1)
        console.log("contador 1")
    }





    return (

        <>
            <DivElemPlayer >
                <Titulo>{tituloPlayer}</Titulo>


                <Link to={`/about/${id}`} style={{ display: "grid", gridColumn: "span 3", margin: "auto", borderRadius: "6px" }} >

                    <img
                        src={imagen}
                        alt='no se encuentra'
                        width='90%'
                        height='400px'
                    ></img></Link>



                <P>{textPlayer}</P>
                <DivButton>
                    <Bottom role='button'><FontAwesomeIcon style={icono.blue}
                        icon={faCommentSms} onClick={comentario} /><span>{comment}</span></Bottom>
                    <Bottom role='button'><FontAwesomeIcon style={{ fontSize: '29px', color: "red" }}
                        icon={faHeart} onClick={contar} />{contador}</Bottom>
                    <Bottom role='button'><FontAwesomeIcon
                        style={icono.red}
                        icon={faPlay} /><span style={icono.span}>Player</span></Bottom>
                </DivButton>

            </DivElemPlayer >
        </>
    )
}
