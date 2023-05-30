<script>
import { useModalStore } from '../stores/ModalStore'
export default {
  props: ['data'],
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
      <div class="flex  items-center">
        <input
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"
          type="checkbox"
          id="checkbox"
          v-model="data.isCompleted"
        />
        <label for="checkbox">{{ data.isCompleted ? 'Completed' : 'Ongoing' }}</label>
      </div>
    </div>
  </form>
</template>
