import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import presetEnv from 'postcss-preset-env';
import postcssJitProps from 'postcss-jit-props';
import OpenProps from 'open-props';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({    
    postcss: {
      plugins: [
        postcssJitProps(OpenProps),
        autoprefixer(),
        presetEnv({
          features: {
            'nesting-rules': true,
            'custom-properties': true,
            'gap-properties': true,
            'not-pseudo-class': true,
            'custom-media-queries': {
              importFrom: 'src/styles/queries.pcss',
            },
          },
        }),
      ]
    },
  }),

	kit: {
		adapter: adapter()
	}
};

export default config;
