<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { PortfolioData } from '@/types/portfolio'

defineProps<{
  about: PortfolioData['about']
}>()
</script>

<template>
  <section
    id="about"
    class="border-b border-border/40 py-20"
  >
    <div class="section-container">
      <SectionHeading
        eyebrow="About"
        title="Background & approach"
        description="A quick overview of who I am, how I work, and what I bring to a team."
      />

      <div class="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <div class="space-y-4 text-base leading-relaxed text-text-muted">
          <p
            v-for="paragraph in about.bio"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="glass-panel p-6">
          <h3 class="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            Quick facts
          </h3>
          <dl class="space-y-4">
            <div
              v-for="fact in about.facts"
              :key="fact.label"
              class="flex items-start justify-between gap-4 border-b border-border/50 pb-4 last:border-b-0 last:pb-0"
            >
              <dt class="text-sm text-text-muted">{{ fact.label }}</dt>
              <dd class="text-right text-sm font-medium text-text">{{ fact.value }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
