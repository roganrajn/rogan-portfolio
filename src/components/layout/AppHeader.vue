<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import { useResumeModal } from '@/composables/useResumeModal'
import type { NavItem } from '@/types/portfolio'

defineProps<{
  navigation: NavItem[]
  activeSection: string
  name: string
}>()

const emit = defineEmits<{
  navigate: [id: string]
}>()

const { openResumeModal } = useResumeModal()
</script>

<template>
  <header class="no-print sticky top-0 z-50 border-b border-white/10 bg-surface/75 backdrop-blur-xl">
    <div class="section-container flex h-16 items-center justify-between gap-3 sm:gap-4">
      <button
        class="group min-w-0 text-left transition hover:text-accent"
        @click="emit('navigate', 'home')"
      >
        <span class="block truncate font-display text-sm font-bold tracking-wide text-text">
          {{ name }}
        </span>
        <span class="mt-0.5 block truncate text-xs text-text-muted transition group-hover:text-accent/80">
          Vue.js Engineer
        </span>
      </button>

      <nav
        class="hidden items-center gap-1 lg:flex xl:gap-1.5"
        aria-label="Primary"
      >
        <button
          v-for="item in navigation"
          :key="item.id"
          class="rounded-xl px-2.5 py-2 text-sm transition duration-300 xl:px-3"
          :class="
            activeSection === item.id
              ? 'bg-accent/10 text-accent shadow-inner shadow-accent/10'
              : 'text-text-muted hover:bg-white/5 hover:text-text'
          "
          @click="emit('navigate', item.id)"
        >
          {{ item.label }}
        </button>
      </nav>

      <div class="flex shrink-0 items-center gap-2 sm:gap-3">
        <BaseButton
          variant="secondary"
          class="hidden sm:inline-flex"
          @click="openResumeModal"
        >
          Resume
        </BaseButton>
        <button
          class="rounded-xl border border-white/10 px-3 py-2 text-sm text-text-muted transition hover:border-accent/40 hover:text-accent lg:hidden"
          aria-label="Open menu"
          @click="emit('navigate', '__toggle_menu__')"
        >
          Menu
        </button>
      </div>
    </div>
  </header>
</template>
