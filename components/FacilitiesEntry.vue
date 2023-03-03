<script setup lang="ts">
const props = defineProps({
  icon: { type: String, required: true },
})
</script>

<template>
  <div class="entry-container">
    <span class="material-symbols-outlined">{{ props.icon }}</span
    ><span><slot /></span>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/styles/values';

.material-symbols-outlined {
  font-size: 35px;
}

.entry-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: $spacing-xs;
  width: 800px;
}
</style>
