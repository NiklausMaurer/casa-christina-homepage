import { ref } from 'vue'
import { GetFormClientUse } from './GetFormClient.use'

export const useContactForm = (getFormClient: GetFormClientUse) => {
  const email = ref<string>()
  const name = ref<string>()
  const message = ref<string>()

  const formStatusMessage = ref<string>()
  const showForm = ref<boolean>(true)

  const onSubmit = async (): Promise<void> => {
    const status = await getFormClient.postContactRequest({
      email: email.value,
      name: name.value,
      message: message.value,
    })

    if (status > 299) {
      formStatusMessage.value = 'Es ist ein Fehler aufgetreten'
    } else {
      formStatusMessage.value =
        'Ihre Anfrage wurde erfolgreich abgeschickt. Vielen Dank!'
      showForm.value = false
    }
  }

  return {
    onSubmit,
    formStatusMessage,
    showForm,
    model: {
      email,
      name,
      message,
    },
  }
}
