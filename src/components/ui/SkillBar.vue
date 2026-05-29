<script setup lang="ts">
defineProps<{
  name: string
  level: number
}>()
</script>

<template>
  <div>
    <div class="mb-2 flex items-center justify-between gap-4 text-sm">
      <span class="font-medium text-text">{{ name }}</span>
      <span class="text-text-muted">{{ level }}%</span>
    </div>
    <div class="h-2 overflow-hidden rounded-full bg-surface-muted">
      <div
        class="h-full rounded-full bg-gradient-to-r from-accent-soft to-accent transition-all duration-700"
        :style="{ width: `${level}%` }"
      />
    </div>
  </div>
</template>
