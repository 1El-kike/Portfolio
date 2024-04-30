import React, { useEffect, useState } from "react";
import { Menu } from "../Menu/Menu";
import { Footer } from "../footer";
import { Link } from "react-router-dom";

export const RouterProteded = () => {
  // eslint-disable-next-line no-unused-vars
  const [todus, setTodus] = useState([]);
  const [user, setuser] = useState([]);

  const Getdatos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodus(json))
      .catch((err) => console.log(err));
  };
  const GetUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => setuser(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    Getdatos();
    GetUser();
  }, []);

  const cambiarComplit = (id) => {
    setTodus((todus) => {
      return todus.map((item) => {
        if (item?.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  };
  const Contenido = () => {
    return (
      <>
        <div
          style={{ height: "auto" }}
          className="container justify-content-center align-items-center col-md-9 col-xs-11 col-11 col-lg-7 mb-5 mt-4"
        >
          {/*  {JSON.stringify(user, null, 5)} */}

          {todus?.map(({ userId = 0, id, title, completed }) => {
            return (
              <div key={id}>
                {console.log(userId, id, title, completed)}
                <div class="list-group d-flex flex-columns mt-3">
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action flex-column align-items-start active"
                    aria-current="true"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{title}</h5>
                      <small
                        onClick={() => cambiarComplit(id)}
                        className="text-muted"
                      >
                        {completed !== true ? (
                          <i className="fas fa-check bg-info p-2 rounded"></i>
                        ) : (
                          <i className="fas fa-x bg-secondary p-2 rounded"></i>
                        )}
                      </small>
                    </div>
                    <p className="mb-1">
                      {user && user[userId] ? user[userId].name : "Cargando..."}
                    </p>
                    <small className="text-muted">paragraph footer</small>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <Menu />
      <Contenido />
      <Footer />
    </>
  );
};
