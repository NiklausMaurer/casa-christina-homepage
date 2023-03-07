<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
})

const svgName = `${props.icon}-svgrepo-com`
</script>

<template>
  <nuxt-icon class="icon" :name="svgName" />
</template>

<style lang="scss" scoped>
@import '/assets/styles/colors';

.icon {
  color: transparent;
  height: 2em;
  width: 2em;
  stroke: $font-color;

  :deep(svg) {
    height: 2em;
    width: 2em;
  }
}
</style>
