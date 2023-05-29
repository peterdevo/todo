<script>
import { useModalStore } from '../stores/ModalStore'
export default {
  props: ['data', 'isAdded'],
  emits: ['update:project'],
  data: () => {
    return {
      modalStore: useModalStore()
    }
  },
  methods: {
    onSubmit(event) {
      this.$emit('onSubmit')
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="bg-gray-500 p-5 rounded">
      <label class="block text-white-700 text-sm font-bold mb-2"> Title </label>
      <input
        class="outline-0 border-b-2 bg-gray-500 text-lg block w-full p-2.5"
        v-model="data.title"
      />
      <label class="block text-white-700 text-sm font-bold mb-2"> Details </label>
      <textarea
        class="outline-0 border-b-2 bg-gray-500 text-lg block w-full p-2.5 my-3"
        rows="5"
        v-model="data.details"
      ></textarea>
    </div>
  </form>
</template>
