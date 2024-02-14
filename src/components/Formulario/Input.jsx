import React from 'react'
import { GrupoInput, Leyenda, Inputt, Label, IcoValidar, } from './elementos_formularios';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';



const ComponenteInput = ({ estado, cambiarEstado, label, placeholder, tipo,
    name, leyendaerror, exprexionregular }) => {

    const onChange = (e) => {
        cambiarEstado({ ...estado, campo: e.target.value });

    }

    const validacion = () => {
        if (exprexionregular) {
            if (exprexionregular.test(estado.campo)) {
                // console.log("correct")
                cambiarEstado({ ...estado, valido: 'true' })
            } else {
                //console.log("incorrecto ")
                cambiarEstado({ ...estado, valido: 'false' })

            }
        }
    }




    return (
        <div>

            <Label htmlFor={name}
                valido={estado.valido}

            >{label}</Label>
            <GrupoInput>
                <Inputt type={tipo}
                    id={name}
                    placeholder={placeholder}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                />
                <IcoValidar icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                    valido={estado.valido}
                />
            </GrupoInput >
            <Leyenda valido={estado.valido}>{leyendaerror}</Leyenda>
        </div>
    );
}

export default ComponenteInput; 