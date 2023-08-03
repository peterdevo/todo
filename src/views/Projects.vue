<script>
import { useProjectStore } from '../stores/ProjectStore'
import Project from '../components/Project.vue'
import { storeToRefs } from 'pinia'

export default {
  data() {
    return {
      projectStore: useProjectStore(),
      copiedProjects: [],
      activeLink: '',
      storeRef: storeToRefs(useProjectStore())
    }
  },
  async mounted() {
    this.projectStore.getProjects()
    this.activeLink = 'none'
  },

  methods: {
    filterProjects(state) {
      if (state === 'completed') {
        this.copiedProjects = this.projectStore.projectObjs.filter((p) => p.isCompleted)
        this.activeLink = 'completed'
      } else if (state === 'ongoing') {
        this.copiedProjects = this.projectStore.projectObjs.filter((p) => !p.isCompleted)
        this.activeLink = 'ongoing'
      } else {
        this.copiedProjects = this.projectStore.projectObjs
        this.activeLink = 'none'
      }
      
    }
  },
  watch: {
    'storeRef.projects': {
      handler() {
        this.filterProjects(this.activeLink)
      },
      deep: true
    }
  },

  components: {
    Project
  }
}
</script>

<template>
  <div class="flex gap-5 mb-5">
    <span
      :class="activeLink === 'none' ? 'text-1xl font-bold drop-shadow' : ''"
      @click="filterProjects('none')"
      class="cursor-pointer"
      >ALL</span
    >
    <span
      :class="activeLink === 'completed' ? 'text-1xl font-bold drop-shadow' : ''"
      @click="filterProjects('completed')"
      class="cursor-pointer"
      >COMPLETED</span
    >
    <span
      :class="activeLink === 'ongoing' ? 'text-1xl font-bold drop-shadow' : ''"
      @click="filterProjects('ongoing')"
      class="cursor-pointer"
      >ONGOING</span
    >
  </div>
  <div v-if="projectStore.isAnyProject" v-for="item of copiedProjects">
    <Project :projectObj="item" :key="item.id" />
  </div>
  <h1 v-else class="text-center text-6xl">There are no added projects</h1>
</template>
