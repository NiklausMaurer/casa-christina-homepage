<script setup lang="ts">
import { useBookingCalendar } from '../composables/bookingCalendar'

const bookingCalendarUse = useBookingCalendar(2023, 3)
</script>

<template>
  <booking-calendar :booking-calendar-use="bookingCalendarUse" />
</template>

<style scoped lang="scss"></style>
