<script setup lang="ts">
defineProps<{
  icon: string
  count?: number | undefined
}>()
</script>

<template>
  <div class="facilities-list-item-wrapper">
    <IconView
      v-for="i in count ?? 1"
      :key="i"
      class="style-text"
      :icon="icon"
    /><slot />
  </div>
</template>

<style scoped lang="scss">
@import '/assets/styles/values';

.facilities-list-item-wrapper {
  margin-bottom: $spacing-xs;
  font-size: 1rem;
  > * {
    font-size: 1.3rem;
  }
}

:deep(.icon) {
  margin-right: $spacing-xs;
}
</style>
