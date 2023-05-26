<script>
import { useModalStore } from '../stores/ModalStore'
export default {
  data() {
    return {
      modalStore: useModalStore()
    }
  },
}
</script>
<template>
  <div :class="modalStore.isModalOpen ? 'modal' : 'none-modal'">
    <component :is="modalStore.view" :data="modalStore.props"></component>
  </div>
</template>

<style>
.modal {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid;
}
.none-modal {
  display: none;
}
</style>
