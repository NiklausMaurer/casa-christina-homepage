<script setup lang="ts">
import AvailabilityCalendar from '../components/AvailabilityCalendar.vue'

const reservations = [
  {
    startDate: new Date('2023-03-01'),
    endDate: new Date('2023-03-31'),
  },
]
</script>

<template>
  <div class="container">
    <availability-calendar
      :year="2023"
      :month="2"
      :reservations="reservations"
    />
    <availability-calendar
      :year="2023"
      :month="3"
      :reservations="reservations"
    />
    <availability-calendar
      :year="2023"
      :month="4"
      :reservations="reservations"
    />
  </div>
</template>

<style scoped lang="scss"></style>
