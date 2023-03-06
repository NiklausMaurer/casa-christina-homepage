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
.icon {
  color: transparent;
  height: 2em;
  width: 2em;

  :deep(svg) {
    height: 2em;
    width: 2em;
  }
}
</style>
