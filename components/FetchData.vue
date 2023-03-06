<script setup lang="ts">
import {
  FetchDataState,
  FetchDataStateType,
} from '../composables/FetchData.use'

const props = defineProps<{
  state: FetchDataState<unknown>
}>()
</script>
<template>
  <slot v-if="props.state.type === FetchDataStateType.loading" name="loading">
    <p>Loading...</p>
  </slot>
  <slot
    v-if="props.state.type === FetchDataStateType.loaded"
    name="loaded"
    :data="props.state.data"
  >
    <pre>{{ JSON.stringify(props.state.data) }}</pre>
  </slot>
  <slot
    v-if="props.state.type === FetchDataStateType.error"
    name="error"
    :error="props.state.error"
  >
    <div>Es ist ein Fehler aufgetreten.</div>
  </slot>
</template>
