import { AvailabilityState, hasOverlapWith, Reservation } from './Reservation'

export interface Day {
  date: number
  availability: AvailabilityState
}

interface BookingCalendarBehavior {
  mapToCalendar(year: number, month: number): Day[]
}

export const availabilityCalendarBehavior = (
  reservations: Reservation[]
): BookingCalendarBehavior => {
  const daysInMonth = (year: number, month: number): number => {
    return new Date(year, month, 0).getDate()
  }

  const mapToCalendar = (year: number, month: number): Day[] => {
    return [...Array(daysInMonth(year, month)).keys()].map((dayIndex) => {
      const currentDayOfMonth = dayIndex + 1
      const currentDay = new Date(year, month, currentDayOfMonth)

      const isUnavailable = reservations.some((r) =>
        hasOverlapWith(r, currentDay)
      )

      return {
        date: dayIndex + 1,
        availability: isUnavailable
          ? AvailabilityState.Unavailable
          : AvailabilityState.Free,
      }
    })
  }

  return {
    mapToCalendar,
  }
}
