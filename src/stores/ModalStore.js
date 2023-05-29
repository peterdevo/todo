import { defineStore } from 'pinia'
import { markRaw } from 'vue'

export const useModalStore = defineStore('modalStore', {
  state: () => {
    return {
      isOpen: false,
      view: {},
      action: {},
      props: {}
    }
  },
  getters: {
    isModalOpen: (state) => state.isOpen,
    modalAction: (state) => state.action
  },
  actions: {
    openModal(view, props, action) {
      this.isOpen = true
      this.view = markRaw(view)
      this.props = props
      this.action = action
    },
    closeModal() {
      this.isOpen = false
      this.view = {}
      this.action = {}
    }
  }
})
