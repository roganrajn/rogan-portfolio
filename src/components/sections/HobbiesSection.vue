<script setup lang="ts">
import { ref } from 'vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { PortfolioData } from '@/types/portfolio'
import { publicAsset } from '@/utils/assets'

defineProps<{
  hobbies: PortfolioData['hobbies']
}>()

const imageErrors = ref<Record<string, boolean>>({})

const onImageError = (id: string) => {
  imageErrors.value[id] = true
}
</script>

<template>
  <section
    id="hobbies"
    class="border-b border-white/5 py-20 sm:py-24"
  >
    <div class="section-container">
      <SectionHeading
        eyebrow="Hobbies"
        title="Outside of work"
        description="Sports, reading, and creative pursuits that keep me balanced and inspired."
      />

      <div class="grid auto-rows-fr gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <ScrollReveal
          v-for="(hobby, index) in hobbies"
          :key="hobby.id"
          class="h-full"
          :delay="index * 80"
          direction="up"
        >
          <article
            class="group flex h-full min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/60 shadow-lg shadow-black/20 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,200,255,0.12)] sm:min-h-[24rem]"
          >
            <div class="relative h-44 shrink-0 overflow-hidden sm:h-48">
              <img
                v-if="hobby.image && !imageErrors[hobby.id]"
                :src="publicAsset(hobby.image)"
                :alt="`${hobby.name} photo`"
                class="h-full w-full object-cover transition duration-300 ease-out group-hover:scale-[1.03]"
                loading="lazy"
                @error="onImageError(hobby.id)"
              />
              <div
                v-else
                class="flex h-full items-center justify-center bg-linear-to-br from-accent/10 to-sky-500/5 text-4xl"
              >
                {{ hobby.icon ?? '🎯' }}
              </div>
              <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-surface-elevated via-transparent to-transparent" />
            </div>

            <div class="flex flex-1 flex-col justify-between p-6 text-center">
              <h3 class="font-display text-lg font-semibold text-text">
                {{ hobby.name }}
              </h3>
              <p class="text-sm leading-relaxed text-text-muted">
                {{ hobby.description }}
              </p>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
