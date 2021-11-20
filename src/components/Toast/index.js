import Component from './Toast.vue'
import { ref, provide } from 'vue'

const stack = ref([])
const toast = (message, duration = 2000) => {
  stack.value.push({ message, id: Date.now() })

  setTimeout(() => {
    stack.value.shift()
  }, duration)
}

export default function () {
  provide('toastStack', stack)
  provide('toast', toast)

  return Component
}