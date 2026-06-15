<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import ClientOnly from './components/ClientOnly.vue'
import FacilitiesSection from './components/FacilitiesSection.vue'
import OldBookingCalendar from './components/OldBookingCalendar.vue'
import LocationMap from './components/LocationMap.vue'

// Splide (carousel) and FormKit (contact form) only run in the browser.
const CarouselSection = defineAsyncComponent(
  () => import('./components/CarouselSection.vue')
)
const ContactForm = defineAsyncComponent(
  () => import('./components/ContactForm.vue')
)
</script>

<template>
  <div class="main-container">
    <div class="banner">
      <object class="logo" data="/images/casa-christiana.svg" />
      <ClientOnly>
        <CarouselSection />
      </ClientOnly>
    </div>
    <div class="content-container">
      <div class="content-section">
        <object class="divider" data="/images/divider.svg" />
        <h2>Ausstattung</h2>
        <FacilitiesSection />
      </div>
      <div class="content-section">
        <object class="divider" data="/images/divider.svg" />
        <h2>Verfügbarkeit</h2>
        <OldBookingCalendar />
      </div>
      <div class="content-section">
        <object class="divider" data="/images/divider.svg" />
        <h2>Kontakt</h2>
        <ClientOnly>
          <ContactForm />
        </ClientOnly>
      </div>
      <div class="content-section">
        <object class="divider" data="/images/divider.svg" />
        <h2>Anreise</h2>
        <LocationMap />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
