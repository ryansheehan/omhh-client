/* eslint-disable @typescript-eslint/no-empty-interface */
/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/typescript
// for information about these interfaces
declare namespace App {
	interface Locals {}

	interface Platform {}

	interface Session {}

	interface Stuff {}
}

interface ImportMetaEnv {
  VITE_PUBLIC_SANITY_PROJECT_ID: string;
  VITE_PUBLIC_SANITY_DATASET: string;
  VITE_PUBLIC_SANITY_API_VERSION: string;
  VITE_CONVERTKIT_API_URL: string;
  VITE_CONVERTKIT_API_KEY: string;
  VITE_CONVERTKIT_FORM_RECIPE: string;
}

type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>;