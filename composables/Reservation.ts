import { isSameDayOrBefore } from './Date'

export enum AvailabilityState {
  Free,
  Unavailable,
}

export interface Reservation {
  startDate: Date
  endDate: Date
}

export const hasOverlapWith = (
  reservation: Reservation,
  date: Date
): boolean => {
  return (
    isSameDayOrBefore(reservation.startDate, date) &&
    isSameDayOrBefore(date, reservation.endDate)
  )
}
