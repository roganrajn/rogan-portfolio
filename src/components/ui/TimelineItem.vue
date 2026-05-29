<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import type { ExperienceItem } from '@/types/portfolio'

const props = defineProps<{
  item: ExperienceItem
  index: number
}>()

const accentPalette = [
  'from-cyan-400/20 to-blue-500/5',
  'from-sky-400/20 to-indigo-500/5',
  'from-teal-400/20 to-cyan-500/5',
  'from-blue-400/20 to-slate-500/5',
]

const accentClass = accentPalette[props.index % accentPalette.length]
const periodYear = props.item.period.split('—')[0]?.trim() ?? props.item.period
</script>

<template>
  <ScrollReveal
    :delay="index * 120"
    :direction="index % 2 === 0 ? 'left' : 'right'"
  >
    <article class="group relative pl-0 lg:pl-12">
      <div class="absolute left-4 top-0 hidden h-full w-px bg-linear-to-b from-accent/70 via-border/80 to-transparent lg:block" />
      <div class="absolute left-[0.95rem] top-8 hidden h-3 w-3 rounded-full border-2 border-accent bg-surface shadow-[0_0_0_6px_rgba(34,211,238,0.12)] lg:block" />

      <div
        class="premium-card overflow-hidden p-5 sm:p-8 group-hover:-translate-y-1 group-hover:border-accent/25 group-hover:shadow-2xl group-hover:shadow-accent/10"
      >
        <div
          class="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b opacity-80"
          :class="accentClass"
        />

        <div class="relative flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div class="max-w-2xl">
            <div class="mb-3 flex flex-wrap items-center gap-3">
              <span class="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                {{ periodYear }}
              </span>
              <span class="text-xs uppercase tracking-[0.2em] text-text-muted">
                {{ item.location }}
              </span>
            </div>
            <h3 class="font-display text-xl font-bold text-text sm:text-2xl">
              {{ item.role }}
            </h3>
            <p class="mt-1 text-base font-medium text-accent">
              {{ item.company }}
            </p>
          </div>

          <div class="rounded-2xl border border-white/10 bg-surface/60 px-4 py-3 text-sm text-text-muted backdrop-blur-sm lg:text-right">
            <p class="font-medium text-text">{{ item.period }}</p>
            <p class="mt-1">{{ item.location }}</p>
          </div>
        </div>

        <div
          v-if="item.impactTags.length"
          class="relative mt-5 rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-4"
        >
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Impact
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="tag in item.impactTags"
              :key="tag"
              class="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-100"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <p class="relative mt-5 text-base leading-relaxed text-text-muted">
          {{ item.summary }}
        </p>

        <ul class="relative mt-6 space-y-3">
          <li
            v-for="highlight in item.highlights"
            :key="highlight"
            class="flex gap-3 text-sm leading-relaxed text-text-muted sm:text-base"
          >
            <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{{ highlight }}</span>
          </li>
        </ul>

        <div class="relative mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-6">
          <span
            v-for="tech in item.tech"
            :key="tech"
            class="rounded-full border border-white/10 bg-surface-muted/70 px-3 py-1.5 text-xs font-medium text-text-muted transition group-hover:border-accent/20 group-hover:text-text"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </article>
  </ScrollReveal>
</template>
