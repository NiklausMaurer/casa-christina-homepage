import { ref } from 'vue'
import { GetFormClientUse } from './GetFormClient.use'

export enum FormStatus {
  Undefined,
  Success,
  Failure,
}

export const useContactForm = (getFormClient: GetFormClientUse) => {
  const email = ref<string>()
  const name = ref<string>()
  const message = ref<string>()

  const formStatusMessage = ref<string>()
  const formStatus = ref<FormStatus>(FormStatus.Undefined)

  const resetFormFields = () => {
    email.value = ''
    name.value = ''
    message.value = ''
  }

  const onSubmit = async (): Promise<void> => {
    const status = await getFormClient.postContactRequest({
      email: email.value,
      name: name.value,
      message: message.value,
    })

    if (status > 299) {
      formStatusMessage.value = 'Es ist ein Fehler aufgetreten'
      formStatus.value = FormStatus.Failure
    } else {
      formStatusMessage.value =
        'Ihre Anfrage wurde erfolgreich abgeschickt. Vielen Dank!'
      formStatus.value = FormStatus.Success
      resetFormFields()
    }
  }

  return {
    onSubmit,
    formStatusMessage,
    model: {
      email,
      name,
      message,
    },
  }
}
