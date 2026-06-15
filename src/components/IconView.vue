<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  icon: string
}>()

// Inline every SVG in src/icons at build time and pick the one matching the name.
const icons = import.meta.glob('../icons/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const svg = computed(
  () => icons[`../icons/${props.icon}-svgrepo-com.svg`] ?? ''
)
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <span class="icon" v-html="svg" />
</template>

<style lang="scss" scoped>
.icon {
  display: inline-block;
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
