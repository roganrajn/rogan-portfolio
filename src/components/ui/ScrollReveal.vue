<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

withDefaults(
  defineProps<{
    delay?: number
    direction?: 'up' | 'left' | 'right' | 'scale'
  }>(),
  {
    delay: 0,
    direction: 'up',
  },
)

const root = ref<HTMLElement | null>(null)
const { isVisible } = useScrollReveal(root)
</script>

<template>
  <div
    ref="root"
    class="scroll-reveal"
    :class="[
      `scroll-reveal--${direction}`,
      { 'scroll-reveal--visible': isVisible },
    ]"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template>
