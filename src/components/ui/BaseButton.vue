<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string
    variant?: 'primary' | 'secondary' | 'ghost'
    external?: boolean
    type?: 'button' | 'submit' | 'reset'
    size?: 'md' | 'lg'
  }>(),
  {
    variant: 'primary',
    external: false,
    type: 'button',
    size: 'md',
  },
)

const variantClasses = {
  primary:
    'border border-cyan-300/20 bg-accent text-surface shadow-lg shadow-accent/20 hover:-translate-y-0.5 hover:bg-sky-300 hover:shadow-accent/30 focus-visible:ring-accent/60',
  secondary:
    'border border-border/80 bg-surface-elevated/80 text-text backdrop-blur-sm hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent hover:shadow-lg hover:shadow-accent/5',
  ghost:
    'text-text-muted hover:text-accent',
}

const sizeClasses = {
  md: 'rounded-xl px-5 py-2.5 text-sm',
  lg: 'rounded-2xl px-6 py-3 text-sm sm:text-base',
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center justify-center gap-2 font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </component>
</template>
