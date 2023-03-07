<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <li><IconView class="style-text" :icon="icon" /><slot /></li>
</template>

<style scoped lang="scss">
@import '/assets/styles/values';

li {
  margin-bottom: $spacing-xs;
}

:deep(.icon) {
  margin-right: $spacing-xs;
}
</style>
