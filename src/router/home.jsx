import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../components/footer";

import { Port } from "../components/Portafolio/port";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/portfolio"
          element={
            <>
              <section className="">
                <Port />
              </section>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
