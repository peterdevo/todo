<script>
import { useProjectStore } from '../stores/ProjectStore'
export default {
  data() {
    return {
      project: {
        id: '',
        title: '',
        details: '',
        isCompleted: false,
        created: new Date()
      },
      projectStore: useProjectStore()
    }
  },
  methods: {
    onSubmit(event) {
      this.projectStore.addProject({ ...this.project, id: crypto.randomUUID() })
      this.reset(event)
    },

    reset(event) {
      this.project.id = ''
      this.project.title = ''
      this.project.details = ''
      this.project.isCompleted = false
      event.target.reset()
    }
  },

}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="bg-gray-500 p-5 rounded">
      <label class="block text-white-700 text-sm font-bold mb-2"> Title </label>
      <input
        class="outline-0 border-b-2 bg-gray-500 text-lg block w-full p-2.5"
        v-model="project.title"
      />
      <label class="block text-white-700 text-sm font-bold mb-2"> Details </label>
      <textarea
        class="outline-0 border-b-2 bg-gray-500 text-lg block w-full p-2.5 my-3"
        rows="5"
        v-model="project.details"
      ></textarea>
      <button type="submit" class="bg-green-800 text-white font-bold py-2 px-4 rounded">
        Add project
      </button>
    </div>
  </form>
</template>
