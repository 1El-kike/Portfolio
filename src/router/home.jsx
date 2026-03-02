import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../components/footer";
import { Port } from "../components/Portafolio/port";

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
