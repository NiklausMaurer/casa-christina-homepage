<script lang="js"></script>

<template>
  <div class="main-container">
    <div class="header-container">
      <div class="title"><h1>Home</h1></div>
      <div class="banner">
        <client-only>
          <carousel />
        </client-only>
      </div>
    </div>
    <div class="content-container">
      <div class="content-section">
        <h2>Anreise</h2>
        <client-only>
          <location-map />
        </client-only>
      </div>
      <div class="content-section">
        <h2>Buchung</h2>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/styles/colors';

.main-container {
  margin: 0;
  display: flex;
  flex-direction: column;

  h1 {
    color: $primary;
  }
}
.header-container {
  display: flex;
  flex-direction: column;
}

body {
  margin: 0 !important;
}
</style>
