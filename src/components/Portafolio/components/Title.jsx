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
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary/30 absolute top-1/2 -translate-y-1/2 select-none"
        aria-hidden="true"
      >
        {background}
      </h1>

      {/* Main title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary relative z-10 flex items-center gap-2">
        {titulo}
        <span className="text-brand-yellow">{subtitulo}</span>
      </h2>
    </div>
  </div>
);
