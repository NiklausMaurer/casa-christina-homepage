<script setup lang="ts">
import { integer } from 'vscode-languageserver-types'
import { bookingCalendarBehavior } from '../composables/bookingCalendar.behavior'

const props = defineProps<{
  year: integer
  month: integer
}>()

const bookingCalendar = bookingCalendarBehavior(props.year, props.month)
</script>

<template>
  <ul>
    <li v-for="day in bookingCalendar.days" :key="day">{{ day }}</li>
  </ul>
</template>

<style scoped lang="scss"></style>
