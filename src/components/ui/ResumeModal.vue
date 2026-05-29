<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { publicAsset } from '@/utils/assets'

const props = defineProps<{
  open: boolean
  resumePath?: string
}>()

const emit = defineEmits<{
  close: []
}>()

const resumeUrl = computed(() =>
  props.resumePath ? publicAsset(props.resumePath) : undefined,
)

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
        @click.self="emit('close')"
      >
        <div
          class="flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-surface-elevated shadow-2xl sm:h-[85vh] sm:rounded-3xl"
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
        >
          <div class="flex flex-col gap-4 border-b border-white/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Resume
              </p>
              <h2 class="font-display text-lg font-bold text-text sm:text-xl">
                Preview & Download
              </h2>
            </div>
            <div class="flex flex-wrap gap-3">
              <BaseButton
                v-if="resumeUrl"
                :href="resumeUrl"
                external
              >
                Download PDF
              </BaseButton>
              <BaseButton
                variant="secondary"
                @click="emit('close')"
              >
                Close
              </BaseButton>
            </div>
          </div>

          <div class="flex-1 bg-surface-muted/40">
            <iframe
              v-if="resumeUrl"
              :src="resumeUrl"
              title="Resume preview"
              class="h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
