/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react'
import image from '../../assets/images/portafolio.jpg'
import image2 from '../../assets/images/mejora-tu-presencia-online-768x432.jpg'
import image3 from '../../assets/images/imagen-destacada_diseno-web.jpg'
import image4 from '../../assets/images/beautiful-15728_640.jpg'
import image5 from '../../assets/images/hq720.jpg'
import image6 from '../../assets/images/thumb-1920-1162236.jpg'
import imagex from '../../assets/images/HD-wallpaper-technology-msi.jpg'
import { MDBIcon, MDBBtn} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'
import './style.css'
import { Card, CardGroup } from 'react-bootstrap'


export const Firstsession = () => {

const Button =({buttons,ico,href='#'})=>{
    return (
        <>
        <Link to={href}>
        <button className='btn mt-3 btn-outline-info rounded-pill btn-lg'>
            <div className='d-flex flex-direction-around but gap-3 justify-content-center align-items-center'>
            <span className=''>{buttons} </span>
            <span className=' ps-3'>
            </span>
            <span className='butarrow bg-info'>
            <i className={`fas ${ico} text-black ml-auto`}></i>
            </span>
            </div>
            </button>     
        </Link>
        </>
    )
}
const Title =({background,titulo,subtitulo,link})=>{

    return (
        <>
        <div  className='col-md-12 col-sm-12 d-flex' id={link}>
          <div className='justify-content-center align-items-center d-flex col-12 '>
            <div className='position-relative alt '>
              <h1 className='display-2 text position-absolute top-0'>{background}</h1>            
              <h1 className='display-6 text2 text-light d-flex gap-1 pos position-absolute w-100'>
              {titulo}
              <span className='text-success'>{subtitulo}</span></h1>
            </div>
          </div>
        </div>   
        </>
    )
}
const Section = ({childrend,id})=>{

    return (
        <>
        <div className='col-md-12 d-flex mt-5 mb-5 flex-column text-light' id={id}>
        {childrend}
        </div>
        </>
    )
}
const Cuadro =({num,text})=>{
    return (
        <>
        <div className=' cuadro col-5  mt-2 mb-2'>
            <div className='d-flex'>
            <h2 className='text text-warning display-1 ps-2'>{num}</h2>
<span className='top-5 mt-1 ms-2 text text-warning display-6'>+</span>
            </div>
            <div className='d-flex justify-content-between'> <span className='raya'></span><p className='margen text-light'>{text}</p></div>
        </div>
        </>
    )
}
const Progres =()=>{

const [list] = useState({
    list:{
        lengug:[['HTML',65,'43f94a'],
        ['CSS',70,'2ccde9'],
        ['JAVASCRIPT',85,'fb297b'],
        ['REACT',80,'ffe047'],
        ['NODE JS',60,'fff'],
        ['MYSQL',78,'ab24ec'],
        ['BOOTSTRAP',80,'f16428'],
        ['PYTHON',55,'f82c14']],
   },  
})


    return (
        <>
        {list.list.lengug?.map((ele,item)=>{

          

            return (
                <>
                
                <div className='col-md-6 col-lg-3 ml-0 mt-3 mb-3 flex-wrap'>

                <div className={'progress-circle'} style={{'--clr':`#${ele[2]}`,'--i':`${ele[1]}`}}>
                <div className='progress-value' role='progressbar'  aria-valuenow='75' aria-valuemin='0'>{ele[1]+'%'}</div>
                <div className='texto'>{ele[0]}</div>
                </div>

                </div>
                </>
            )
        })}
        
        </>
    )
}
const Experence =()=>{


/* Para cambiar mi informacion de EXPERIENCE & EDUCATION */
const [fisrtele, ] = useState({
    list:{
        exp1:[['WEB DEVELOPER ','ENVATO','Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore  adipisicing elit','2022 - PRESENTE',],
        ['UI/UX DESIGNER ','THEMEFOREST','Lorem incididunt sit amet, consectetur eiusmod dunt doidunt dot elit, tempor incididunt','2020-2023',],    
        ['CONSULTANT ','ENVATO','Lorem ipsum dolor sit amet,tempor incididunt ut laboreconsectetur elit  sed do eismed tempor dunt','2018-2023',]],

        exp2:[['ENGINEERING ','OXFORD UNIVERSITY','Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit','2022',],
        ['MASTER DEGREE ','KIEV UNIVERSITY','Lorem incididunt sit amet, consectetur eiusmod dunt doidunt dot elit, tempor incididunt','2023',],    
        ['BACHELOR  ','TUNIS HIGH ACKOOL','Lorem ipsum dolor sit amet,tempor incididunt ut laboreconsectetur elit  sed do eismed tempor dunt','2021',]],
   },  
})
/* componente de EXPERIENCE & EDUCATION */
const handlelist =(e)=>{


return (
<>
    {e?.map((ele,item)=>{
        return (
 <>
 <ul className='nav mb-3'  key={item}>
    <li className='' key={item}>
       <div className='d-flex'>
         <div className='d-flex flex-column'><i className='fas fa-briefcase rounded-pill bg-warning p-3 m-1'></i>
                <span className='borders'></span>
            </div>
            
             <div className='d-flex flex-column justify-content-start '>
                <div className='d-flex w-auto'>
                    <p className='m-2 ms-3 mt-1 p-1 ps-3 px-3 rounded w-2' style={{background:'rgb(19, 44, 57)'}}>{ele[3]}</p>
                     </div>
                        <div className='d-flex align-items-center gap-1'>
                          <h3 className='m-2 ms-3'>{ele[0]}</h3>
                          <span className='raya'></span>
                           <h6 className='m-2 ms-3'>{ele[1]}</h6>

                        </div>
                        <p className='m-2 ms-3'>{ele[2]}</p>
                    </div>
                </div>
            </li>
       </ul>
</>
        )
                        
      }
)}
</>
        )}

    return(
        <>
        <div className='col-md-12 col-lg-6 col-sm-12'>

{handlelist(fisrtele.list.exp1)}

        </div>
        <div className='col-md-12 col-lg-6 col-sm-12 '>
            
        {handlelist(fisrtele.list.exp2)}
        </div>
        </>
    )
}

const Lista = ({titulo,ico,adress})=>{

    return (
        <>
        <div className='d-flex gap-2'>
<span>
<i className={`fas ${ico} text-warning display-5`}></i>
</span>
<div className='d-flex mx-2 flex-column justify-content-start '>
<h5>{titulo}</h5>
<p className='h6'>{adress}</p>

</div>
        </div>
        </>
    )
}

const [images,setimage] = useState('set1')
const [port] = useState({
    set1:[imagex,image6,image5,image4,imagex,image2],
    set2:[image6,image2,image4,imagex,image5,image3],
    set3:[ image3,image4,image2,imagex,image5,image6],
    set4:[ image6,image4,imagex,image2,image3,image5],
    set5:[image4,image6,image3,image5,image2,imagex]
})

const Portafolio =()=>{


    return (
        <>
    {port[images]?.map(
        (e,i)=>{

            const id = parseInt(i)
            return(
                <>
    <div
    style={{overflow:'hidden',width:'400px',height:'300px'}}
    className='bg-info d-flex rounded justify-content-center align-items-center col-lg-3 col-md-6 hover' >


             <Link to={'/ima:'+id } >
                <img className='image' src={e} alt=''></img>  
                </Link>
    </div>
                </>
            )
        }
    )}

        </>
                
    )
}

const [port2] = useState({
    set1:[[imagex,
        'How to own Your Audience by Creating an Email List',
        'Lorem ipsum dolor sit armet, consetetur sadipscing elit,sed diam nonumy eirmod tempor inviduant lat labore...'
    ],[image6,
        'How to own Your Audience by Creating an Email List',
        'Lorem ipsum dolor sit armet, consetetur sadipscing elit,sed diam nonumy eirmod tempor inviduant lat labore...'
    ],[image3,
        'How to own Your Audience by Creating an Email List',
        'Lorem ipsum dolor sit armet, consetetur sadipscing elit,sed diam nonumy eirmod tempor inviduant lat labore...'
    ],[image5,
        'How to own Your Audience by Creating an Email List',
        'Lorem ipsum dolor sit armet, consetetur sadipscing elit,sed diam nonumy eirmod tempor inviduant lat labore...'
    ],[imagex,
        'How to own Your Audience by Creating an Email List',
        'Lorem ipsum dolor sit armet, consetetur sadipscing elit,sed diam nonumy eirmod tempor inviduant lat labore...'
    ],[image2,
        'How to own Your Audience by Creating an Email List',
        'Lorem ipsum dolor sit armet, consetetur sadipscing elit,sed diam nonumy eirmod tempor inviduant lat labore...'
    ]],
    
})
const CardElement = ()=>{
    return (
        <>
         {port2.set1?.map( (e,i)=>{

           
return  <CardGroup className='col-lg-4 col-md-6 col-sm-12 ps-4 pb-4'>
      <Card bg='dark'>
      <Card.Img variant="top" 
                  src={e[0]} />
                  <Card.Body className='top'>
                  <Card.Title className='text-light'>{e[1]}</Card.Title>
                  
              </Card.Body>
              <Card.Footer>
                  <small className="text-muted">{[e[2]]}</small>
              </Card.Footer>
      </Card>
  </CardGroup>
              }
 )}
        
        </>
    )
}

const Web =()=>{
    return (
        <>
        
        <div className='col-md-11 col-sm-12 d-flex flex-column text-light ' id='lista1'>

<div className=' d-flex flex-wrap flex-reverse '>

        <div className='col-md-12  col-sm-12 col-lg-5 mt-5'>   
           <div className='img1'>
            <div className='espensy'>
             <img src={image} className='fondo' alt='no se encuentra'></img>
            </div>    
            </div>
        </div>

<div className=' col-md-12 col-sm-12 col-lg-7 flex-wrap d-flex ' >
    <div className='col-md-11 d-flex   flex-column justify-content-center align-items-start mt-5 mb-0'>
        <div className='d-flex flex-column '>
            <div className='d-flex gap-4  justify-content-center '>
            <span className='raya mt-auto ms-auto mb-auto'></span>
            <h1 className='text-warning display-3 text-fondo'>I'M Enrique Grass.</h1>
     </div>
        <h2 className='text-light mx-auto d-flex text-fondo display-4'>WEB DEVELOP</h2>
        </div>
<p className=' inline ps-3  mt-4 col-md-10 text-fondo h-4'>
    Graduado de Ingeniero Informatico, un apasionado al desarrollo & diseño web, expecializado como desarrollador Front-End Junior
       .Me gustaria contribuir y ganar experiencia en todo lo que pueda para ser de este gran mundo digital una mejor opcion. Espero ser de buena
     ayuda y lograr cumplir con las expectativas para asi ganar una mejor superación profecionalmente.</p>
        <div>
        </div>
</div>

     <Button
     buttons='MORE ABOUT ME'
     ico='fa-arrow-right'
     href='/'
     />

    </div>    
</div>
  </div>
        </>
    )
}
const Web2=()=>{

     return (
        <>
        
<div className='d-flex  flex-wrap justify-content-center col-md-12 col-lg-12 col-lg-11 col-sm-12'>
 <div className='col-md-12 col-lg-6'>
    <div className='ms-4  col-lg-12 d-flex flex-column '>
        <h2 className='text-light'>PERSONAL INFOS</h2>
        <div className='d-flex justify-content-around'>
        <div className='col-lg-6 d-flex flex-column gap-1  mt-4'>
            <p className='text-secondary'>First Name: <b className='text-light'>Enrique</b> </p>
            <p className='text-secondary'>Nationality: <b className='text-light'>Cuba</b> </p>
            <p className='text-secondary'>Address: <b className='text-light'>La Habana</b> </p>
            <p className='text-secondary'>Email: <b className='text-light'>enriquegrassporras@gmail.com</b> </p>
            <p className='text-secondary'>Langages: <b className='text-light'>English,Españoñ</b> </p>
        </div>
        <div className='col-lg-6 d-flex flex-column gap-1 mt-4'>
            <p className='text-secondary'>Last Name: <b className='text-light'>Grass</b> </p>
            <p className='text-secondary'>Age: <b className='text-light'>25 Years</b> </p>
            <p className='text-secondary'>Freelance: <b className='text-light'>Available</b> </p>
            <p className='text-secondary'>Phone: <b className='text-light'>+53 58428530</b> </p>
            <p className='text-secondary'>Skype: <b className='text-light'>grass.@porras</b> </p>
        </div>
         </div>
        <div className='col-3S mt-2'>
        <Button
        buttons='DOWNLOAD CV'
        ico='fa-download'
          />
        </div>
    </div>
</div>
<div className='position-relative'>
<div className='image2-fondo'>

</div>
</div>

<div className='col-md-6 d-flex flex-wrap gap-4 mt-2'>
<Cuadro
num='2'
text='YEARS OF EXPERENCE'
/>
<Cuadro
num='81'
text='HAPPY 
      CUSTOMERS'
/>
<Cuadro
num='97'
text='COMPLETED 
      PROJECTS'
/>
<Cuadro
num='53'
text='AWARDS
      WOW'
/>
    </div>  
    </div>
        </>
     )
}
const Web3 =()=>{
     return (
        <>
        <div className='col-md-11 col-sm-12'>

 <div className='col-md-12 justify-content-center d-flex'>
        <h3>MY SKILLS</h3>
    </div>

    <div style={{marginLeft:'95px'}} className='d-flex col-md-12 mb-5 mt-5 d-flex flex-wrap'>
        <Progres/> 
    </div>
</div>
        </>
     )
}
const Web4 =()=>{
    return (
        <>
        <div className='col-lg-11 col-md-12'>

        <div className='col-md-12 justify-content-center d-flex'>
        <h3>EXPERIENCE & EDUCATION</h3>
    </div>
    <div style={{marginLeft:'25px'}} className='d-flex col-md-12 mb-5 mt-5 d-flex flex-wrap'>
        <Experence/> 
    </div>   
    </div>
       </>
    )
}
const Web5 =()=>{
    
    return (
       <>
       <div className='col-lg-12 mb-5 col-md-12' > 
       
<nav className='col-12 d-flex justify-content-center align-items-center'>
    <ul  className='nav gap-5' >
        <li className='nav-item my-li ' onClick={()=> setimage('set1')}>ALL</li>
        <li className='nav-item my-li' onClick={()=> setimage('set2')}>LOGO</li>
        <li className='nav-item my-li ' onClick={()=> setimage('set3')}>VIDEO</li>
        <li className='nav-item my-li'onClick={()=> setimage('set4')}>GRAPHISC</li>
        <li className='nav-item my-li'onClick={()=> setimage('set5')}>MOCKUP</li>
    </ul>
</nav>
<div style={{marginRight:'60px'}}>
    <div className='col-lg-12 gap-3 mt-5 mb-5 d-flex flex-wrap justify-content-center align-items-center '>      
  <Portafolio/>           
    </div>
    
</div>
       
        </div>
       </>
    )
}
const Web6 =()=>{

    
    return(
        <>
        <div className='d-flex  col-12 flex-wrap '>
        <div className='d-flex flex-column col-lg-4 col-md-6 col-sm-12 '>
        <div className='d-flex flex-column flex-wrap gap-2'>
        <h3>DONT'BE SHY !</h3>
        <p>Feel free to get in touch with me.I am alwasy open to <br/> discussing new projects, creative ideas or opportunities to<br/> be part of 
            your visions
        </p>
        <Lista
        titulo={'ADDRESS POINT'}
        ico={'fa-map'}
        adress={'calle 206 e/  26 y 27a, Habana City ,Cuba'}
        />
        <Lista
        titulo={'MAIL ME'}
        ico={'fa-envelope'}
        adress={'enriquegrassporras@gmail.com'}
        />
        <Lista
        titulo={'ADDRESS POINT'}
        ico={'fa-bank'}
        adress={'+53 58428530'}
        />
        </div>
        <div className='mt-4 mb-4'> 
        <MDBBtn
          floating
         className='m-1'
         style={{ backgroundColor: '#3b5998' }}
                    href='https://www.facebook.com/Enrique_Grass_Porras'
                         role='button'
                        >
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='m-1 '
                            style={{ backgroundColor: '#55acee' }}
                            href=''
                            role='button'
                        >
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#dd4b39' }}
                            href='https:/www.youtube.com/'
                            role='button'
                        >
                            <MDBIcon fab icon='youtube' />
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='m-1 '
                            style={{ backgroundColor: '#e7960a' }}
                            href='https:/www.linkedin.com/'
                            role=''
                        >
                            <MDBIcon fab icon='linkedin' />
                        </MDBBtn>
     
        </div>
        </div>
        <div className='d-flex flex-column  col-lg-8 col-md-6 col-sm-12'>
            <form className='form-grup  col-lg-11 col-md-12'>
                <div  className='d-flex gap-4 flex-wrap justify-content-between ' >
                <div  className='col-lg-5 col-md-12 col-sm-12 ' >
               <input className='form-control input-round input ' key={"input"} placeholder='YOUR NAME' type='text'/>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 ' >
               <input   className='form-control input-round input ' key={"input"} placeholder='YOUR EMAIL' type='text'/>
                </div>   
                </div>
               <div className='d-flex col-12 mt-4 justify-content-start '>
            <div  className='col-12 ' >
               <input className='form-control input-round  input' key={"input"} placeholder='YOUR SUBJECT' type='text'/>
                </div>
                </div>
                <div className='d-flex col-12 mt-4 justify-content-start'>
            <div  className='col-12' >
               <textarea className='form-control input-round textarea mb-4 input' key={"input"} placeholder='YOUR MESSAGE' type='month'>
               </textarea>
                </div>

                </div>
                
                <Button
                 buttons='SEND MESSAGE'
                  ico='fa-user'
                   href='#'
     />
            </form>
        </div>
        </div>
        </>
    )
}
const Web7 = ()=>{

    return (
        <>
        <div className='col-lg-11 ms-4'>
            <div className='d-flex flex-wrap'>

       <CardElement/>
            </div>

        </div>
        </>
    )
}

const [iscroll, setiscroll] = useState(false)

useEffect(() => {

    const scroll =()=>{

        const rect = document.getElementById("miscroll").getBoundingClientRect();
        setiscroll(rect.top >= window.innerHeight / 2);
        
    };

    window.addEventListener('scroll',scroll);
    
    return () => {
    window.removeEventListener('scroll',scroll)
  }
}, []);



  return (
    <>
    <div style={{top:'-100px'}} className='m-0 position-relative p-0 col-12'>
    <div className='image-fondo'></div>
   </div>
   
    <div className='container '>
<div className='row'  data-bs-target="navbar" data-bs-smooth-croll="true" tabindex="0">
    
   
    <Section id={'lista1'} childrend={<Web/>} ></Section>

    <Title 
    background={'RESUME'}
    titulo={'ABOUT'}
    subtitulo={'ME'}
    link={'lista2'}
    />

   <Section  childrend={<Web2/>}></Section>

    <Section  childrend={<Web3/>}></Section>

    <Section childrend={<Web4/>}></Section>

    <Title
    background={'WORKS'}
    titulo={'MY'}
    subtitulo={'PORTFOLIO'}
    link={'lista3'}
/>
    <Section childrend={<Web5/>}></Section>

    <Title 
    background={'CONTACT'}
    titulo={'GET IN'}
    subtitulo={'TOUCH'}
    link={'lista4'}
    />

    <Section childrend={<Web6/>}></Section>


    <Title 
    background={'POOTS'}
    titulo={'MY'}
    subtitulo={'BLOG'}
    link={'lista5'}
    />

<Section childrend={<Web7/>}></Section>




<div className='col-md-2'>

    <nav className='fixed-navbar dnone' id='miscroll'>
<ul className='nav nav-pills  d-flex flex-column justify-content-center align-items-center gap-2 h-100'>
    <li className=''  > <a href='#lista1' className={`nav-link fixed-navbar-item rounded-circle p-3 text-light`}><i className='fas fa-home '></i></a></li>
    <li className=''><a href='#lista2' className={`nav-link fixed-navbar-item rounded-circle p-3 fas fa-user text-light`}></a></li>
    <li className=''><a href='#lista3' className={`nav-link fixed-navbar-item rounded-circle p-3  fas fa-address-card text-light`}></a></li>
    <li className=''><a href='#lista4' className={`nav-link fixed-navbar-item rounded-circle p-3  fas fa-at text-light`}></a></li>
    <li className=''><a href='#lista5' className={`nav-link fixed-navbar-item rounded-circle p-3  fas item fa-calendar-times text-light`}></a></li>
</ul>
    </nav>
</div>
    </div >
    
    </div>
    </>
  )
}
