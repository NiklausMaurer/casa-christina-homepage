<script lang="js"></script>

<template>
  <div class="main-container">
    <div class="header-container">
      <div class="banner">
        <client-only>
          <carousel-section />
        </client-only>
      </div>
    </div>
    <div class="content-container">
      <div class="section">
        <h2>Ausstattung</h2>
        <FacilitiesSection />
      </div>
      <div class="content-section">
        <h2>Verfügbarkeit</h2>
        <old-booking-calendar />
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
  padding-bottom: $spacing-l;
}
.header-container {
  display: flex;
  flex-direction: column;
}

.content-container {
  margin: $spacing-s auto;
  background-color: #fdf7e888;
  width: 100%;
  max-width: 1000px;
  outline: 5px solid transparent;
  box-shadow: 0 0 10px rgba(66, 64, 64, 0.99);
  background-image: linear-gradient(
    30deg,
    rgba(241, 218, 207, 0.63),
    rgba(253, 247, 232, 0.74)
  );
  border-radius: 3px;
}

.content-section {
  width: 100%;
}

.section {
  margin: $spacing-s;
}
</style>
