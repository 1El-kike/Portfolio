/* import { ListadoApp } from "./components/listadoApp"; */
import { Menu } from "./components/Menu/Menu";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PaginaDeFormulario } from "./components/Formulario/pagina_de_formulario"
import { TableGran } from "./components/tableGran"
import { Footer } from "./components/footer";
import { Thumbnail } from "./components/API_TMDB/Thumbnail";
import { RegistroUsuario } from "./components/RegistroUsuario";
import { Props } from "./components/Pagina_de_vuelos_comerciales/Props";
import { EjemploMenuBootstrap } from "./components/ejemploMenuBootstrap";
import { BlogComponent } from "./components/blog.compone";
import 'bootstrap/dist/js/bootstrap.bundle'
import { Main } from "./components/Pagina_Principal/Main";
import {Port} from './components/Portafolio/port'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Menu />
      <section >
        <Main />
      </section>
      <Footer />

    </>,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/portfolio",
    element: <>
      <Menu />
      <section >
       <Port/>
      </section>
      <Footer />

    </>,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/about",
    element: <>
      <Menu />
      <section>
        <Thumbnail />
      </section>
      <Footer />

    </>,
    children: [
      {
        path: `/about/id`,
        element: <>
          <Thumbnail
          />
        </>
      }
    ],
    errorElement: <h1>Error</h1>
  },
  {
    path: "/contact",
    element: <>
      <Menu />
      <section>

      </section>
      <Footer />
    </>,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/formulario",
    element: <>
      <Menu />
      <section >

        < PaginaDeFormulario />

      </section>
      <Footer />
    </>,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/table",
    element: <>
      <Menu />
      <TableGran />
      <section>

      </section>
      <Footer />
    </>,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/blog",
    element: <>
      <Menu />
      <section>
        <BlogComponent />

      </section>
      <Footer />
    </>,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/registro",
    element: <>
      <RegistroUsuario />
    </>,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/prueba",
    element: <>
      <Menu />
      <section>

        <EjemploMenuBootstrap />
      </section>
      <Footer />
    </>,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/props",
    element: <>
      <Menu />
      <section>

        <Props />
      </section>
      <Footer />
    </>,
    errorElement: <h1>Error {console.log(Error)}</h1>
  }

  /* children:[
    {
      path:"link/:rutaDinamica"
      element:<></>
    }
  ] */
])

function App() {



  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
