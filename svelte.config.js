import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import autoprefixer from 'autoprefixer';
import presetEnv from 'postcss-preset-env';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: {
        plugins: [
          autoprefixer(),
          presetEnv({
            features: {
              'nesting-rules': true,
              'custom-properties': true,
              'gap-properties': true,
              'not-pseudo-class': true,              
            },
          }),
        ]
      },
    }),
  ],

  kit: {
    adapter: adapter(),
  },
};

export default config;
