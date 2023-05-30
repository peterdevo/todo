import { defineStore } from 'pinia'
import { useToastStore } from './ToasterStore'
export const useProjectStore = defineStore('projectStore', {
  state: () => {
    return {
      projects: [],
      isProjectDelete: false,
      toasterStore: useToastStore()
    }
  },
  getters: {
    projectObjs: (state) => state.projects,
    isAnyProject: (state) => state.projects.length > 0
  },
  actions: {
    addProject(project) {
      this.projects.push({ ...project })
      this.toasterStore.success('Successfully added')
    },
    deleteProject(id) {
      if (this.projects.length > 0) {
        this.projects = this.projects.filter((project) => project.id !== id)
      }
    },
    updateProject(project) {
      const index = this.projects.findIndex((p) => p.id == project.id)
      if (index === -1) {
        return
      }
      this.projects[index] = project
      this.toasterStore.success('Successfully updated')
    }
  }
})
