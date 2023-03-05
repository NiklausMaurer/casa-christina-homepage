<script setup lang="ts">
import { BookingCalendarUse } from '../composables/bookingCalendar'

const props = defineProps<{
  bookingCalendarUse: BookingCalendarUse
}>()
</script>

<template>
  <ul>
    <li v-for="day in props.bookingCalendarUse?.days" :key="day">{{ day }}</li>
  </ul>
</template>

<style scoped lang="scss"></style>
