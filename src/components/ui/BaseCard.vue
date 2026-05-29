<script setup lang="ts">
defineProps<{
  hover?: boolean
}>()
</script>

<template>
  <article
    class="glass-panel p-6 transition duration-300"
    :class="hover ? 'hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10' : ''"
  >
    <slot />
  </article>
</template>
