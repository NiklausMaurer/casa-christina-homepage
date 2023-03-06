import { AvailabilityState, Reservation } from './Reservation'

interface Day {
  date: number
  availability: AvailabilityState
}

interface BookingCalendarBehavior {
  mapToCalendar(year: number, month: number): Day[]
}

export const availabilityCalendarBehavior = (
  _reservations: Reservation[]
): BookingCalendarBehavior => {
  const daysInMonth = (year: number, month: number): number => {
    return new Date(year, month, 0).getDate()
  }

  const mapToCalendar = (year: number, month: number): Day[] => {
    return [...Array(daysInMonth(year, month)).keys()].map((dayIndex) => {
      return {
        date: dayIndex + 1,
        availability: AvailabilityState.Free,
      }
    })
  }

  return {
    mapToCalendar,
  }
}
