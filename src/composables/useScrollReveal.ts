import { onMounted, onUnmounted, ref, type Ref } from 'vue'

type ScrollRevealOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollReveal(
  target: Ref<HTMLElement | null>,
  options: ScrollRevealOptions = {},
) {
  const isVisible = ref(false)
  const { threshold = 0.12, rootMargin = '0px 0px -48px 0px', once = true } = options

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          if (once) observer?.disconnect()
        } else if (!once) {
          isVisible.value = false
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(target.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { isVisible }
}
