<script setup lang="ts">
import '@formkit/themes/genesis'
import { useContactForm } from '../composables/ContactForm.behavior'
import { useGetFormClient } from '../composables/GetFormClient.use'

const contactForm = useContactForm(useGetFormClient())
</script>

<template>
  <div class="form-container">
    <div v-if="contactForm.showForm.value">
      <form @submit.prevent="contactForm.onSubmit">
        <div class="form-wrapper">
          <FormKit
            v-model="contactForm.model.name.value"
            label="Name"
            type="text"
            required="required"
            placeholder="Name"
          />
          <FormKit
            v-model="contactForm.model.email.value"
            label="E-Mail"
            type="email"
            required="required"
            placeholder="Email"
          />
          <FormKit
            v-model="contactForm.model.arrivalDate.value"
            label="Gewünschte Anreise"
            :validation="`date_after:${contactForm.inOneWeek}`"
            type="date"
            @focusout="contactForm.onArrivalFocusOut"
          />
          <FormKit
            v-model="contactForm.model.departureDate.value"
            label="Gewünschte Abreise"
            :validation="`date_after:${contactForm.model.arrivalDate.value}`"
            type="date"
          />
          <FormKit
            v-model="contactForm.model.message.value"
            type="textarea"
            label="Nachricht"
            rows="7"
          />
          <FormKit type="submit" />
        </div>
      </form>
    </div>
    <div v-if="contactForm.formStatusMessage">
      {{ contactForm.formStatusMessage.value }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/styles/values';
@import '/assets/styles/colors';

.form-container {
  .form-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-s;
    :deep(.formkit-outer) {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      .formkit-wrapper {
        flex: 1 1 auto;
        min-width: 280px;
        max-width: 100%;
      }
      &[data-type='textarea'] {
        width: 100%;
        &.formkit-wrapper {
          width: 100%;
        }
      }
    }
    :deep(.formkit-input) {
      border: 2px solid $light-blue;
      box-shadow: none;
      &:focus-within {
        border: 3px solid $accent;
      }
    }
    :deep(.formkit-inner) {
      width: 100%;
      box-shadow: none;
    }
    :deep([data-type='submit']) {
      button {
        background: $light-blue;
        border: none;
        box-shadow: none;
        &:hover {
          background: $accent;
        }
      }
    }
  }
}

/*.form-wrapper {
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
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
  margin: 0;
}*/
</style>
