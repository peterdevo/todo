<template>
  <div class="nav italic text-2xl">
    <RouterLink to="/projects" active-class="isActive">Projects</RouterLink>
    <RouterLink to="/newproject" active-class="isActive">Add project</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

</script>

<style scoped>
.nav {
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
}
.isActive {
  border-bottom: 2px solid green;
}
</style>
