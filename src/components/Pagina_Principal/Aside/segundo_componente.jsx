import imagen from "../../../assets/images/primerPaso2.jpg";
import imagen2 from "../../../assets/images/newMetas.jpg";
import imagen3 from "../../../assets/images/optimizar.jpg";
import image4 from "../../../assets/images/resultado.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroupEdixt, CarouselEdixt } from "./estilosAside";
import { Carrusel } from "../Article_section/Carrusel";
import datas from "../../../text/text2.json";
import { CardGroup } from "./CardGroup";
import { CardEdixts } from "./CardEdixt";
import { Accordions } from "./Accordion";
import text from "../../../text/text2.json";
import { Alerts } from "./Alerts";

export const AsideLeft = () => {
  /*   const [contador, setContador] = useState(value) */
  const datosJson = datas.detalles.map((e) => [e.detalle]);

  return (
    <>
      <div className="menu_lateral ">
        <div className="">
          <CardGroupEdixt>
            <CardGroup
              logo={image4}
              title={"Mi Blog Personal"}
              text={
                "Como todo buen desarrollador, es indispensable seguir mejorando y fundamentando tus expectativas. En este blog a continuación explicaré mis especialidades, experiencia y el camino que quise escoger. "
              }
            />
          </CardGroupEdixt>
          <CarouselEdixt>
            <Carrusel
              name={[
                "Primera Ventana",
                "Segunda Ventana ",
                "Tercera Ventana",
                "Cuarta Ventana",
              ]}
              description={[datosJson]}
              image={[imagen, imagen2, imagen3, image4]}
              longitud="100%"
              tall="270px"
              margin={["20px", "0px"]}
            />
          </CarouselEdixt>
          <CardEdixts
            link={["Formulario", "Tabla", "Prueba"]}
            adress={["/formulario", "/table", "/prueba"]}
            title="After"
            texto={text.Text}
          />
          <CarouselEdixt>
            <Carrusel
              name={[["Html", "Css ", "JavaScript", "Typescript"]]}
              description={[datosJson]}
              image={[imagen, imagen2, imagen3]}
              longitud="100%"
              tall="270px"
              margin={["10px", "0"]}
            />
          </CarouselEdixt>
          <Accordions
            header={["HTML", "CSS"]}
            body={[text.Article[0].texto, text.Article[1].texto]}
          />
          <Alerts />
        </div>
      </div>
    </>
  );
};
