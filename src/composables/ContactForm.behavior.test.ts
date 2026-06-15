import { describe, it, expect, vi } from 'vitest'
import { useContactForm } from './ContactForm.behavior'
import { GetFormClientUse } from './GetFormClient.use'

const clientReturning = (status: number): GetFormClientUse => ({
  postContactRequest: vi.fn().mockResolvedValue(status),
})

describe('useContactForm', () => {
  it('copies arrival to departure on focus out when departure is empty', () => {
    const form = useContactForm(clientReturning(200))
    form.model.arrivalDate.value = '2026-07-01'

    form.onArrivalFocusOut()

    expect(form.model.departureDate.value).toBe('2026-07-01')
  })

  it('does not overwrite a departure date that is already set', () => {
    const form = useContactForm(clientReturning(200))
    form.model.arrivalDate.value = '2026-07-01'
    form.model.departureDate.value = '2026-07-10'

    form.onArrivalFocusOut()

    expect(form.model.departureDate.value).toBe('2026-07-10')
  })

  it('hides the form and shows a success message on a 2xx response', async () => {
    const client = clientReturning(200)
    const form = useContactForm(client)

    await form.onSubmit()

    expect(client.postContactRequest).toHaveBeenCalledOnce()
    expect(form.showForm.value).toBe(false)
    expect(form.formStatusMessage.value).toContain('erfolgreich')
  })

  it('keeps the form and shows an error message on a failure response', async () => {
    const form = useContactForm(clientReturning(500))

    await form.onSubmit()

    expect(form.showForm.value).toBe(true)
    expect(form.formStatusMessage.value).toBe('Es ist ein Fehler aufgetreten')
  })
})
