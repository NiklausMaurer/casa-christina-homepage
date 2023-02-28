<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="entry">
      <facilities-entry icon="pool">Swimming Pool</facilities-entry>
      <facilities-entry icon="shower">Duschen</facilities-entry>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/styles/values';

.container {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
</style>
