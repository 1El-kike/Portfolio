import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const LikeButton = () => {

    const Buttom = <button><FontAwesomeIcon icon={faHeart} /></button>

    return (
        <Buttom />
    )
}
