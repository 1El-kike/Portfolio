import React from "react";

export const Title = ({ background, titulo, subtitulo, link }) => (
  <div className="w-full md:w-full sm:w-full flex" id={link}>
    <div className="justify-center items-center flex w-full">
      <div className="relative w-full flex justify-center h-24">
        <h1 className="text-5xl font-semibold tracking-widest text-gray-700 absolute top-0">
          {background}
        </h1>
        <h1 className="text-2xl font-semibold -tracking-0.5 text-white flex gap-1 absolute w-full justify-center items-center">
          {titulo}
          <span className="text-yellow-500">{subtitulo}</span>
        </h1>
      </div>
    </div>
  </div>
);
