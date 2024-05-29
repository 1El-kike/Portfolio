import React, { memo, useState } from "react";
import "../../assets/css/listado.css";
import {
  Formularios,
  Label,
  Botondiv,
  Boton,
  Mensajeexito,
  Mensajeerror,
  Terminos,
} from "./elementos_formularios";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "./Input";
import "bootstrap/dist/css/bootstrap.min.css";

/* 
const Item = ({ nombre, visto }) => {

    return (
        <li>{nombre} {visto ? '✔' : '✖'}</li>
    )
} */

export const Formulario = memo(({ newvalor }) => {
  const expresiones = {
    tarea: /^[a-zA-Z0-9_-]{4,256}$/,
  };

  const [usuario, newusuario] = useState({ campo: "", valido: null });
  const [tarea, newtarea] = useState({ campo: "", valido: null });
  const [asig, newasig] = useState({ campo: "", valido: null });
  const [obse, newobse] = useState({ campo: "", valido: null });
  const [telefon, newtelefon] = useState({ campo: "", valido: null });
  const [esta, newesta] = useState({ campo: "", valido: null });
  const [check, cambiarcheck] = useState(false);
  const [formulario, cambiarformulario] = useState(null);

  const onChangeTerminos = (e) => {
    cambiarcheck(e.target.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      usuario.valido === "true" &&
      tarea.valido === "true" &&
      asig.valido === "true" &&
      obse.valido === "true" &&
      esta.valido === "true" &&
      check
    ) {
      cambiarformulario(true);
      newusuario({ campo: "", valido: null });
      newtarea({ campo: "", valido: null });
      newasig({ campo: "", valido: null });
      newobse({ campo: "", valido: null });
      newesta({ campo: "", valido: null });
      cambiarcheck(false);
    } else {
      cambiarformulario(false);
    }
  };
  return (
    <main style={{ marginBottom: "50px" }} className="container">
      <Formularios action="" onSubmit={onSubmit}>
        <Input
          estado={tarea}
          cambiarEstado={newtarea}
          tipo="text"
          name="usuario"
          label="Name"
          leyendaerror="Tiene que llenar el campo de tarea"
          exprexionregular={expresiones.tarea}
          placeholder="new task"
        />
        <Input
          estado={asig}
          cambiarEstado={newasig}
          tipo="text"
          label="Asignacion"
          placeholder="new assignment"
          name="asignacion"
          leyendaerror="Tiene que expecificar por quien fue asignado la tarea"
          exprexionregular={expresiones.tarea}
        />

        <Input
          estado={obse}
          cambiarEstado={newobse}
          tipo="text"
          name="estado"
          label="Last name"
          placeholder="✔"
          leyendaerror="Tiene que expecificar por quien fue asignado la tarea"
          exprexionregular={expresiones.tarea}
        />

        <Input
          estado={esta}
          cambiarEstado={newesta}
          tipo="text"
          name="estado"
          label="Estado"
          placeholder="✖"
          leyendaerror="Tiene que expecificar por quien fue asignado la tarea"
          exprexionregular={expresiones.tarea}
        />

        <Input
          estado={usuario}
          cambiarEstado={newusuario}
          tipo="text"
          name="observacion"
          label="Observacion"
          placeholder="new observation"
          leyendaerror="Tiene que expecificar por quien fue asignado la tarea"
          exprexionregular={expresiones.tarea}
        />

        <Input
          estado={telefon}
          cambiarEstado={newtelefon}
          tipo="text"
          name="observacion"
          label="Observacion"
          placeholder="new observation"
          leyendaerror="Tiene que expecificar por quien fue asignado la tarea"
          exprexionregular={expresiones.tarea}
        />

        <Terminos>
          <Label>
            <input
              type="checkbox"
              name="termino"
              id="termino"
              checked={check}
              onChange={onChangeTerminos}
            />
            Acepto los terminos
          </Label>
        </Terminos>

        {formulario === false && (
          <Mensajeerror>
            <p>
              {" "}
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <b>Error:</b>por favor rellene el campo
            </p>
          </Mensajeerror>
        )}

        <Botondiv>
          <Boton type="submit">Enviar</Boton>
          {formulario === true && (
            <Mensajeexito>Formulario enviado exitosamente ❗</Mensajeexito>
          )}
        </Botondiv>
      </Formularios>
    </main>
  );
});
