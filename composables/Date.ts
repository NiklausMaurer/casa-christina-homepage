function isSameDay(d1: Date, d2: Date) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  )
}

function isBefore(d1: Date, d2: Date) {
  return d1.getTime() < d2.getTime()
}

export const isSameDayOrBefore = (d1: Date, d2: Date): boolean => {
  return isSameDay(d1, d2) || isBefore(d1, d2)
}
