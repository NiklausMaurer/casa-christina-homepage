<script setup lang="ts"></script>

<template>
  <!--suppress HtmlDeprecatedAttribute -->
  <iframe
    id="embedded-map"
    src="https://www.google.com/maps/embed/v1/place?q=carrer+la+perdiu+benissa&maptype=satellite&key=AIzaSyAH9tlVQCjprze0OmVQ8IKckqWrKUAGnyw&"
    frameborder="0"
    referrerpolicy="no-referrer-when-downgrade"
    allowfullscreen
  >
  </iframe>
</template>

<style scoped lang="scss">
#embedded-map {
  border: 0;
  width: 100%;
  height: 50vh;
}
</style>
