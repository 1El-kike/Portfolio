import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin: 40px 20px 10px 0;
    
    color:black;
    border-radius: 5px;

`


export const Blog = () => {

    const texto1 = `La imagen se llama fondo.jpg y suponemos que se encuentra en el mismo directorio que la
    página. En este caso se colocaría la siguiente etiqueta
    Es importante tener claro todo ello puesto que en función de vuestros objetivos puede que, más
    que aprender HTML, resulte más interesante aprender el uso de una aplicación para la creación de
    páginas.<br></br>Así pues, una página es un archivo donde está contenido el código HTML en forma de texto. Estos
    archivos tienen extensión .html o .htm (es indiferente cuál utilizar). De modo que cuando
    programemos en HTML lo haremos con un editor de textos y guardaremos nuestros trabajos con
    extensión .html, por ejemplo mipágina.html. 
    HTML es el lenguaje con el que se escriben las páginas web. Las páginas web pueden ser
    vistas por el usuario mediante un tipo de aplicación llamada navegador. Podemos decir por lo
    tanto que el HTML es el lenguaje usado por los navegadores para mostrar las páginas webs al
    usuario, siendo hoy en día la interface más extendida en la red.
    Este lenguaje nos permite aglutinar textos, sonidos e imágenes y combinarlos a nuestro gusto.
    Además, y es aquí donde reside su ventaja con respecto a libros o revistas, el HTML nos permite
    la introducción de referencias a otras páginas por medio de los enlaces hipertexto.
    El HTML se creó en un principio con objetivos divulgativos. No se pensó que la web llegara a ser
    un área de ocio con carácter multimedia, de modo que, el HTML se creó sin dar respuesta a todos
    los posibles usos que se le iba a dar y a todos los colectivos de gente que lo utilizarían en un
    futuro. Sin embargo, pese a esta deficiente planificación, si que se han ido incorporando
    modificaciones con el tiempo, estos son los estándares del HTML. Numerosos estándares se han
    presentado ya. El HTML 4.01 es el último estándar a septiembre de 2001.
    Esta evolución tan anárquica del HTML ha supuesto toda una seria de inconvenientes y
    deficiencias que han debido ser superados con la introducción de otras tecnologías accesorias
    capaces de organizar, optimizar y automatizar el funcionamiento de las webs. Ejemplos que
    pueden sonaros son las CSS, JavaScript u otros. Veremos más adelante en qué consisten algunas
    de ellas.`;

    const texto2 = `La imagen se llama fondo.jpg y suponemos que se encuentra en el mismo directorio que la
    página. En este caso se colocaría la siguiente etiqueta
    Es importante tener claro todo ello puesto que en función de vuestros objetivos puede que, más
    que aprender HTML, resulte más interesante aprender el uso de una aplicación para la creación de
    páginas.<br></br>Así pues, una página es un archivo donde está contenido el código HTML en forma de texto. Estos
    archivos tienen extensión .html o .htm (es indiferente cuál utilizar). De modo que cuando
    programemos en HTML lo haremos con un editor de textos y guardaremos nuestros trabajos con
    extensión .html, por ejemplo mipágina.html. 
    HTML es el lenguaje con el que se escriben las páginas web. Las páginas web pueden ser
    vistas por el usuario mediante un tipo de aplicación llamada navegador. Podemos decir por lo
    tanto que el HTML es el lenguaje usado por los navegadores para mostrar las páginas webs al
    usuario, siendo hoy en día la interface más extendida en la red.
    Este lenguaje nos permite aglutinar textos, sonidos e imágenes y combinarlos a nuestro gusto.
    Además, y es aquí donde reside su ventaja con respecto a libros o revistas, el HTML nos permite
    la introducción de referencias a otras páginas por medio de los enlaces hipertexto.
    El HTML se creó en un principio con objetivos divulgativos. No se pensó que la web llegara a ser
    un área de ocio con carácter multimedia, de modo que, el HTML se creó sin dar respuesta a todos
    los posibles usos que se le iba a dar y a todos los colectivos de gente que lo utilizarían en un
    futuro. Sin embargo, pese a esta deficiente planificación, si que se han ido incorporando
    modificaciones con el tiempo, estos son los estándares del HTML. Numerosos estándares se han
    presentado ya. El HTML 4.01 es el último estándar a septiembre de 2001.
    Esta evolución tan anárquica del HTML ha supuesto toda una seria de inconvenientes y
    deficiencias que han debido ser superados con la introducción de otras tecnologías accesorias
    capaces de organizar, optimizar y automatizar el funcionamiento de las webs. Ejemplos que
    pueden sonaros son las CSS, JavaScript u otros. Veremos más adelante en qué consisten algunas
    de ellas`;
    const texto3 = `La imagen se llama fondo.jpg y suponemos que se encuentra en el mismo directorio que la
    página. En este caso se colocaría la siguiente etiqueta
    Es importante tener claro todo ello puesto que en función de vuestros objetivos puede que, más
    que aprender HTML, resulte más interesante aprender el uso de una aplicación para la creación de
    páginas.<br></br>Así pues, una página es un archivo donde está contenido el código HTML en forma de texto. Estos
    archivos tienen extensión .html o .htm (es indiferente cuál utilizar). De modo que cuando
    programemos en HTML lo haremos con un editor de textos y guardaremos nuestros trabajos con
    extensión .html, por ejemplo mipágina.html. 
    HTML es el lenguaje con el que se escriben las páginas web. Las páginas web pueden ser
    vistas por el usuario mediante un tipo de aplicación llamada navegador. Podemos decir por lo
    tanto que el HTML es el lenguaje usado por los navegadores para mostrar las páginas webs al
    usuario, siendo hoy en día la interface más extendida en la red.
    Este lenguaje nos permite aglutinar textos, sonidos e imágenes y combinarlos a nuestro gusto.
    Además, y es aquí donde reside su ventaja con respecto a libros o revistas, el HTML nos permite
    la introducción de referencias a otras páginas por medio de los enlaces hipertexto.
    El HTML se creó en un principio con objetivos divulgativos. No se pensó que la web llegara a ser
    un área de ocio con carácter multimedia, de modo que, el HTML se creó sin dar respuesta a todos
    los posibles usos que se le iba a dar y a todos los colectivos de gente que lo utilizarían en un
    futuro. Sin embargo, pese a esta deficiente planificación, si que se han ido incorporando
    modificaciones con el tiempo, estos son los estándares del HTML. Numerosos estándares se han
    presentado ya. El HTML 4.01 es el último estándar a septiembre de 2001.
    Esta evolución tan anárquica del HTML ha supuesto toda una seria de inconvenientes y
    deficiencias que han debido ser superados con la introducción de otras tecnologías accesorias
    capaces de organizar, optimizar y automatizar el funcionamiento de las webs. Ejemplos que
    pueden sonaros son las CSS, JavaScript u otros. Veremos más adelante en qué consisten algunas
    de ellas`;

    return (
        <>
            <div className='container'>

                <Div className='row '>

                    <div style={{ height: "300px" }} className='col-md-3 mt-3 '>
                        <div style={{ position: "fixed" }} id='list-example' className='col-md-3 list-group bg-light rounded'>

                            <a className="list-group-item list-group-item-action" href="#list-item-1">Inicio</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-2">Medio</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-3">Final</a>

                        </div>
                    </div>

                    <div className='col-md-8 m-3 bg-light rounded scrollspy-example' data-spy="scroll" data-target="#list-example" data-offset="0">
                        <h2 id='list-item-1'>Inicio</h2>
                        <p className='p-4'>{texto1}</p>
                        <h2 id='list-item-2'>Medio</h2>
                        <p className='p-4'>{texto3}</p>
                        <h2 id='list-item-3'>Final</h2>
                        <p className='p-4'>{texto2}</p>
                    </div>
                </Div>
            </div>
        </>
    )
}
