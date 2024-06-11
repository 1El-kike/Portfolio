import { createContext, useState } from "react";
import { CardEdixts } from "./CardEdixtform";
import { Tools } from "./Tools";
import { Equipo } from "./Equipo";
import { Archivo } from "./Archivo";
import { Help } from "./Help";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderClosed,
  faHandsHelping,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { TabsTitle } from "./Tabs";
import { Alerts } from "./Alerts";

export const UserContext = createContext();

export const AsideFormulario = () => {
  const delet = <FontAwesomeIcon icon={faFolderClosed}></FontAwesomeIcon>;
  const help = <FontAwesomeIcon icon={faHandsHelping}></FontAwesomeIcon>;
  const tools = <FontAwesomeIcon icon={faTools}></FontAwesomeIcon>;
  const equipo = <i className="fas fa-users "></i>;

  const cantidad = [
    { id: "1", name: "User", content: "Acount:" },
    { id: "2", name: "Tools", content: "All Tools " },
    { id: "3", name: "Option", content: "Option:" },
  ];
  const cantidad2 = [
    { id: "4", name: "Data", content: "" },
    { id: "5", name: "Sign in", content: "" },
    { id: "6", name: "Sign out", content: "" },
  ];
  const cantidad3 = [
    { id: "7", name: "Web", content: "" },
    { id: "8", name: "Repo", content: "" },
    { id: "9", name: "Container", content: "" },
  ];
  const cantidad4 = [
    { id: "10", name: "Help", content: "" },
    { id: "11", name: "Soport", content: "" },
    { id: "12", name: "Info", content: "" },
  ];
  const [elementos] = useState([cantidad, cantidad2, cantidad3, cantidad4]);
  const [val, setval] = useState(1);

  const [elem, setelem] = useState([]);

  const result = (item) => {
    setelem(components[item]);
  };

  const [components] = useState([<Tools />, <Equipo />, <Archivo />, <Help />]);

  return (
    <>
      <UserContext.Provider value={val}>
        <div className="container  m-3 " style={{ height: "auto" }}>
          <div className="d-flex row  justify-content-center h-100 ">
            <div
              className="col-12 rounded m-4"
              style={{
                height: "auto",
                background:
                  "radial-gradient(ellipse at top,rgb(12,138,160),transparent),radial-gradient(ellipse at bottom,rgb(107,0,123),transparent)",
              }}
            >
              <CardEdixts
                link={[tools, equipo, delet, help]}
                title={elementos.map((ele, item) => (
                  <TabsTitle
                    cantidad={ele}
                    onClick={() => result(item)}
                    setvalor={setval}
                  />
                ))}
                texto={elem}
              />
              <Alerts
                heading={"Administrator"}
                texthead={
                  "Aqui podra designar hacia donde quieren dirigir la informacion"
                }
                textbody={
                  "Seleccione las diferentes opciones en la primera casilla que se muestran anteriormente"
                }
              />
            </div>
          </div>
        </div>
      </UserContext.Provider>
    </>
  );
};
