/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "./Loading";
import { DetalleMovie } from "./DetalleMovie";

export const Movies = () => {
  const { id } = useParams();
  const [loadings, setloadings] = useState(true);
  const [data, setdata] = useState([]);

  const api = "?api_key=f397458aaaf92f659df45279ff3196bf&";

  useEffect(() => {
    setloadings(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}${api}&language=es-ES&append_to_response=images,videos`
      /*   {
        headers: {
          Authorization: `Bearer ${api}`,
        },
      } */
    )
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
        console.log(data);
        setloadings(false);
      })
      .catch((error) => {
        console.error(error);
        setloadings(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <div>
        {loadings ? (
          <Loading />
        ) : (
          <div>
            <DetalleMovie
              title={data.original_title} //https://www.themoviedb.org/movie/823464-godzilla-x-kong-the-new-empire
              imagen={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
              imagen2={`https://image.tmdb.org/t/p/w1280${data.poster_path}`}
              overview={data.overview}
              data={data.release_date}
              pais={data.origin_country[0]}
              genero={data.genres}
            />
          </div>
        )}
      </div>
    </>
  );
};
