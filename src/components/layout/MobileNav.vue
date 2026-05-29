<script setup lang="ts">
import type { NavItem } from '@/types/portfolio'

defineProps<{
  navigation: NavItem[]
  activeSection: string
  open: boolean
}>()

const emit = defineEmits<{
  navigate: [id: string]
  close: []
}>()
</script>

<template>
  <Transition name="fade">
    <div
      v-if="open"
      class="fixed inset-0 z-40 bg-black/60 lg:hidden"
      @click="emit('close')"
    />
  </Transition>

  <Transition name="slide">
    <aside
      v-if="open"
      class="fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-border bg-surface-elevated p-6 lg:hidden"
      aria-label="Mobile navigation"
    >
      <div class="mb-8 flex items-center justify-between">
        <span class="font-semibold text-text">Navigate</span>
        <button
          class="rounded-lg px-3 py-1 text-sm text-text-muted hover:text-accent"
          @click="emit('close')"
        >
          Close
        </button>
      </div>

      <nav class="flex flex-col gap-2">
        <button
          v-for="item in navigation"
          :key="item.id"
          class="rounded-xl px-4 py-3 text-left text-sm transition"
          :class="
            activeSection === item.id
              ? 'bg-accent/10 text-accent'
              : 'text-text-muted hover:bg-surface-muted hover:text-text'
          "
          @click="emit('navigate', item.id)"
        >
          {{ item.label }}
        </button>
      </nav>
    </aside>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
