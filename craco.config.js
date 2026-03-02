// craco.config.js
module.exports = {
  style: {
    postcss: {
      mode: "extends", // (Opcional) Para extender la config de CRA en lugar de reemplazarla
      loaderOptions: (postcssLoaderOptions) => {
        // Aquí sobrescribimos los plugins de PostCSS
        postcssLoaderOptions.postcssOptions.plugins = [
          require("@tailwindcss/postcss"),
          require("autoprefixer"),
        ];
        return postcssLoaderOptions;
      },
    },
  },
};
