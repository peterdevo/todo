<script>
import { RouterView } from 'vue-router'
import NavigationLink from './components/NavigationLinks.vue'
import Modal from './components/Modal.vue'
export default {
  components: {
    NavigationLink,
    Modal
  }
}
</script>

<template>
  <div id="app">
    <Modal />
    <NavigationLink />
    <div class="flex justify-center h-full mt-20">
      <div class="w-3/6">
        <RouterView />
      </div>
    </div>
  </div>
</template>
