import { Menu } from "../components/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaginaDeFormulario } from "../components/Formulario/pagina_de_formulario";
import { TableGran } from "../components/tableGran";
import { Footer } from "../components/footer";
import { Thumbnail } from "../components/API_TMDB/Thumbnail";
import { RegistroUsuario } from "../components/RegistroUsuario";
import { Props } from "../components/Pagina_de_vuelos_comerciales/Props";
import { EjemploMenuBootstrap } from "../components/ejemploMenuBootstrap";
import { BlogComponent } from "../components/blog.compone";
import { Main } from "../components/Pagina_Principal/Main";
import { Port } from "../components/Portafolio/port";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Menu />
              <section>
                <Main />
              </section>
              <Footer />
            </>
          }
        />

        <Route
          path="/portfolio"
          element={
            <>
              <Menu />
              <section>
                <Port />
              </section>
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Menu />
              <section>
                <Thumbnail />
              </section>
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Menu />
              <section></section>
              <Footer />
            </>
          }
        />
        <Route
          path="/formulario"
          element={
            <>
              <Menu />
              <section>
                <PaginaDeFormulario />
              </section>
              <Footer />
            </>
          }
        />
        <Route
          path="/table"
          element={
            <>
              <Menu />
              <TableGran />
              <section></section>
              <Footer />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Menu />
              <section>
                <BlogComponent />
              </section>
              <Footer />
            </>
          }
        />
        <Route
          path="/registro"
          element={
            <>
              <RegistroUsuario />
            </>
          }
        />
        <Route
          path="/prueba"
          element={
            <>
              <Menu />
              <section>
                <EjemploMenuBootstrap />
              </section>
              <Footer />
            </>
          }
        />
        <Route
          path="/props"
          element={
            <>
              <Menu />
              <section>
                <Props />
              </section>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
