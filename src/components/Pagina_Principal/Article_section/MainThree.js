import { Articleblog } from "./Article"
import datas from '../../../text/text2.json'
import { Carrusel } from "./Carrusel"
import { Alerta } from './Alerta'
import { ToastMens } from './Toast_mens'

export const MainThree = () => {
    const datosJson = datas.name_three_detalles.map(e => [e.detalle]);
    const datosArticle = datas.Article3.map(e => [e.title, e.texto])
    const datosAlert = datas.Alert3.map(e => [e.titleAlert, e.AlertsHeader, e.AlertsFooter,])
    console.log(datosAlert);

    const image = require("../../../assets/images/thumb-1920-1162236.jpg")
    const image1 = require("../../../assets/images/thumb-1920-1162236.jpg")
    const image2 = require("../../../assets/images/1229908.jpg")
    const image3 = require("../../../assets/images/hq720.jpg")
    const image4 = require("../../../assets/images/hq720.jpg")
    const image5 = require("../../../assets/images/thumb-1920-1162236.jpg")
    return (
        <>
            <div style={{}} className='' >

                <Carrusel
                    name={["Bootstrap", "Tailwindcss ", "React", "Node"]}
                    description={[datosJson]}
                    image={[image, image1, image2, image3]}
                />

                <Articleblog
                    title={[datosArticle[0][0], datosArticle[1][0]]}
                    texto={[datosArticle[0][1], datosArticle[1][1]]}
                    image={[image4, image5]}
                />

                <Alerta
                    alerHeader={datosAlert[0][0]}
                    parrafoHeader={datosAlert[0][1]}
                    parragofooter={datosAlert[0][2]}
                />
                <Articleblog
                    title={[datosArticle[0][0], datosArticle[1][0]]}
                    texto={[datosArticle[0][1], datosArticle[1][1]]}
                    image={[image4, image5]}
                />
                <Alerta
                    alerHeader={datosAlert[1][0]}
                    parrafoHeader={datosAlert[1][1]}
                    parragofooter={datosAlert[1][2]}
                />

                <ToastMens
                    body={"Prueba de nota"} />
            </div>

        </>
    )
}
