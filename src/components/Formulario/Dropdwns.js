import React from 'react'
import { Dropdown } from 'react-bootstrap'

export const Dropdwns = () => {
    return (
        <Dropdown className='mb-4'>
            <Dropdown.Toggle variant='black' id='dropdown-basic'>
                Administrator
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href='#'>Supervisor</Dropdown.Item>
                <Dropdown.Item href='#'>Manager</Dropdown.Item>
                <Dropdown.Item href='#'>Supervisor else</Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
    )
}
