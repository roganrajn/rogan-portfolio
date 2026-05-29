<script setup lang="ts">
import type { SocialLink } from '@/types/portfolio'

defineProps<{
  name: string
  socialLinks: SocialLink[]
}>()

const year = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="no-print border-t border-white/10 bg-surface-elevated/60">
    <div class="section-container py-10">
      <div class="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-start">
        <div class="text-center lg:text-left">
          <p class="font-display text-base font-semibold text-text">
            Designed and developed by {{ name }}
          </p>
          <p class="mt-2 text-sm text-text-muted">
            Built with Vue 3, TypeScript & Tailwind CSS
          </p>
          <p class="mt-1 text-sm text-text-muted">
            © {{ year }} {{ name }}. All rights reserved.
          </p>
        </div>

        <div class="flex flex-col items-center gap-4 lg:items-end">
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-text-muted transition hover:text-accent"
            >
              {{ link.label }}
            </a>
          </div>
          <button
            class="text-sm text-text-muted transition hover:text-accent"
            @click="scrollToTop"
          >
            Back to top
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
