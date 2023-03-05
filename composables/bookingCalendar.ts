import { integer } from 'vscode-languageserver-types'

enum ReservationState {
  Free,
}

export interface BookingCalendarUse {
  days: { day: integer; occupation: ReservationState }[]
}

export const useBookingCalendar = (
  year: integer,
  month: integer
): BookingCalendarUse => {
  const daysInMonth = (year: integer, month: integer): integer => {
    return new Date(year, month, 0).getDate()
  }

  const days = [...Array(daysInMonth(year, month)).keys()].map((dayIndex) => {
    return {
      day: dayIndex + 1,
      occupation: ReservationState.Free,
    }
  })

  return {
    days,
  }
}
