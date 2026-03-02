import { useState, useEffect } from "react";
import image from "../../../assets/images/portafolio.jpg";
import { Button } from "../components/Button";

export const IntroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tailwind classes with conditional styles
  const containerClasses =
    ` flex flex-col text-white transition-all duration-300 ease-in-out ` +
    (scrolled ? "fixed top-0 left-0 w-full bg-black/70 z-50" : "");

  const imageWrapperClasses =
    `img1 w-24 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32  relative overflow-hidden transition-all duration-300 ease-in-out ` +
    (scrolled ? "w-16 h-16 " : "lg:w-[330px] lg:h-[400px]");

  const titleClasses =
    `text-yellow-500 text-5xl drop-shadow-lg transition-all duration-300 ` +
    (scrolled ? "text-5xl" : "");

  return (
    <div className={containerClasses} id="lista1">
      <div className="flex flex-row-reverse flex-wrap">
        <div className="w-full lg:w-5/12">
          <div className={imageWrapperClasses + ""}>
            <div className="espensy ">
              <img src={image} className="fondo" alt="no se encuentra" />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-7/12 flex flex-wrap">
          <div className="w-11/12 flex flex-col justify-center items-start ">
            <div
              className={scrolled ? "flex items-center gap-4" : "flex flex-col"}
            >
              <div className="flex gap-4 justify-center">
                <span className="h-px w-16 border-b-4 border-gray-600 rounded my-auto"></span>
                <h1 className={titleClasses}>I'M Enrique Grass.</h1>
              </div>
              <h2 className="text-white mx-auto flex drop-shadow-lg text-2xl">
                WEB DEVELOP
              </h2>
            </div>
            {!scrolled && (
              <div className="relative font-bold bg-gradient-to-r from-yellow-500 to-yellow-700 text-gray-900 rounded-lg mb-8 mx-12 my-8 overflow-hidden">
                <p className="p-4 font-bold w-full text-justify ">
                  Graduate in Computer Engineering, passionate about web
                  development and design, specialized as a Front-End developer.
                  I would like to contribute and gain experience in everything I
                  can to be a better option in this great digital world. I hope
                  to be of great help and manage to meet expectations to achieve
                  better professional development.
                </p>
              </div>
            )}
          </div>

          {!scrolled && (
            <Button buttons="MORE ABOUT ME" ico="fa-arrow-right" href="/" />
          )}
        </div>
      </div>
    </div>
  );
};
