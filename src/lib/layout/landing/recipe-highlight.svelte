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
    <Image source={mainImage} />
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
    justify-items: stretch;
    text-align: center;
    row-gap: var(--size-3);         

    & .image-wrapper {  
      width: 100%;    
      grid-area: image;      
    }

    & h3 {
      grid-area: recipeTitle; 
      line-height: var(--font-lineheight-0);     
      padding-inline: var(--size-4);
      max-inline-size: var(--size-content-2);
    }

    & p {
      grid-area: description;
      line-height: var(--font-lineheight-1);
      padding-inline: var(--size-4);
      max-inline-size: var(--size-content-2);
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
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr auto 1fr;
      grid-template-areas:        
        "image recipeTitle"
        "image description"
        "image link"
      ;
      column-gap: var(--size-4);
      row-gap: var(--size-6);

      & h3 {
        align-self: flex-end;        
      }

      & a {
        align-self: flex-start;
      }

      & h3, & p {
        padding-inline: 0;        
      }
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