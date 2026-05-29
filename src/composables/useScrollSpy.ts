import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export function useScrollSpy(sectionIds: Ref<string[]> | string[]) {
  const activeSection = ref('home')

  const getIds = () => ('value' in sectionIds ? sectionIds.value : sectionIds)

  const updateActiveSection = () => {
    const ids = getIds()
    const offset = 120
    let current = ids[0] ?? 'home'

    for (const id of ids) {
      const element = document.getElementById(id)
      if (!element) continue

      const top = element.getBoundingClientRect().top
      if (top - offset <= 0) {
        current = id
      }
    }

    activeSection.value = current
  }

  onMounted(() => {
    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return {
    activeSection,
    scrollToSection,
  }
}
