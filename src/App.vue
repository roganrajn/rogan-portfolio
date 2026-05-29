<script setup lang="ts">
import { computed, ref } from 'vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import MobileNav from '@/components/layout/MobileNav.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import AchievementsSection from '@/components/sections/AchievementsSection.vue'
import CertificationsSection from '@/components/sections/CertificationsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import HobbiesSection from '@/components/sections/HobbiesSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import WhatIBringSection from '@/components/sections/WhatIBringSection.vue'
import ResumeModal from '@/components/ui/ResumeModal.vue'
import { useResumeModal } from '@/composables/useResumeModal'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { portfolioData } from '@/data/portfolio'

const mobileMenuOpen = ref(false)
const { isOpen, closeResumeModal } = useResumeModal()

const sectionIds = computed(() => portfolioData.navigation.map((item) => item.id))
const { activeSection, scrollToSection } = useScrollSpy(sectionIds)

const handleNavigate = (id: string) => {
  if (id === '__toggle_menu__') {
    mobileMenuOpen.value = !mobileMenuOpen.value
    return
  }

  scrollToSection(id)
  mobileMenuOpen.value = false
}
</script>

<template>
  <div class="min-h-screen">
    <AppHeader
      :navigation="portfolioData.navigation"
      :active-section="activeSection"
      :name="portfolioData.profile.name"
      @navigate="handleNavigate"
    />

    <MobileNav
      :navigation="portfolioData.navigation"
      :active-section="activeSection"
      :open="mobileMenuOpen"
      @navigate="handleNavigate"
      @close="mobileMenuOpen = false"
    />

    <main>
      <HeroSection
        :profile="portfolioData.profile"
        :social-links="portfolioData.socialLinks"
        :contact="portfolioData.contact"
        @navigate="handleNavigate"
      />
      <AboutSection :about="portfolioData.about" />
      <WhatIBringSection :items="portfolioData.whatIBring" />
      <ExperienceSection :experience="portfolioData.experience" />
      <ProjectsSection :projects="portfolioData.projects" />
      <SkillsSection :skills="portfolioData.skills" />
      <AchievementsSection :achievements="portfolioData.achievements" />
      <CertificationsSection :certifications="portfolioData.certifications" />
      <HobbiesSection :hobbies="portfolioData.hobbies" />
      <ContactSection
        :contact="portfolioData.contact"
        :social-links="portfolioData.socialLinks"
      />
    </main>

    <AppFooter
      :name="portfolioData.profile.name"
      :social-links="portfolioData.socialLinks"
    />

    <ResumeModal
      :open="isOpen"
      :resume-path="portfolioData.contact.resumeUrl"
      @close="closeResumeModal"
    />
  </div>
</template>
