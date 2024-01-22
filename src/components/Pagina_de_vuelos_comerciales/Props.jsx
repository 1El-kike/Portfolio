
import 'bootstrap/dist/css/bootstrap.min.css'
import { Aside } from './Aside.jsx'
import {Section} from './Section.js'

export const Props = () => {


    return (
        <>

        <div className='container rounded'>

            <div className='d-flex rounded'>
<div className=' col-lg-12 d-flex'>

    <div style={{border:'1px solid #ccc '}} className='col-lg-3 bg-light rounded m-2'>
            <Aside />

    </div>
            <div  style={{border:'1px solid #ccc '}}className=' rounded bg-light m-2 col-lg-9'>
           <Section/>
            </div>


</div>
            </div>
        </div>
        </>
    )
}
