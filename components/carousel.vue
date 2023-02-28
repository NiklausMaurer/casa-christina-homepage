<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
</script>

<template>
  <Splide
    :options="{
      type: 'loop',
      perPage: 3,
      focus: 'center',
    }"
  >
    <SplideSlide>
      <img src="/images/carousel/pool-1.png" alt="Pool 1" />
    </SplideSlide>
    <SplideSlide>
      <img src="/images/carousel/pool-2.png" alt="Pool 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="/images/carousel/pool-3.png" alt="Pool 3" />
    </SplideSlide>
    <SplideSlide>
      <img src="/images/carousel/kitchen-outside.png" alt="Kitchen outside" />
    </SplideSlide>
  </Splide>
</template>

<style scoped lang="scss"></style>
