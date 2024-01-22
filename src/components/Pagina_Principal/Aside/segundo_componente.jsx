import imagen from '../../../assets/images/1229908.jpg';
import imagen2 from '../../../assets/images/20-fondos-de-pantalla-para-pc-gamer-04-1200x675.jpg'
import imagen3 from '../../../assets/images/thumb-1920-1162236.jpg'
import image4 from '../../../assets/images/laptop-gamer-amd.webp'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CardGroupEdixt, CarouselEdixt } from './estilosAside'
import { Carrusel } from "../Article_section/Carrusel";
import datas from '../../../text/text2.json'
import { CardGroup } from "./CardGroup";
import { CardEdixts } from "./CardEdixt";
import { Accordions } from './Accordion'
import text from '../../../text/text2.json'
import { Alerts } from './Alerts';



export const AsideLeft = () => {



    /*   const [contador, setContador] = useState(value) */
    const datosJson = datas.name_detalle.map(e => [e.detalle]);


    return (
        <>
            <div className="menu_lateral ">
                <div className=""  >
                    <CardGroupEdixt>
                        <CardGroup
                            logo={image4}
                            title={'Devolper Full Start'}
                            text={"Devolper Podemos asimismo modificar el tamaño de nuestra letra con respecto al del texto mostrado precedentemente definiendo el número de niveles que queremos subir  "}
                        />
                    </CardGroupEdixt>
                    <CarouselEdixt>
                        <Carrusel
                            name={["Html", "Css ", "JavaScript", "Typescript"]}
                            description={[datosJson]}
                            image={[imagen, imagen2, imagen3, image4]}
                            longitud='100%'
                            tall="270px"
                            margin={['20px', '0px']}
                        />
                    </CarouselEdixt>
                    <CardEdixts
                        link={["Formulario", "Tabla", "Vuelos"]}
                        adress={['/formulario', '/table', '/prueba']}
                        title='After'
                        texto={text.Text}
                    />
                    <CarouselEdixt>
                        <Carrusel
                            name={[["Html", "Css ", "JavaScript", "Typescript"]]}
                            description={[datosJson]}
                            image={[imagen, imagen2, imagen3]}
                            longitud='100%'
                            tall="270px"
                            margin={['10px', '0']}
                        />
                    </CarouselEdixt>
                    <Accordions
                        header={['HTML', 'CSS']}
                        body={[text.Article[0].texto, text.Article[1].texto]}
                    />
                    <Alerts />
                </div>
            </div>
        </>
    )
}
