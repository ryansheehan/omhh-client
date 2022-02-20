const autoprefixer = require("autoprefixer");
const presetEnv = require("postcss-preset-env");
const postcssJitProps = require("postcss-jit-props");
const OpenProps = require("open-props");

const config = {
  plugins: [
    postcssJitProps(OpenProps),
    autoprefixer(),
    presetEnv({
      'nesting-rules': true,
      'custom-properties': true,
      'gap-properties': true,
      'not-pseudo-class': true,
      'custom-media-queries': true,
    })
  ],
};

module.exports = config;
