<script setup lang="ts">
defineProps<{
  icon: string
  count?: number | undefined
}>()
</script>

<template>
  <li>
    <IconView
      v-for="i in count ?? 1"
      :key="i"
      class="style-text"
      :icon="icon"
    /><slot />
  </li>
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
