import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { browser } from '$app/env';


function createMediaStore(query: string) {  
  const store: Writable<boolean> = writable<boolean>(false, set => {
    if (browser) {
      console.log('here', query);
      const {set: setValue} = store;
      const mql = window.matchMedia(query);
      set(mql.matches);
      const handler = (result: {matches: boolean}) => {
        console.log(`${query}:`, result)
        setValue(result.matches)
      };
      mql.addEventListener('change', handler);
      return () => mql.removeEventListener('change', handler);
    }
  });
  return {subscribe: store.subscribe};
}

// export const xxsOnly      = createMediaStore('(0px <= width <= 240px)');
// export const xxsAndAbove  = createMediaStore('(width >= 240px)');
// export const xxsAndBelow  = createMediaStore('(width <= 240px)');
// export const xxsPhone     = createMediaStore('(0px <= width <= 240px) and (orientation: portrait)');

// export const xsOnly       = createMediaStore('(240px <= width <= 360px)');
// export const xsAndAbove   = createMediaStore('(width >= 360px)');
// export const xsAndBelow   = createMediaStore('(width <= 360px)');
// export const xsPhone      = createMediaStore('(240px <= width <= 360px) and (orientation: portrait)');

// export const smOnly       = createMediaStore('(360px <= width <= 480px)');
// export const smAndAbove   = createMediaStore('(width >= 480px)');
// export const smAndBelow   = createMediaStore('(width <= 480px)');
// export const smPhone      = createMediaStore('(360px <= width <= 480px) and (orientation: portrait)');

// export const mdOnly       = createMediaStore('(480px <= width <= 768px)');
// export const mdAndAbove   = createMediaStore('(width >= 768px)');
export const mdAndAbove = createMediaStore('(min-width: 768px)');
// export const mdAndBelow   = createMediaStore('(width <= 768px)');
// export const mdPhone      = createMediaStore('(480px <= width <= 768px) and (orientation: portrait)');

// export const lgOnly       = createMediaStore('(768px <= width <= 1024px)');
// export const lgAndAbove   = createMediaStore('(width >= 1024px)');
// export const lgAndBelow   = createMediaStore('(width <= 1024px)');
// export const lgPhone      = createMediaStore('(768px <= width <= 1024px) and (orientation: portrait)');

// export const xlOnly       = createMediaStore('(1024px <= width <= 1440px)');
// export const xlAndAbove   = createMediaStore('(width >= 1440px)');
// export const xlAndBelow   = createMediaStore('(width <= 1440px)');

// export const xxlOnly      = createMediaStore('(1440px <= width <= 1920px)');
// export const xxlAndAbove  = createMediaStore('(width >= 1920px)');
// export const xxlAndBelow  = createMediaStore('(width <= 1920px)');