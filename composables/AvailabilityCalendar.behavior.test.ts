import { describe, expect, it } from 'vitest'
import { availabilityCalendarBehavior } from './AvailabilityCalendar.behavior'
import { AvailabilityState, Reservation } from './Reservation'

describe('availabilityCalendar.behavior', () => {
  describe('mapToCalendar', () => {
    it('maps to free days if no reservations are given', () => {
      const reservations: Reservation[] = []
      const behavior = availabilityCalendarBehavior(reservations)

      const result = behavior.mapToCalendar(2023, 2)

      expect(result.length).toStrictEqual(31)
      expect(result.every((day) => day.availability === AvailabilityState.Free))
    })

    it('maps reservations to Unavailable', () => {
      const reservations: Reservation[] = [
        { startDate: new Date('2023-03-10'), endDate: new Date('2023-03-15') },
      ]
      const behavior = availabilityCalendarBehavior(reservations)

      const result = behavior.mapToCalendar(2023, 2)

      expect(result.length).toStrictEqual(31)
      expect(
        result.filter(
          (day) => day.availability === AvailabilityState.Unavailable
        ).length
      ).toStrictEqual(6)
    })

    it('does not map reservations in previous months', () => {
      const reservations: Reservation[] = [
        { startDate: new Date('2023-03-10'), endDate: new Date('2023-03-31') },
      ]
      const behavior = availabilityCalendarBehavior(reservations)

      const result = behavior.mapToCalendar(2023, 3)

      expect(result.length).toStrictEqual(30)
      expect(
        result.some((day) => day.availability === AvailabilityState.Unavailable)
      ).toStrictEqual(false)
    })
  })
})
