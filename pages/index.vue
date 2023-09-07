<script lang="js"></script>

<template>
  <div class="main-container">
    <div class="banner">
      <object class="logo" data="/images/casa-christiana.svg" />
      <client-only>
        <carousel-section />
      </client-only>
    </div>
    <div class="content-container">
      <div class="content-section">
        <object class="divider" data="/images/divider.svg" />
        <h2>Ausstattung</h2>
        <facilities-section />
      </div>
      <div class="content-section">
        <object class="divider" data="/images/divider.svg" />
        <h2>Verfügbarkeit</h2>
        <old-booking-calendar />
      </div>
      <div class="content-section">
        <object class="divider" data="/images/divider.svg" />
        <h2>Kontakt</h2>
        <client-only>
          <contact-form />
        </client-only>
      </div>
      <div class="content-section">
        <object class="divider" data="/images/divider.svg" />
        <h2>Anreise</h2>
        <location-map />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/styles/colors';
@import '/assets/styles/values';

.main-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  padding-bottom: $spacing-l;
  @media (max-width: 860px) {
    flex-wrap: wrap;
    overflow: auto;
  }
}

.banner {
  height: 100vh;
  width: calc(100vh / 1.38461538);
  position: relative;
  flex: 0 1 auto;
  overflow: hidden;
  @media (min-width: 1400px) {
    flex: 0 0 auto;
  }
  @media (max-width: 860px) {
    height: 60vh;
    min-height: 400px;
    width: 100vw;
  }
  & .logo {
    height: 12vh;
    min-height: 80px;
    position: absolute;
    bottom: 8vh;
    left: 0;
    z-index: 9;
  }
}

.divider {
  margin: 0 0 $spacing-m 0;
}

.content-container {
  flex: 1 3 auto;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fdf7e8;
  padding: $spacing-l;
  @media (max-width: 860px) {
    padding: $spacing-m;
    overflow: hidden;
    height: auto;
  }
  .content-section {
    width: 100%;
    max-width: 800px;
    padding: 0 0 $spacing-l 0;
  }
}
</style>
