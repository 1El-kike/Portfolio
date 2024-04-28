import React from "react";
import { Menu } from "../Menu/Menu";
import { Footer } from "../footer";
import { useLocalStorage } from "react-use";

export const RouterProteded = () => {
  const [user, setUser] = useLocalStorage("user");
  const Contenido = () => {
    return (
      <>
        <div style={{ height: "100vh" }} className="container">
          <p>{toString([user])}</p>
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
