<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { PortfolioData } from '@/types/portfolio'
import { publicAsset } from '@/utils/assets'

defineProps<{
  hobbies: PortfolioData['hobbies']
}>()
</script>

<template>
  <section
    id="hobbies"
    class="border-b border-border/40 py-20"
  >
    <div class="section-container">
      <SectionHeading
        eyebrow="Hobbies"
        title="Outside of work"
        description="Sports, reading, and creative pursuits that keep me balanced and inspired."
      />

      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <BaseCard
          v-for="hobby in hobbies"
          :key="hobby.id"
          hover
          class="overflow-hidden p-0 text-center"
        >
          <div class="relative h-36 overflow-hidden bg-gradient-to-br from-accent/10 via-surface-muted to-sky-500/10">
            <img
              v-if="hobby.image"
              :src="publicAsset(hobby.image)"
              :alt="`${hobby.name} illustration`"
              class="h-full w-full object-cover p-6"
            />
            <div
              v-else
              class="flex h-full items-center justify-center text-4xl"
            >
              {{ hobby.icon }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-text">{{ hobby.name }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-text-muted">
              {{ hobby.description }}
            </p>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>
