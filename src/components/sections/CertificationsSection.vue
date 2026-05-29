<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { PortfolioData } from '@/types/portfolio'

defineProps<{
  certifications: PortfolioData['certifications']
}>()
</script>

<template>
  <section
    id="certifications"
    class="border-b border-border/40 bg-surface-elevated/20 py-20"
  >
    <div class="section-container">
      <SectionHeading
        eyebrow="Education"
        title="Academic background"
        description="Formal education and foundational training in computer science."
      />

      <div class="grid gap-6 md:grid-cols-2">
        <BaseCard
          v-for="cert in certifications"
          :key="cert.id"
          hover
        >
          <div class="flex h-full flex-col">
            <p class="text-sm text-accent">{{ cert.issuer }}</p>
            <h3 class="mt-2 text-lg font-semibold text-text">{{ cert.name }}</h3>
            <p class="mt-2 text-sm text-text-muted">Graduated {{ cert.date }}</p>
            <div
              v-if="cert.credentialUrl"
              class="mt-6"
            >
              <BaseButton
                :href="cert.credentialUrl"
                variant="secondary"
                external
              >
                View credential
              </BaseButton>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>
