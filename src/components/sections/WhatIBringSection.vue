<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'

defineProps<{
  items: string[]
}>()
</script>

<template>
  <section
    id="what-i-bring"
    class="relative overflow-hidden border-b border-white/5 bg-surface-elevated/20 py-20 sm:py-24"
  >
    <div class="pointer-events-none absolute inset-0 grid-overlay opacity-25" />
    <div class="section-container relative">
      <SectionHeading
        eyebrow="What I Bring"
        title="What I bring to teams"
        description="A quick scan of the value I bring to senior frontend and Vue.js engineering teams."
      />

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ScrollReveal
          v-for="(item, index) in items"
          :key="item"
          :delay="index * 80"
          direction="up"
        >
          <div class="premium-card flex h-full items-start gap-4 p-5 hover:-translate-y-1 hover:border-accent/25">
            <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-sm font-bold text-accent">
              ✓
            </span>
            <p class="text-base font-medium leading-relaxed text-text">
              {{ item }}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
