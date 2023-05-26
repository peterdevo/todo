<script>
import { useProjectStore } from '../stores/ProjectStore'
import ProjectForm from '../components/ProjectForm.vue'
export default {
  data() {
    return {
      project: {
        id: '',
        title: '',
        details: ''
      },
      projectStore: useProjectStore()
    }
  },
  methods: {
    addNewProject(event) {
      this.projectStore.addProject({ ...this.project, id: crypto.randomUUID() })
      if (this.projectStore.$state.isProjectAdded) {
        this.resetForm(event)
      }
    },
    resetForm(event) {
      event.target.reset()
      this.project.id = ''
      this.project.title = ''
      this.project.details = ''
    }
  },
  computed: {
    isAdded() {
      if (this.projectStore.$state.isProjectAdded) {
        return true
      }
      return false
    }
  },
  components: {
    ProjectForm
  }
}
</script>

<template>
  <ProjectForm
    v-model:data="project"
    :isAdded="isAdded"
    :isFromCreatedComponent="true"
    @onSubmit="addNewProject"
  />
</template>
