import { describe, expect, it } from 'vitest'
import { isSameDayOrBefore } from './Date'

describe('Date', () => {
  describe('isSameDayOrBefore', () => {
    it('returns false for dates after the given date', () => {
      const result = isSameDayOrBefore(
        new Date(2023, 3, 10, 0, 0, 0, 0),
        new Date(2023, 2, 1, 0, 0, 0, 0)
      )

      expect(result).toStrictEqual(false)
    })

    it('returns true if the date is on the same day, but a bit later', () => {
      const result = isSameDayOrBefore(
        new Date(2023, 3, 1, 3, 2, 1, 0),
        new Date(2023, 3, 1, 0, 0, 0, 0)
      )

      expect(result).toStrictEqual(true)
    })

    it('returns true if the date is way before', () => {
      const result = isSameDayOrBefore(
        new Date(2023, 2, 1, 0, 0, 0, 0),
        new Date(2023, 3, 1, 3, 2, 1, 0)
      )

      expect(result).toStrictEqual(true)
    })
  })
})
