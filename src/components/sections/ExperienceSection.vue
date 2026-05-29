<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TimelineItem from '@/components/ui/TimelineItem.vue'
import type { PortfolioData } from '@/types/portfolio'

defineProps<{
  experience: PortfolioData['experience']
}>()
</script>

<template>
  <section
    id="experience"
    class="relative overflow-hidden border-b border-white/5 bg-surface-elevated/20 py-20 sm:py-24"
  >
    <div class="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
    <div class="section-container relative">
      <SectionHeading
        eyebrow="Experience"
        title="Professional journey"
        description="Impact-driven roles across enterprise platforms, banking, device management, and product modernization."
      />

      <div class="relative space-y-8 lg:space-y-10">
        <TimelineItem
          v-for="(item, index) in experience"
          :key="item.id"
          :item="item"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>
