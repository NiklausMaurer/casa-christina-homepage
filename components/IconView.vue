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
  border: $accent;
  width: 100%;
  height: 100%;

  :deep(svg) {
    width: 100%;
    height: 100%;
  }
}

.style-text {
  width: 1em;
  height: 1em;

  :deep(svg) {
    width: 1em;
    height: 1em;
    position: relative;
  }
}
</style>
