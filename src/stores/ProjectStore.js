import { defineStore } from 'pinia'
export const useProjectStore = defineStore('projectStore', {
  state: () => {
    return {
      projects: [],
      project: {
        id: '',
        title: '',
        details: ''
      },
      isProjectAdded: false,
      isProjectDelete: false
    }
  },
  getters: {
    projectObjs: (state) => state.projects,
    projectObj: (state) => state.project,
    isAnyProject: (state) => state.projects.length > 0
  },
  actions: {
    addProject(project) {
      this.projects.push({ ...project })
      this.isProjectAdded = true
      setTimeout(() => {
        this.isProjectAdded = false
      }, 1000)
    },
    deleteProject(id) {
      if (this.projects.length > 0) {
        this.projects = this.projects.filter((project) => project.id !== id)
      }
    }
  }
})
