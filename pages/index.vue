<script lang="js"></script>

<template>
  <div class="main-container">
    <div class="header-container">
      <div class="title-container">
        <img class="title" src="/images/title.png" alt="Casa Christina" />
      </div>
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
@import '/assets/styles/values';

.main-container {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: $spacing-s;

  h1 {
    color: $primary;
  }
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
  max-width: 2000px;
  margin: auto;
}
</style>
