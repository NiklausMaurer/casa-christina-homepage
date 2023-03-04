<script lang="js"></script>

<template>
  <div class="main-container">
    <div class="header-container">
      <div class="title-container">
        <h1>Casa Christina</h1>
      </div>
      <div class="banner">
        <client-only>
          <carousel-section />
        </client-only>
      </div>
    </div>
    <div class="content-container">
      <div class="content-section">
        <h2>Ausstattungen</h2>
      </div>
      <div class="content-section">
        <h2>Buchung</h2>
        <booking-calendar />
      </div>
      <div class="content-section">
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
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: $spacing-s;
  padding-bottom: $spacing-l;
}
.header-container {
  display: flex;
  flex-direction: column;

  .title-container {
    margin: $spacing-l auto;

    .title {
      height: 120px;
    }
  }
}

.content-container {
  margin: auto;
  width: 100%;
  max-width: 1000px;
}

.content-section {
  width: 100%;
}
</style>
