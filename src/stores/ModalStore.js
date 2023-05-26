import { defineStore } from 'pinia'
import { markRaw } from 'vue'

export const useModalStore = defineStore('modalStore', {
  state: () => {
    return {
      isOpen: false,
      view: {},
      actions: [],
      props: {}
    }
  },
  getters: {
    isModalOpen: (state) => state.isOpen
  },
  actions: {
    openModal(view, props) {
      this.isOpen = true
      this.view = markRaw(view)
      this.props = props
    },
    closeModal() {
      this.isOpen = false
      this.view = {}
      this.actions = []
    }
  }
})
