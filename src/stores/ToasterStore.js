import { defineStore } from 'pinia'
export const useToastStore = defineStore('toaster', {
  state: () => {
    return {
      msgObj: {
        msg: '',
        isActive: false
      }
    }
  },
  getters: {
    toasterObj: (state) => state.msgObj
  },
  actions: {
    success(msg) {
      this.msgObj.msg = msg
      this.timeMsg()
    },
    error(msg) {
      this.msg = msg
      this.timeMsg()
    },

    timeMsg() {
      this.msgObj.isActive = true
      setTimeout(() => {
        this.msgObj.isActive = false
      }, 1000)
    }
  }
})
