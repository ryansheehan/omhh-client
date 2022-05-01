<script lang="ts">
  import type { PostRecipeListing } from '$lib/api/sanity';
  import Image from '$lib/components/sanity-image.svelte';  

  export let recipe: PostRecipeListing;
  const { 
    mainImage, 
    name, 
    slug,
    description,
  } = recipe;
</script>


<div class="layout">
  <div class="image-wrapper">
    <Image source={mainImage} widths={[600]} sizes={['600px']} />
  </div>  
  <h3>{name}</h3>
  <p>{description}</p>
  <a href={`recipes/${slug}`}>See Recipe</a>
</div>


<style lang="postcss">
  
  .layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
    grid-template-areas:       
      "image"
      "recipeTitle"
      "description"
      "link"
    ;
    justify-items: center;
    text-align: center;
    row-gap: var(--size-4);         

    & .image-wrapper {  
      width: 100%;    
      grid-area: image;   
      display: flex;
      justify-content: center;
    }

    & h3 {
      grid-area: recipeTitle; 
      line-height: var(--font-lineheight-0);     
      max-inline-size: var(--size-15);
    }

    & p {
      grid-area: description;
      line-height: var(--font-lineheight-1);      
      max-inline-size: var(--size-15);
    }

    & h3, & p {
      padding-inline: var(--size-4);
    }

    & a {
      grid-area: link;
      justify-self: center;
    }

    @media (--sm-n-above) {
      padding-inline: var(--size-4);
    }
    
    @media (--md-n-above) {
      padding-inline: 0;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 1fr auto 1fr;
      grid-template-areas:        
        "image recipeTitle"
        "image description"
        "image link"
      ;      
      column-gap: 0;
      row-gap: var(--size-8);
      /* max-block-size: 512px; */

      & h3 {
        align-self: flex-end;        
      }

      & a {
        align-self: flex-start;
      }    
      
      & p {
        text-overflow: ellipsis;
      }

      & h3, & p {
        padding-inline: 0;         
      }

      & .image-wrapper { 
        justify-content: flex-start;
      }
    } 

    @media (--xl-n-above) {
      /* max-block-size: 720px; */
    }
  }

  a {
    font-family: var(--font-serif);
    background-color: var(--brand);
    padding-inline: var(--size-10);
    padding-block: var(--size-2);
    text-decoration: none;
    color: var(--text-1);
    border-radius: var(--radius-2);

    &:hover, &:active {
      background-color: var(--brand-hover);
      @media (--md-n-above) {
        text-decoration: underline;
      }
    }    
  }

</style>