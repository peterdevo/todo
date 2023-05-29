<script>
import { useToastStore } from '../stores/ToasterStore'
export default {
  data: () => {
    return {
      toasterStore: useToastStore()
    }
  }
}
</script>

<template>
  <div v-if="toasterStore.toasterObj.isActive" class="toaster font-bold">
    {{ toasterStore.toasterObj.msg }}
  </div>
</template>

<style scoped>
.toaster {
  position: absolute;
  z-index: 2;
  right: 0px;
  top: 2px;
  overflow: hidden;
  background-color: green;
  text-align: center;
  padding: 10px;
}
</style>
