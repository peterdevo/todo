<script>
import { useProjectStore } from '../stores/ProjectStore'
import Project from '../components/Project.vue'
export default {
  data() {
    return {
      projectStore: useProjectStore()
    }
  },
  components: {
    Project
  }
}
</script>

<template>
  <div v-if="projectStore.isAnyProject" v-for="item of projectStore.projectObjs">
    <Project :projectObj="item" :key="item.id" />
  </div>
  <h1 v-else class="text-center text-6xl">There are no added projects</h1>
</template>
