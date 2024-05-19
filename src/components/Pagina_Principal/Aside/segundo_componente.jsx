import imagen from "../../../assets/images/primerPaso2.jpg";
import imagen2 from "../../../assets/images/newMetas.jpg";
import imagen3 from "../../../assets/images/optimizar.jpg";
import image4 from "../../../assets/images/resultado.jpg";
import image5 from "../../../assets/images/TI.jpg";
import image6 from "../../../assets/images/frontend.jpg";
import image7 from "../../../assets/images/backend.png";
import image8 from "../../../assets/images/docker.jpg";

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
  const datosJson2 = datas.detalles2.map((e) => [e.detalle2]);

  return (
    <>
      <div className="menu_lateral ">
        <div className="">
          <CardGroupEdixt>
            <CardGroup
              logo={image4}
              title={"Mi Blog Personal"}
              text={
                "Como todo buen desarrollador, es indispensable seguir mejorando y fundamentando tus expectativas. En este blog a continuación explicaré mis especialidades, experiencia y mi camino como desarrollador. "
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
            link={[
              <i className="fas fa-user"></i>,
              <i className="fas fa-table"></i>,
              <i className="fas fa-file"></i>,
            ]}
            adress={["/formulario", "/table", "/prueba"]}
            title="Nota"
            texto={text.Text}
          />
          <CarouselEdixt>
            <Carrusel
              name={[]}
              description={[datosJson2]}
              image={[image5, image6, image7, image8]}
              longitud="100%"
              tall="270px"
              margin={["10px", "0"]}
            />
          </CarouselEdixt>
          <Accordions
            header={["Front-End", "Back-End"]}
            body={[text.Article[0].texto, text.Article[1].texto]}
          />
          <Alerts />
        </div>
      </div>
    </>
  );
};
