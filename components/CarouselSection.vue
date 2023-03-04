<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
</script>

<template>
  <Splide
    :options="{
      type: 'loop',
      perPage: 5,
      focus: 'center',
      breakpoints: {
        1976: {
          perPage: 4,
        },
        1482: {
          perPage: 3,
        },
        988: {
          perPage: 2,
        },
        494: {
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

<style scoped lang="scss"></style>
