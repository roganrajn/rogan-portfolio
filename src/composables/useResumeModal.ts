import { ref } from 'vue'

const isOpen = ref(false)

export function useResumeModal() {
  const openResumeModal = () => {
    isOpen.value = true
  }

  const closeResumeModal = () => {
    isOpen.value = false
  }

  return {
    isOpen,
    openResumeModal,
    closeResumeModal,
  }
}
