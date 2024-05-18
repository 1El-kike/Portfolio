/* import { ListadoApp } from "./components/listadoApp"; */
import { Home } from "./router/home";
import "./index.css";
function App() {
  /*  useEffect(() => {
    // Deshabilitar scroll
    document.body.style.overflow = "hidden";

    // Limpiar (rehabilitar scroll) cuando el componente se desmonte
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); */

  return (
    <>
      <Home />
    </>
  );
}

export default App;
