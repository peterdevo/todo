<script>
export default {
  props: ['data', 'isAdded', 'isFromCreatedComponent'],
  emits: ['update:project'],
  methods: {
    onSubmit(event) {
      this.$emit('onSubmit', event)
    }
  },
  computed: {
    isFromCreatedComponent() {
      if (this.isFromCreatedComponent) {
        return true
      }
      return false
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
      <button type="submit" class="bg-green-800 text-white font-bold py-2 px-4 rounded">
        {{ isFromCreatedComponent ? 'Add project' : 'Update project' }}
      </button>
      <div v-if="isAdded && isFromCreatedComponent" class="bg-green-500 text-center">
        Sucessfully added
      </div>
    </div>
  </form>
</template>
