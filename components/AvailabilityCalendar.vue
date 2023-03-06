<script setup lang="ts">
import { availabilityCalendarBehavior } from '../composables/availabilityCalendar.behavior'
import { Reservation } from '../composables/Reservation'

const props = defineProps<{
  year: number
  month: number
  reservations: Reservation[]
}>()

const bookingCalendar = availabilityCalendarBehavior(props.reservations)
</script>

<template>
  <ul>
    <li
      v-for="day in bookingCalendar.mapToCalendar(year, month)"
      :key="day.date"
    >
      {{ day }}
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>
