import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/images/portafolio.jpg";

export const IntroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 350);
    window.addEventListener("scroll", handleScroll);

    // Trigger animations after component mounts
    setTimeout(() => setIsLoaded(true), 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`relative min-h-[90vh] flex items-center py-6  lg:py-20 overflow-hidden transition-all duration-500 ${
        scrolled ? "fixed top-0 left-0 w-full z-50 min-h-screen" : ""
      }`}
    >
      {/* Overlay para el fondo del padre */}

      {/* Main Content */}
      <div
        className={`relative z-10 w-full transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16  lg:px-12 ">
          {/* Left Side - Text Content */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
              <span className="text-yellow-500 text-sm font-medium">
                Available for work
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3">
              <span className="text-white">I'M </span>
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Enrique Grass
              </span>
            </h1>

            {/* Subtitle */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="h-px w-12 bg-brand-yellow/50" />
              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white/90">
                WEB DEVELOP
              </p>
              <span className="hidden sm:inline h-px w-12 bg-brand-yellow/50" />
            </div>

            {/* Animated typing cursor */}
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <span className="text-base sm:text-lg text-gray-400">I'm a </span>
              <span className="text-base sm:text-lg text-brand-yellow font-semibold ml-1">
                Full-Stack Developer
              </span>
              <span className="w-1 h-5 sm:h-6 bg-yellow-500 ml-1 animate-pulse" />
            </div>

            {/* Description */}
            <div
              className={`relative bg-gradient-to-r  from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-2xl p-5 sm:p-6 mb-6 backdrop-blur-sm transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                Graduate in Computer Engineering, passionate about web
                development and design. Specialized as a Front-End developer
                with expertise in creating responsive, user-friendly interfaces.
                I strive to contribute and gain experience to become a better
                professional in this digital world.
              </p>
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-500/50 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-500/50 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-500/50 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-500/50 rounded-br-lg" />
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 transition-all duration-700 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <Link
                to="/"
                onClick={(e) => handleClick(e, "about")}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  MORE ABOUT ME
                  <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                to="/"
                onClick={(e) => handleClick(e, "portfolio")}
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300 hover:bg-yellow-500/10 text-sm sm:text-base"
              >
                <span className="flex items-center gap-2">
                  VIEW MY WORK
                  <i className="fas fa-briefcase" />
                </span>
              </Link>
            </div>

            {/* Stats - Only show when not scrolled */}
            {!scrolled && (
              <div
                className={`flex items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 transition-all duration-700 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    2+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Years</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    20+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Projects
                  </div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Satisfaction
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Image with Animated Border */}
          <div
            className={`flex-shrink-0 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
              <div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />

              {/* Image container */}
              <div className="relative">
                <div
                  className={`${scrolled ? "w-16 h-16" : "w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-80 xl:w-[320px] xl:h-[380px]"} transition-all duration-500`}
                >
                  <img
                    src={image}
                    alt="Enrique Grass - Web Developer"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-slate-800/50"
                  />
                </div>

                {/* Floating elements around image - hide on mobile */}
                <div
                  className="hidden sm:flex absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full items-center justify-center shadow-lg animate-bounce"
                  style={{ animationDuration: "2s" }}
                >
                  <i className="fas fa-code text-black text-sm sm:text-base" />
                </div>
                <div
                  className="hidden sm:flex absolute -bottom-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full items-center justify-center shadow-lg animate-bounce"
                  style={{ animationDuration: "2s", animationDelay: "0.5s" }}
                >
                  <i className="fas fa-laptop-code text-white text-sm sm:text-base" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Only show when not scrolled */}
        {!scrolled && (
          <div
            className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <span className="text-xs sm:text-sm">Scroll to explore</span>
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1 sm:pt-2">
                <div className="w-1 h-1.5 sm:h-2 bg-yellow-500 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
