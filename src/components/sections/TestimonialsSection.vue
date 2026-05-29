<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { PortfolioData } from '@/types/portfolio'

defineProps<{
  testimonials: PortfolioData['testimonials']
}>()
</script>

<template>
  <section
    id="testimonials"
    class="relative overflow-hidden border-b border-white/5 bg-surface-elevated/20 py-20 sm:py-24"
  >
    <div class="section-container relative">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by engineering leaders"
        description="Replace these placeholder quotes with real feedback from your manager, tech lead, or architect."
        align="center"
      />

      <div class="grid gap-6 lg:grid-cols-3">
        <ScrollReveal
          v-for="(item, index) in testimonials"
          :key="item.id"
          :delay="index * 100"
          direction="up"
        >
          <figure class="premium-card flex h-full flex-col p-6 sm:p-8 hover:-translate-y-1 hover:border-accent/20">
            <blockquote class="flex-1 text-base leading-relaxed text-text sm:text-lg">
              “{{ item.quote }}”
            </blockquote>
            <figcaption class="mt-6 border-t border-white/10 pt-6">
              <p class="font-semibold text-text">{{ item.author }}</p>
              <p class="mt-1 text-sm text-accent">{{ item.role }} · {{ item.company }}</p>
              <p
                v-if="item.placeholder"
                class="mt-3 text-xs uppercase tracking-wider text-text-muted"
              >
                Placeholder — add real testimonial
              </p>
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
