<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import SocialLinks from '@/components/ui/SocialLinks.vue'
import { useResumeModal } from '@/composables/useResumeModal'
import type { PortfolioData } from '@/types/portfolio'
import { publicAsset } from '@/utils/assets'

const props = defineProps<{
  profile: PortfolioData['profile']
  socialLinks: PortfolioData['socialLinks']
  contact: PortfolioData['contact']
}>()

const { openResumeModal } = useResumeModal()

const photoSrc = computed(() => publicAsset(props.profile.photoUrl))

const emit = defineEmits<{
  navigate: [id: string]
}>()
</script>

<template>
  <section
    id="home"
    class="relative min-h-[calc(100vh-4rem)] overflow-hidden border-b border-white/5"
  >
    <div class="pointer-events-none absolute inset-0 mesh-glow" />
    <div class="pointer-events-none absolute inset-0 grid-overlay opacity-60" />
    <div class="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
    <div class="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

    <div class="section-container relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-12 sm:py-16 lg:py-20">
      <div class="hero-enter hero-enter-delay-1 mb-8 sm:mb-10">
        <p class="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          Selected Impact
        </p>
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <div
            v-for="item in profile.selectedImpact"
            :key="item.label"
            class="rounded-2xl border border-white/10 bg-surface-elevated/50 px-4 py-5 backdrop-blur-sm sm:px-5 sm:py-6"
          >
            <p class="text-xl">{{ item.icon }}</p>
            <p class="mt-3 font-display text-lg font-bold text-text sm:text-xl">{{ item.value }}</p>
            <p class="mt-1 text-xs uppercase tracking-wider text-text-muted">{{ item.label }}</p>
          </div>
        </div>
      </div>

      <div class="grid items-center gap-10 xl:grid-cols-[1.2fr_0.8fr] xl:gap-14">
        <div class="max-w-none xl:max-w-[44rem]">
          <div class="hero-enter hero-enter-delay-1 mb-5 inline-flex max-w-full items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-2 backdrop-blur-sm">
            <span class="text-xs font-medium leading-relaxed text-text sm:text-sm">
              {{ profile.branding }}
            </span>
          </div>

          <h1 class="hero-enter hero-enter-delay-2 font-display text-[2rem] font-extrabold leading-[1.12] tracking-tight text-text sm:text-4xl lg:text-[2.65rem] xl:text-[2.85rem]">
            <span
              v-for="(line, index) in profile.headlineLines"
              :key="line"
              class="block"
              :class="index === 1 ? 'gradient-text' : ''"
            >
              {{ line }}
            </span>
          </h1>

          <p class="hero-enter hero-enter-delay-3 mt-5 text-lg font-semibold text-text sm:text-xl">
            {{ profile.name }}
          </p>

          <p class="hero-enter hero-enter-delay-3 mt-4 max-w-[40rem] text-base leading-relaxed text-text-muted sm:text-lg">
            {{ profile.tagline }}
          </p>

          <div class="hero-enter hero-enter-delay-4 mt-6 rounded-2xl border border-white/10 bg-surface-elevated/40 px-4 py-4 sm:px-5">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Currently Exploring
            </p>
            <p class="mt-2 text-sm leading-relaxed text-text sm:text-base">
              {{ profile.currentlyExploring.join(' • ') }}
            </p>
          </div>

          <div class="hero-enter hero-enter-delay-4 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BaseButton
              size="lg"
              class="w-full sm:w-auto"
              @click="emit('navigate', 'experience')"
            >
              View Experience
            </BaseButton>
            <BaseButton
              size="lg"
              variant="secondary"
              class="w-full sm:w-auto"
              @click="openResumeModal"
            >
              View Resume
            </BaseButton>
            <BaseButton
              size="lg"
              variant="ghost"
              class="w-full sm:w-auto"
              @click="emit('navigate', 'contact')"
            >
              Let's Connect
            </BaseButton>
          </div>

          <div class="hero-enter hero-enter-delay-5 mt-8 sm:mt-10">
            <SocialLinks :links="socialLinks" />
          </div>
        </div>

        <div class="hero-enter hero-enter-delay-4 hero-float relative mx-auto w-full max-w-[320px] sm:max-w-sm xl:max-w-none">
          <div class="absolute inset-0 rounded-4xl bg-linear-to-br from-accent/20 via-transparent to-sky-500/10 blur-2xl" />
          <div class="glass-panel relative overflow-hidden p-5 sm:p-8">
            <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/70 to-transparent" />

            <div class="photo-frame relative mx-auto aspect-[4/5] max-w-[260px] overflow-hidden rounded-3xl border border-cyan-400/15 bg-surface-muted sm:max-w-[280px]">
              <img
                :src="photoSrc"
                :alt="`${profile.name} professional photo`"
                class="h-full w-full object-cover"
              />
              <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-[rgba(4,10,25,0.8)] to-transparent" />
            </div>

            <div class="mt-5 text-center sm:mt-6">
              <p class="font-display text-lg font-bold text-text sm:text-xl">{{ profile.name }}</p>
              <p class="mt-1 text-sm text-accent">{{ profile.title }}</p>
            </div>

            <p class="mt-4 text-center text-sm leading-relaxed text-text-muted">
              {{ profile.summary }}
            </p>

            <div class="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6">
              <span
                v-for="item in profile.highlights"
                :key="item"
                class="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        class="no-print hero-enter hero-enter-delay-6 mx-auto mt-10 flex flex-col items-center gap-2 text-text-muted transition hover:text-accent sm:mt-14"
        aria-label="Scroll to about section"
        @click="emit('navigate', 'about')"
      >
        <span class="text-xs uppercase tracking-[0.25em]">Explore</span>
        <span class="block h-10 w-6 rounded-full border border-white/15 p-1">
          <span
            class="mx-auto block h-2 w-1 rounded-full bg-accent"
            style="animation: scroll-indicator 1.8s ease-in-out infinite"
          />
        </span>
      </button>
    </div>
  </section>
</template>
