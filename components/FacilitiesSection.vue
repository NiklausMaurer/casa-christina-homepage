<script setup lang="ts"></script>

<template>
  <div class="container">
    <facilities-entry icon="pool">Swimming Pool</facilities-entry>
    <facilities-entry icon="shower">Aussendusche</facilities-entry>
    <facilities-entry icon="bathroom">Zwei Badezimmer</facilities-entry>
    <facilities-entry icon="fireplace">Kamin</facilities-entry>
    <facilities-entry icon="outdoor_grill">Grill</facilities-entry>
    <facilities-entry icon="deck">Aussensitzplatz</facilities-entry>
    <facilities-entry icon="balcony">Grosser Balkon</facilities-entry>
    <facilities-entry icon="beach_access"
      >Sonnenschirme und Lieben beim Pool</facilities-entry
    >
  </div>
</template>

<style scoped lang="scss">
@import '/assets/styles/values';

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
}
</style>
