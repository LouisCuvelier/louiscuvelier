const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html", "./src/**/*.js"],
  defaultExtractor: content => content.match(/[\w-/:%()]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-nested"),
    require("postcss-color-function"),
    ...(process.env.NODE_ENV === "production"
      ? [purgecss, require("cssnano")]
      : [])
  ]
};
