<script setup lang="ts">
import '@formkit/themes/genesis'
import { useContactForm } from '../composables/ContactForm.behavior'
import { useGetFormClient } from '../composables/GetFormClient.use'

const contactForm = useContactForm(useGetFormClient())
</script>

<template>
  <div class="container">
    <div>
      <form @submit.prevent="contactForm.onSubmit">
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
          v-model="contactForm.model.message.value"
          type="textarea"
          label="Nachricht"
        />
        <FormKit type="submit" label="Absenden" />
        <div>{{ contactForm.formStatusMessage.value }}</div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/styles/values';

.container {
  margin: $spacing-s;
}
</style>
