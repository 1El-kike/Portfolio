import React, { useEffect, useState } from 'react'

export const Time = () => {

    const [time, settime] = useState(new Date().toLocaleTimeString());


    useEffect(() => {
        const timer = setInterval(() => {
            settime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [])


    return (
        <>{time}</>
    )
}
