<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
</script>

<template>
  <Splide
    class="spline"
    :options="{
      type: 'loop',
      perPage: 1,
      focus: 'center',
      breakpoints: {
        1976: {
          perPage: 1,
        },
        860: {
          perPage: 3,
        },
        400: {
          perPage: 2,
        },
        300: {
          perPage: 1,
        },
      },
    }"
  >
    <SplideSlide>
      <NuxtImg
        provider="cloudinary"
        src="/carousel/pool-1_the4xf.png"
        width="494"
        height="684"
        alt="Pool 1"
      />
    </SplideSlide>
    <SplideSlide>
      <NuxtImg
        provider="cloudinary"
        src="/carousel/pool-2_olkvet.png"
        width="494"
        height="684"
        alt="Pool 2"
      />
    </SplideSlide>
    <SplideSlide>
      <NuxtImg
        provider="cloudinary"
        src="/carousel/pool-3_huzpef.png"
        width="494"
        height="684"
        alt="Pool 3"
      />
    </SplideSlide>
    <SplideSlide>
      <NuxtImg
        provider="cloudinary"
        src="/carousel/kitchen-outside_oue4ze"
        width="494"
        height="684"
        alt="Kitchen Outside"
      />
    </SplideSlide>
  </Splide>
</template>

<style scoped lang="scss">
@import '/assets/styles/colors';

.spline {
  :deep(.splide__track, .splide__list) {
    background: $accent;
    height: 100vh;
    width: calc(100vh / 1.38461538);
    min-width: 100%;
    @media (max-width: 860px) {
      width: 100vw;
      height: 60vh;
      min-height: 400px;
    }
    img {
      height: 100vh;
      width: calc(100vh / 1.38461538);
      min-width: 100%;
      @media (max-width: 860px) {
        height: 60vh;
        min-height: 100%;
        width: calc(60vh / 1.38461538);
      }
    }
  }
  :deep(.splide__arrow) {
    background: $beige;
    opacity: 1;
    padding: 0.6rem;
    &:hover {
      padding: 0.55rem;
      filter: brightness(0.98);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
    }
  }
}
</style>
