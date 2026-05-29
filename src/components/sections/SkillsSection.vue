<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { PortfolioData } from '@/types/portfolio'

defineProps<{
  skills: PortfolioData['skills']
}>()

const tierStyles: Record<
  PortfolioData['skills'][number]['tier'],
  { badge: string; chip: string }
> = {
  Expert: {
    badge: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200',
    chip: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-100',
  },
  Advanced: {
    badge: 'border-sky-400/30 bg-sky-400/10 text-sky-200',
    chip: 'border-sky-400/20 bg-sky-400/10 text-sky-100',
  },
  Engineering: {
    badge: 'border-violet-400/30 bg-violet-400/10 text-violet-200',
    chip: 'border-violet-400/20 bg-violet-400/10 text-violet-100',
  },
  Familiar: {
    badge: 'border-slate-400/30 bg-slate-400/10 text-slate-200',
    chip: 'border-white/10 bg-surface-muted/70 text-text-muted',
  },
}
</script>

<template>
  <section
    id="skills"
    class="relative overflow-hidden border-b border-white/5 py-20 sm:py-24"
  >
    <div class="section-container">
      <SectionHeading
        eyebrow="Skills"
        title="Technical proficiency"
        description="Senior-engineer skill grouping — no subjective percentages, just clear depth across the stack."
      />

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <ScrollReveal
          v-for="(group, index) in skills"
          :key="`${group.tier}-${index}`"
          :delay="index * 100"
          direction="up"
        >
          <article class="premium-card h-full p-6 sm:p-8 hover:-translate-y-1 hover:border-accent/20">
            <div
              class="inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]"
              :class="tierStyles[group.tier].badge"
            >
              {{ group.groupName ?? group.tier }}
            </div>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="skill in group.skills"
                :key="skill"
                class="rounded-full border px-3 py-2 text-sm font-medium"
                :class="tierStyles[group.tier].chip"
              >
                {{ skill }}
              </span>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
