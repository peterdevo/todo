<script>
import { useModalStore } from '../stores/ModalStore'
export default {
  data() {
    return {
      modalStore: useModalStore()
    }
  }
}
</script>
<template>
  <div :class="modalStore.isModalOpen ? 'modal' : 'none-modal'">
    <div class="flex justify-center h-full mt-20">
      <div class="w-3/6 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10 cursor-pointer absolute right-0 top-0"
          @click="modalStore.closeModal()"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <component :is="modalStore.view" :data="modalStore.props" ></component>
        <button
          @click="modalStore.modalAction.callback(modalStore.props)"
          class="bg-green-800 text-white font-bold py-2 px-4 my-1 rounded"
        >
          {{ modalStore.modalAction.label }}
        </button>
      </div>
    </div>
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
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
}
.none-modal {
  display: none;
}
</style>
