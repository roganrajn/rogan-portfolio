<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { PortfolioData } from '@/types/portfolio'

defineProps<{
  achievements: PortfolioData['achievements']
}>()

const categoryStyles: Record<string, string> = {
  'Enterprise Contributions': 'bg-cyan-400/10 text-cyan-200 border-cyan-400/20',
  'Security Research': 'bg-violet-400/10 text-violet-200 border-violet-400/20',
}
</script>

<template>
  <section
    id="achievements"
    class="border-b border-white/5 py-20 sm:py-24"
  >
    <div class="section-container">
      <SectionHeading
        eyebrow="Impact"
        title="Achievements that stand out"
        description="Enterprise modernization, banking platform delivery, and rare security research experience."
      />

      <div class="grid gap-6 lg:grid-cols-3">
        <ScrollReveal
          v-for="(item, index) in achievements"
          :key="item.id"
          :delay="index * 100"
          direction="up"
        >
          <article class="premium-card flex h-full flex-col p-6 sm:p-8 hover:-translate-y-1 hover:border-accent/20">
            <div class="mb-4 flex items-start justify-between gap-4">
              <span
                class="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                :class="categoryStyles[item.category] ?? 'bg-accent/10 text-accent border-accent/20'"
              >
                {{ item.category }}
              </span>
              <span class="shrink-0 text-xs text-text-muted">{{ item.date }}</span>
            </div>

            <h3 class="font-display text-xl font-bold text-text">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-sm text-accent">{{ item.organization }}</p>
            <p class="mt-4 text-sm leading-relaxed text-text-muted">
              {{ item.description }}
            </p>

            <ul
              v-if="item.highlights?.length"
              class="mt-6 space-y-3 border-t border-white/10 pt-6"
            >
              <li
                v-for="highlight in item.highlights"
                :key="highlight"
                class="flex gap-3 text-sm leading-relaxed text-text-muted"
              >
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </article>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
