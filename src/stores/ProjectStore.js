import { defineStore } from 'pinia'
import { useToastStore } from './ToasterStore'
import {
  addApiProject,
  deleteApiProject,
  getApiProjects,
  updateApiProject
} from '../services/ProjectService'
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
    async getProjects() {
      this.projects = (await getApiProjects()).data
    },
    async addProject(project) {
      try {
        await addApiProject(project)
        this.toasterStore.success('Successfully added')
      } catch (error) {
        this.toasterStore.error('Failed to add project')
      }
    },
    async deleteProject(id) {
      try {
        await deleteApiProject(id)
        this.projects = this.projects.filter((project) => project.id !== id)
        this.toasterStore.success('Successfully deleted')
      } catch (error) {
        this.toasterStore.success('Failed to delete project')
      }
    },
    async updateProject(project) {
      const data = (await updateApiProject(project)).data
      const index = this.projects.findIndex((p) => p.id == data.id)
      if (index === -1) {
        return
      }
      this.projects[index] = data
      this.toasterStore.success('Successfully updated')
    }
  }
})
