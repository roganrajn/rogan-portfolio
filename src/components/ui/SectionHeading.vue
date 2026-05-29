<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

defineProps<{
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <ScrollReveal class="mb-12">
    <div :class="align === 'center' ? 'text-center' : 'text-left'">
      <div
        class="mb-4 flex items-center gap-3"
        :class="align === 'center' ? 'justify-center' : ''"
      >
        <span class="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
        <p
          v-if="eyebrow"
          class="text-xs font-semibold uppercase tracking-[0.28em] text-accent"
        >
          {{ eyebrow }}
        </p>
        <span
          v-if="align === 'center'"
          class="h-px w-8 bg-gradient-to-l from-accent to-transparent"
        />
      </div>
      <h2 class="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="mt-4 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg"
        :class="align === 'center' ? 'mx-auto' : ''"
      >
        {{ description }}
      </p>
    </div>
  </ScrollReveal>
</template>
