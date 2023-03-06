<script setup lang="ts">
import AvailabilityCalendar from '../components/AvailabilityCalendar.vue'
</script>

<template>
  <div class="container">
    <availability-calendar :year="2023" :month="3" :reservations="[]" />
    <availability-calendar :year="2023" :month="4" :reservations="[]" />
    <availability-calendar :year="2023" :month="5" :reservations="[]" />
  </div>
</template>

<style scoped lang="scss"></style>
