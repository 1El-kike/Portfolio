import React from 'react'
import { useState, useEffect } from 'react'



export const Children = ({ endpoint }) => {

    const [isLoading, setisLoading] = useState(true)

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [endpoint])

    const fetchdata = async () => {




        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
            const data = await response.json()
            console.log(data)
            setdata(data)
            setisLoading(false)

        } catch (error) {
            console.error(error)
        }
    }






    return (
        <div>
            <ul>
                {isLoading ? <p>...loading</p> :
                    endpoint === 'users' ? data.map(item => <li key={item.id}>{item.name}</li>)
                        : data.map(item => <li key={item.id}>{item.body}</li>)}
            </ul>

        </div>
    )
}
