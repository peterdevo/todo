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
      try {
        const { result } = (await getApiProjects()).data
        this.projects = result
      } catch (error) {
        this.toasterStore.error('Failed to get projects')
      }
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
      const { result } = (await updateApiProject(project)).data
      console.log(result)
      const index = this.projects.findIndex((p) => p.id == result.id)
      if (index === -1) {
        return
      }
      this.projects[index] = result
      this.toasterStore.success('Successfully updated')
    }
  }
})
