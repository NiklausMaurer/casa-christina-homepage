<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="section">
      <h3>Aussen</h3>
      <ul class="list">
        <li>
          <IconView class="style-text" icon="swimming-pool" /> Swimming Pool
        </li>
        <li><IconView class="style-text" icon="shower-facilities" /> Dusche</li>
        <li><IconView class="style-text" icon="vision" /> Aussicht</li>
        <li><IconView class="style-text" icon="barbeque-grill" /> Grill</li>
        <li>
          <IconView class="style-text" icon="car-key" /> Abschliessbarer
          Parkplatz
        </li>
        <li><IconView class="style-text" icon="terrace" /> Balkon</li>
        <li>
          <IconView class="style-text" icon="terrace-chair" /> Aussenküche
        </li>
      </ul>
    </div>
    <div class="section">
      <h3>Innen</h3>
      <ul class="list">
        <li><IconView class="style-text" icon="shower-facilities" /> Dusche</li>
        <li><IconView class="style-text" icon="wifi" /> Wifi</li>
        <li><IconView class="style-text" icon="mirror-sink" /> Bad</li>
        <li>
          <IconView class="style-text" icon="tea-coffee" /> Kaffeemaschine
        </li>
        <li>
          <IconView class="style-text" icon="oven" /> Gut eingerichtete Küche
        </li>
        <li>
          <IconView class="style-text" icon="double-bed-sleep" /> 2 Zimmer mit
          Doppelbett
        </li>
      </ul>
    </div>
    <div class="section">
      <h3>Lage</h3>
      <ul class="list">
        <li class="list">
          <IconView class="style-text" icon="sea" /> Meer: 15 min entfernt
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/styles/values';

.list {
  list-style-type: none;
  padding-left: 0;
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;

  li {
    margin-bottom: $spacing-xs;
  }

  :deep(.icon) {
    margin-right: $spacing-xs;
  }
}
</style>
