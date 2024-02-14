import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

export const Pasaje = () => {

const Dpd =({title,item1,item2,item3})=>{

    return (
        <>
         <Dropdown className='ms-2 mt-4 mb-4'>
            <Dropdown.Toggle variant='light' id='dropdown-basic' className=''>
                {title}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href='#'>{item1}</Dropdown.Item>
                <Dropdown.Item href='#'>{item2}</Dropdown.Item>
                <Dropdown.Item href='#'>{item3}</Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
        </>
    )
}

const [change, setchange] = useState(true)

const botton_change =()=>{
    setchange(!change)
}

const Ida = ()=>{

    return(
        <>
        <div style={{width:'200px'}} className='col-lg-2 m-1 bg-secondary '>s</div>
        </>
    )
}

const Vuelta = ()=>{

    return(
        <>
        <div style={{width:'200px'}} className='col-lg-2 m-1 bg-secondary '>y</div>
        </>
    )
}

const Change =()=>{

    return(
        <>
        <div  style={{width:'50px'}} className='col-lg-1 m-1 '>
            <button onClick={botton_change} className='btn btn-secondary'>
                <i className='fas fa-user'></i>
            </button>
        </div>
        </>
    )
}
  return (
    <>
   
    <div className='d-flex flex-column'>

      <div className='d-flex justify-content-start gap-1'>
        <Dpd
        title={'Ida y vuelta'}
        item1={''}
        item2={''}
        item3={''}
        />
        <Dpd
        title={'Ida y vuelta'}
        item1={''}
        item2={''}
        item3={''}
        />
        <Dpd
        title={'Ida y vuelta'}
        item1={''}
        item2={''}
        item3={''}
        />
        </div>  

<div className='d-flex flex-wrap '>
{ change === true ?
    <>
    <Ida/>
    <Change/>
    <Vuelta/>
    </>
    :
    <>
   <Vuelta/>
    <Change/>
   <Ida/>
    </>

}
    <div  style={{width:'200px'}}className='col-lg-2 m-1 bg-secondary'>s</div>
    <div style={{width:'200px'}} className='col-lg-2 m-1 bg-secondary'>s</div>
    <div style={{width:'50px'}}className='col-lg-1 m-1 bg-secondary'>s</div>
</div>
    
</div>
    </>
  )
}
