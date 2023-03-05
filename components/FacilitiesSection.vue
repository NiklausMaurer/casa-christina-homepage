<script setup lang="ts"></script>

<template>
  <div class="container">
    <ul class="list">
      <li>
        <IconView class="style-text" icon="swimming-pool" /> Swimming Pool
      </li>
      <li><IconView class="style-text" icon="shower-facilities" /> Dusche</li>
      <li><IconView class="style-text" icon="vision" /> Aussicht</li>
      <li><IconView class="style-text" icon="wifi" /> Wifi</li>
      <li><IconView class="style-text" icon="barbeque-grill" /> Grill</li>
      <li><IconView class="style-text" icon="bed-furniture" /> Doppelbett</li>
      <li>
        <IconView class="style-text" icon="car-key" /> Abschliessbarer Parkplatz
      </li>
      <li><IconView class="style-text" icon="mirror-sink" /> Bad</li>
      <li><IconView class="style-text" icon="sea" /> Meer</li>
      <li><IconView class="style-text" icon="terrace" /> Balkon</li>
      <li><IconView class="style-text" icon="terrace-chair" /> Aussenküche</li>
      <li><IconView class="style-text" icon="tea-coffee" /> Kaffeemaschine</li>
      <li><IconView class="style-text" icon="oven" /> Ofen</li>
      <li><IconView class="style-text" icon="double-bed-sleep" /> Bett</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/styles/values';

.list {
  list-style-type: none;
}
</style>
