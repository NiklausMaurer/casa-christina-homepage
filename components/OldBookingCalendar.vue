<script setup lang="ts"></script>

<template>
  <div class="container">
    <!--suppress HtmlDeprecatedAttribute -->
    <iframe
      id="embedded-calendar-3-2"
      class="embedded-calendar"
      src="https://www.availcalendar.com/print/19067"
      scrolling="no"
    ></iframe>
    <!--suppress HtmlDeprecatedAttribute -->
    <iframe
      id="embedded-calendar-2-2"
      class="embedded-calendar"
      src="https://www.availcalendar.com/print/19067?mode=2"
      scrolling="no"
    ></iframe>
    <!--suppress HtmlDeprecatedAttribute -->
    <iframe
      id="embedded-calendar-1-1"
      class="embedded-calendar"
      src="https://www.availcalendar.com/print/19067?mode=5"
      scrolling="no"
    ></iframe>
  </div>
</template>

<style scoped lang="scss">
.container {
}

.embedded-calendar {
  border: 0;
  margin: 0 auto;
  display: none;
}

@media only screen and (min-width: 626px) {
  #embedded-calendar-3-2 {
    height: 470px;
    width: 626px;
    display: block;
  }
}
@media only screen and (min-width: 420px) and (max-width: 625px) {
  #embedded-calendar-2-2 {
    height: 470px;
    width: 420px;
    display: block;
  }
}

@media only screen and (min-width: 251px) and (max-width: 419px) {
  #embedded-calendar-1-1 {
    width: 212px;
    height: 251px;
    display: block;
  }
}
</style>
