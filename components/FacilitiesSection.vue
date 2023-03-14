<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="section">
      <h3>Aussen</h3>
      <ul class="list">
        <facilities-list-item icon="swimming-pool"
          >Swimming Pool</facilities-list-item
        >
        <facilities-list-item icon="shower-facilities"
          >Dusche</facilities-list-item
        >
        <facilities-list-item icon="vision">Aussicht</facilities-list-item>
        <facilities-list-item icon="barbeque-grill">Grill</facilities-list-item>
        <facilities-list-item icon="car-key" :count="2"
          >Abschliessbarer Parkplatz für 2 Autos</facilities-list-item
        >
        <facilities-list-item icon="terrace">Balkon</facilities-list-item>
        <facilities-list-item icon="terrace-chair"
          >Aussenküche</facilities-list-item
        >
      </ul>
    </div>
    <div class="section">
      <h3>Innen</h3>
      <ul class="list">
        <facilities-list-item icon="shower-facilities" :count="2"
          >2 Duschen</facilities-list-item
        >
        <facilities-list-item icon="wifi">Wifi</facilities-list-item>
        <facilities-list-item icon="mirror-sink" :count="2"
          >2 Bäder</facilities-list-item
        >
        <facilities-list-item icon="tea-coffee"
          >Kaffeemaschine</facilities-list-item
        >
        <facilities-list-item icon="oven"
          >Gut eingerichtete Küche</facilities-list-item
        >
        <facilities-list-item icon="double-bed-sleep" :count="2"
          >2 Zimmer mit Doppelbett</facilities-list-item
        >
      </ul>
    </div>
    <div class="section">
      <h3>Lage</h3>
      <ul class="list">
        <facilities-list-item icon="sea"
          >Meer: 15 min entfernt</facilities-list-item
        >
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/styles/values';

.container {
  margin: $spacing-s;
}

.list {
  list-style-type: none;
  padding-left: 0;
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
</style>
