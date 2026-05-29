<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import SocialLinks from '@/components/ui/SocialLinks.vue'
import { useResumeModal } from '@/composables/useResumeModal'
import type { PortfolioData } from '@/types/portfolio'

defineProps<{
  contact: PortfolioData['contact']
  socialLinks: PortfolioData['socialLinks']
}>()

const { openResumeModal } = useResumeModal()

const form = ref({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
}
</script>

<template>
  <section
    id="contact"
    class="relative overflow-hidden py-20 sm:py-24"
  >
    <div class="pointer-events-none absolute inset-0 mesh-glow opacity-70" />
    <div class="section-container relative">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect"
        description="Open to senior frontend opportunities. I respond quickly and take conversations seriously."
        align="center"
      />

      <ScrollReveal direction="scale">
        <div class="mx-auto mb-10 max-w-3xl rounded-3xl border border-accent/20 bg-accent/5 p-6 text-center backdrop-blur-sm sm:p-8">
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Open to
          </p>
          <div class="mt-4 flex flex-wrap justify-center gap-3">
            <span
              v-for="role in contact.openTo"
              :key="role"
              class="rounded-full border border-white/10 bg-surface-elevated/80 px-4 py-2 text-sm font-medium text-text"
            >
              {{ role }}
            </span>
          </div>

          <p
            v-if="contact.workModes?.length"
            class="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-accent"
          >
            Work model
          </p>
          <div
            v-if="contact.workModes?.length"
            class="mt-3 flex flex-wrap justify-center gap-3"
          >
            <span
              v-for="mode in contact.workModes"
              :key="mode"
              class="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
            >
              {{ mode }}
            </span>
          </div>

          <p class="mt-5 text-sm text-text-muted">
            Response time: <span class="font-semibold text-text">{{ contact.responseTime }}</span>
          </p>
        </div>
      </ScrollReveal>

      <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <ScrollReveal direction="left">
          <div class="premium-card h-full p-6 sm:p-8">
            <h3 class="font-display text-xl font-bold text-text">Direct contact</h3>
            <p class="mt-2 text-sm text-text-muted">
              Best for recruiters, hiring managers, and engineering leaders evaluating senior frontend talent.
            </p>

            <dl class="mt-8 space-y-5 text-sm">
              <div>
                <dt class="text-text-muted">Email</dt>
                <dd class="mt-1 text-base font-medium text-text">
                  <a
                    class="transition hover:text-accent"
                    :href="`mailto:${contact.email}`"
                  >
                    {{ contact.email }}
                  </a>
                </dd>
              </div>
              <div v-if="contact.phone">
                <dt class="text-text-muted">Phone</dt>
                <dd class="mt-1 text-base font-medium text-text">{{ contact.phone }}</dd>
              </div>
              <div>
                <dt class="text-text-muted">Location</dt>
                <dd class="mt-1 text-base font-medium text-text">{{ contact.location }}</dd>
              </div>
              <div>
                <dt class="text-text-muted">Work model</dt>
                <dd class="mt-1 text-base font-medium text-text">
                  {{ contact.workModes?.join(' · ') ?? 'Hybrid · Remote · On-site' }}
                </dd>
              </div>
              <div>
                <dt class="text-text-muted">Availability</dt>
                <dd class="mt-1 text-base font-medium text-text">{{ contact.availability }}</dd>
              </div>
            </dl>

            <div class="mt-8">
              <SocialLinks :links="socialLinks" />
            </div>

            <div class="mt-8 flex flex-wrap gap-3">
              <BaseButton @click="openResumeModal">
                View Resume
              </BaseButton>
              <BaseButton
                :href="`mailto:${contact.email}`"
                variant="secondary"
                external
              >
                Email directly
              </BaseButton>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          direction="right"
          :delay="120"
        >
          <div class="premium-card no-print p-6 sm:p-8">
            <h3 class="font-display text-xl font-bold text-text">Send a message</h3>
            <p class="mt-2 text-sm text-text-muted">
              Share the role, team context, and timeline. I’ll respond within 24 hours.
            </p>

            <form
              class="mt-6 space-y-4"
              @submit.prevent="handleSubmit"
            >
              <label class="block">
                <span class="mb-2 block text-sm text-text-muted">Name</span>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full rounded-xl border border-white/10 bg-surface-muted/80 px-4 py-3 text-sm text-text outline-none transition focus:border-accent"
                />
              </label>
              <label class="block">
                <span class="mb-2 block text-sm text-text-muted">Email</span>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full rounded-xl border border-white/10 bg-surface-muted/80 px-4 py-3 text-sm text-text outline-none transition focus:border-accent"
                />
              </label>
              <label class="block">
                <span class="mb-2 block text-sm text-text-muted">Message</span>
                <textarea
                  v-model="form.message"
                  rows="5"
                  required
                  placeholder="Tell me about the role, team, and what success looks like..."
                  class="w-full rounded-xl border border-white/10 bg-surface-muted/80 px-4 py-3 text-sm text-text outline-none transition focus:border-accent"
                />
              </label>
              <BaseButton type="submit">
                Send Message
              </BaseButton>
              <p
                v-if="submitted"
                class="text-sm text-accent"
              >
                Thanks — connect this form to Formspree or EmailJS to deliver messages.
              </p>
            </form>

            <div class="mt-6 rounded-2xl border border-white/10 bg-surface-muted/50 p-4">
              <p class="text-sm font-medium text-text">Prefer email?</p>
              <a
                class="mt-2 inline-block text-sm text-accent transition hover:underline"
                :href="`mailto:${contact.email}`"
              >
                {{ contact.email }}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
