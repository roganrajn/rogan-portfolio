<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import type { ProjectItem } from '@/types/portfolio'
import { publicAsset } from '@/utils/assets'

const props = defineProps<{
  project: ProjectItem
  index: number
  featured?: boolean
}>()

const imageError = ref(false)
const imageSrc = computed(() => publicAsset(props.project.image))

const themes = [
  { glow: 'group-hover:shadow-cyan-500/10', badge: 'bg-cyan-400/15 text-cyan-200' },
  { glow: 'group-hover:shadow-indigo-500/10', badge: 'bg-indigo-400/15 text-indigo-200' },
  { glow: 'group-hover:shadow-teal-500/10', badge: 'bg-teal-400/15 text-teal-200' },
  { glow: 'group-hover:shadow-amber-500/10', badge: 'bg-amber-400/15 text-amber-200' },
]

const theme = themes[props.index % themes.length]
</script>

<template>
  <ScrollReveal
    :delay="index * 100"
    direction="up"
  >
    <article
      class="group premium-card flex h-full flex-col overflow-hidden hover:-translate-y-2 hover:border-accent/20 hover:shadow-2xl"
      :class="theme.glow"
    >
      <div
        class="relative overflow-hidden bg-surface-muted"
        :class="featured ? 'h-52 sm:h-60' : 'h-48 sm:h-52'"
      >
        <img
          v-if="!imageError"
          :src="imageSrc"
          :alt="`${project.title} product mockup`"
          class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          loading="lazy"
          @error="imageError = true"
        />
        <div
          v-else
          class="flex h-full items-center justify-center bg-linear-to-br from-accent/10 to-sky-500/5 p-6 text-center text-sm text-text-muted"
        >
          Product mockup unavailable
        </div>
        <div class="absolute inset-0 bg-linear-to-t from-surface-elevated via-surface-elevated/15 to-transparent" />
        <div class="absolute left-5 top-5">
          <span
            class="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm"
            :class="theme.badge"
          >
            {{ featured ? 'Featured case study' : 'Case study' }}
          </span>
        </div>
        <div class="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p class="text-xs uppercase tracking-[0.25em] text-text-muted">Role</p>
          <p class="mt-1 text-sm font-medium text-text">{{ project.role }}</p>
          <h3 class="mt-3 font-display text-xl font-bold text-text sm:text-2xl">
            {{ project.title }}
          </h3>
        </div>
      </div>

      <div class="flex flex-1 flex-col gap-5 p-6 sm:p-7">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Challenge</p>
          <p class="mt-2 text-sm leading-relaxed text-text-muted sm:text-base">
            {{ project.challenge }}
          </p>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What I built</p>
          <p class="mt-2 text-sm leading-relaxed text-text-muted sm:text-base">
            {{ project.built }}
          </p>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Impact</p>
          <p class="mt-2 text-sm leading-relaxed text-text sm:text-base">
            {{ project.impact }}
          </p>
        </div>

        <div class="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-5">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="rounded-full border border-white/10 bg-surface-muted/70 px-3 py-1.5 text-xs font-medium text-text-muted transition group-hover:border-accent/20 group-hover:text-text"
          >
            {{ tag }}
          </span>
        </div>

        <div
          v-if="project.liveUrl || project.repoUrl"
          class="flex flex-wrap gap-3"
        >
          <BaseButton
            v-if="project.liveUrl"
            :href="project.liveUrl"
            variant="secondary"
            external
          >
            Live demo
          </BaseButton>
          <BaseButton
            v-if="project.repoUrl"
            :href="project.repoUrl"
            variant="ghost"
            external
          >
            Source code
          </BaseButton>
        </div>
      </div>
    </article>
  </ScrollReveal>
</template>
