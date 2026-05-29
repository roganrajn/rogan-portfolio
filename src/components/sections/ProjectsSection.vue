<script setup lang="ts">
import ProjectCard from '@/components/ui/ProjectCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { PortfolioData } from '@/types/portfolio'

defineProps<{
  projects: PortfolioData['projects']
}>()
</script>

<template>
  <section
    id="projects"
    class="relative overflow-hidden border-b border-white/5 py-20 sm:py-24"
  >
    <div class="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
    <div class="section-container relative">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="Production case studies across enterprise networking, banking, B2B platforms, and full stack delivery."
      />

      <div class="grid gap-6 md:grid-cols-2">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :index="index"
          :featured="index === 0"
          :class="index === 0 ? 'md:col-span-2' : ''"
        />
      </div>
    </div>
  </section>
</template>
