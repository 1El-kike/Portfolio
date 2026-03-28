import React from "react";

export const Title = ({
  background,
  titulo,
  subtitulo,
  link,
  className = "",
}) => (
  <div
    className={`w-full flex justify-center items-center py-12 ${className}`}
    id={link}
  >
    <div className="relative flex flex-col items-center justify-center">
      {/* Background text */}
      <p
        className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-gray-700/30 absolute top-1/2 -translate-y-1/2 select-none"
        aria-hidden="true"
      >
        {background}
      </p>

      {/* Main title */}
      <p className="text-2xl top-3 text-white sm:text-3xl md:text-4xl font-extrabold text-primary relative z-10 flex items-center gap-2">
        {titulo}
        <span className="text-yellow-400 font-extrabold">{subtitulo}</span>
      </p>
    </div>
  </div>
);
