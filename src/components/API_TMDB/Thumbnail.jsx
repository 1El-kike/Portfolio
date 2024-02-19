import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Butom, Div, DivContainer } from "./Api";
import { ElementVideo } from "./ElementVideo";
import { Loading } from "./Loading";

export const Thumbnail = ({ id }) => {
  const [pagina, setpagina] = useState(1);
  const [loadings, setloadings] = useState(false);

  const handlepage = () => {
    setpagina(pagina + 1);
  };
  const handlepagea = () => {
    if (pagina >= 2) setpagina(pagina - 1);
  };
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=f397458aaaf92f659df45279ff3196bf&language=es-ES&page=${pagina}`
    )
      .then((response) => response.json())
      .then((data) => setdata(data))
      .catch((error) => console.error(error));

    setloadings(true);
  }, [pagina]);

  return (
    <>
      <DivContainer>
        <Div>
          {loadings === false ? (
            <Loading />
          ) : (
            data.results?.map((element) => (
              <ElementVideo
                id={element.id}
                tituloPlayer={element.title}
                textPlayer={element.overview}
                imagen={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
              />
            ))
          )}
        </Div>
      </DivContainer>
      <Butom>
        <button
          className="btn btn-primary"
          style={{ marginRight: "40px" }}
          onClick={handlepagea}
        >
          Anterior
        </button>
        <button className="btn btn-primary" onClick={handlepage}>
          Siguiente
        </button>
      </Butom>
    </>
  );
};
