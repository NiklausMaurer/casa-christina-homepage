<script setup lang="ts"></script>

<template>
  <div class="container">
    <!--suppress HtmlDeprecatedAttribute -->
    <iframe
      id="embedded-map"
      src="https://www.google.com/maps/embed/v1/place?q=carrer+la+perdiu+benissa&maptype=satellite&key=AIzaSyAH9tlVQCjprze0OmVQ8IKckqWrKUAGnyw&"
      frameborder="0"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
    >
    </iframe>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

#embedded-map {
  border: 0;
  max-width: 1000px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
