<script>
import { useProjectStore } from '../stores/ProjectStore'
import Project from '../components/Project.vue'
export default {
  data() {
    return {
      projectStore: useProjectStore(),
      copiedProject: {}
    }
  },
  mounted() {
    this.copiedProject = this.projectStore.projectObjs
  },
  methods: {
    filterProjects(state) {
      if (state === 'completed') {
        this.copiedProject = this.projectStore.projectObjs.filter((p) => p.isCompleted)
      } else if (state === 'ongoing') {
        this.copiedProject = this.projectStore.projectObjs.filter((p) => !p.isCompleted)
      } else {
        this.copiedProject = this.projectStore.projectObjs
      }
    }
  },

  components: {
    Project
  }
}
</script>

<template>
  <div class="flex justify-evenly mb-5">
    <span @click="filterProjects('none')" class="cursor-pointer">ALL</span>
    <span @click="filterProjects('completed')" class="cursor-pointer">COMPLETED</span>
    <span @click="filterProjects('ongoing')" class="cursor-pointer">ONGOING</span>
  </div>
  <div v-if="projectStore.isAnyProject" v-for="item of copiedProject">
    <Project :projectObj="item" :key="item.id" />
  </div>
  <h1 v-else class="text-center text-6xl">There are no added projects</h1>
</template>
