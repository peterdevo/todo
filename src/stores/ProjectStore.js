import { defineStore } from 'pinia'
export const useProjectStore = defineStore('projectStore', {
  state: () => {
    return {
      projects: [],
      isAdded: false,
      isProjectDelete: false
    }
  },
  getters: {
    projectObjs: (state) => state.projects,
    isProjectAdded: (state) => state.isAdded,
    isAnyProject: (state) => state.projects.length > 0
  },
  actions: {
    addProject(project) {
      this.projects.push({ ...project })
      this.isAdded = true
      setTimeout(() => {
        this.isAdded = false
      }, 1000)
    },
    deleteProject(id) {
      if (this.projects.length > 0) {
        this.projects = this.projects.filter((project) => project.id !== id)
      }
    },
    updateProject(project) {
      const index = this.projects.findIndex((p) => p.id == project.id)
      if (index !== -1) {
        this.projects[index] = project
      }
    }
  }
})
