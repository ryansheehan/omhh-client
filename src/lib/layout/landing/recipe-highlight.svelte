<script lang="ts">
  import type { PostRecipeListing } from '$lib/api/sanity';
  import Image from '$lib/components/sanity-image.svelte';
  import HeartHeader from '$lib/components/heart-wrapper.svelte';

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
  <div class="section-title">
    <HeartHeader><h2>Taste the Latest</h2></HeartHeader>
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
      "sectionTitle"
      "image"
      "recipeTitle"
      "description"
      "link"
    ;
    justify-items: stretch;
    text-align: center;

    & .image-wrapper {  
      width: 100%;    
      grid-area: image;    
    }

    & .section-title {
      grid-area: sectionTitle;
    }

    & h3 {
      grid-area: recipeTitle; 
      line-height: var(--font-lineheight-0);     
    }

    & p {
      grid-area: description;
      line-height: var(--font-lineheight-1);
    }

    & a {
      grid-area: link;
      justify-self: center;
    }
    
    @media (--md-n-above) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto 1fr auto 1fr;
      grid-template-areas:
        "sectionTitle sectionTitle"
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
        padding-inline: var(--size-8);
      }
    }    
  }
  
  h2 {
    color: var(--text-2);
    text-transform: uppercase;
    font-size: var(--font-size-fluid-1);
  }

  a {
    font-family: var(--font-serif);
    background-color: var(--brand);
    padding-inline: var(--size-10);
    padding-block: var(--size-2);
    text-decoration: none;
    color: var(--text-1);
    border-radius: var(--radius-2);

    &:hover {
      background-color: var(--brand-dark);
      @media (--md-n-above) {
        text-decoration: underline;
      }
    }    
  }

</style>