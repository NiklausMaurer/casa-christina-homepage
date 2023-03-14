<script setup lang="ts">
import '@formkit/themes/genesis'
import { ref } from 'vue'

const email = ref<string>()
const name = ref<string>()
const message = ref<string>()
</script>

<template>
  <div class="container">
    <div>
      <form
        action="https://getform.io/f/e518cc71-8b90-4975-bcb7-f0f920819832"
        method="POST"
      >
        <FormKit
          v-model="name"
          label="Name"
          type="text"
          required="required"
          placeholder="Name"
        />
        <FormKit
          v-model="email"
          label="E-Mail"
          type="email"
          required="required"
          placeholder="Email"
        />
        <FormKit v-model="message" type="textarea" label="Nachricht" />
        <FormKit type="submit" label="Absenden" />
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
