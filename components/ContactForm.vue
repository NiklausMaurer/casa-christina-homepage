<script setup lang="ts">
import '@formkit/themes/genesis'
import { useContactForm } from '../composables/ContactForm.behavior'
import { useGetFormClient } from '../composables/GetFormClient.use'

const contactForm = useContactForm(useGetFormClient())
</script>

<template>
  <div class="container">
    <div v-if="contactForm.showForm.value">
      <form @submit.prevent="contactForm.onSubmit">
        <div class="form-wrapper">
          <div class="form-top">
            <div class="form-left">
              <FormKit
                v-model="contactForm.model.name.value"
                label="Name"
                type="text"
                required="required"
                placeholder="Name"
              />
            </div>
            <div class="form-right">
              <FormKit
                v-model="contactForm.model.email.value"
                label="E-Mail"
                type="email"
                required="required"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="form-top">
            <div class="form-left">
              <FormKit
                v-model="contactForm.model.arrivalDate.value"
                label="Gewünschte Anreise"
                :validation="`date_after:${contactForm.inOneWeek}`"
                type="date"
                @focusout="contactForm.onArrivalFocusOut"
              />
            </div>
            <div class="form-right">
              <FormKit
                v-model="contactForm.model.departureDate.value"
                label="Gewünschte Abreise"
                :validation="`date_after:${contactForm.model.arrivalDate.value}`"
                type="date"
              />
            </div>
          </div>
          <div class="form-bottom">
            <FormKit
              v-model="contactForm.model.message.value"
              type="textarea"
              label="Nachricht"
              rows="7"
            />
          </div>
        </div>
        <FormKit type="submit" />
      </form>
    </div>
    <div v-if="contactForm.formStatusMessage">
      {{ contactForm.formStatusMessage.value }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/styles/values';

.form-wrapper {
  display: flex;
  flex-direction: column;

  .form-top {
    display: flex;
    flex-direction: row;
  }

  .form-left {
    width: 50%;
  }

  .form-right {
    width: 50%;
  }

  .form-bottom {
    width: 100%;
  }
}

.container {
  margin: $spacing-s;
}
</style>
