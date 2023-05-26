import { createRouter, createWebHistory } from 'vue-router'
import Projects from '../views/Projects.vue'
import NewProject from '../views/NewProject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/newproject',
      name: 'new project',
      component: NewProject
    }

  ]
})

export default router
