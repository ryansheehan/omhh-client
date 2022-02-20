<script lang="ts">
  export let color: string = 'currentColor';
  export let width: string = '1em';  
  export let verticalAlign: string = 'baseline';
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.72537 107.71496" width={width} style="--vertical-align: {verticalAlign}">
  <g transform="translate(-42.013689,-73.969755)">
    <path 
      transform="scale(0.26458333)"
      fill="none" 
      stroke={color} 
      stroke-width="26" 
      d="m 281.12305,289.01953 c -28.84845,0 -57.69757,11.05304 -79.80274,33.1582 -44.21033,44.21034 -44.21034,115.39318 0,159.60352 10.17058,10.17056 20.34115,20.34116 30.51172,30.51172 l 160.9375,160.9375 151.85352,-155.93945 c 3.79309,-3.80099 7.41729,-7.44073 11.38476,-11.40821 0,0 16.06604,-16.06799 24.09961,-24.10156 44.21035,-44.21034 44.21035,-115.39318 0,-159.60352 -44.21034,-44.21032 -115.39317,-44.21032 -159.60351,0 0,0 -19.70829,19.61955 -29.4961,29.4961 l -0.67383,0.67969 -0.38476,0.38867 -29.02539,-30.56446 c -22.10518,-22.10516 -50.95234,-33.1582 -79.80078,-33.1582 z"/>
  </g>  
</svg>

<style lang="postcss">
  svg {    
    display: inline-block;
    vertical-align: var(--vertical-align);
  }
</style>
