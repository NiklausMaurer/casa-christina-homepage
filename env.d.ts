/// <reference types="vite/client" />

// @splidejs/vue-splide ships types, but its package.json "exports" map hides
// them under "Bundler" module resolution. Declare the components we use.
declare module '@splidejs/vue-splide' {
  import type { DefineComponent } from 'vue'
  export const Splide: DefineComponent<Record<string, unknown>>
  export const SplideSlide: DefineComponent<Record<string, unknown>>
}
