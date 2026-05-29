export interface NavItem {
  id: string
  label: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'twitter' | 'email' | 'website'
}

export interface ImpactStat {
  icon: string
  label: string
  value: string
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  location: string
  period: string
  summary: string
  highlights: string[]
  impactTags: string[]
  tech: string[]
}

export interface ProjectItem {
  id: string
  title: string
  image: string
  challenge: string
  built: string
  impact: string
  role: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
}

export type SkillTier = 'Expert' | 'Advanced' | 'Familiar' | 'Engineering'

export interface SkillGroup {
  tier: SkillTier
  groupName?: string
  skills: string[]
}

export interface AchievementItem {
  id: string
  category: string
  title: string
  organization: string
  date: string
  description: string
  highlights?: string[]
}

export interface CertificationItem {
  id: string
  name: string
  issuer: string
  date: string
  credentialUrl?: string
}

export interface TestimonialItem {
  id: string
  quote: string
  author: string
  role: string
  company: string
  placeholder?: boolean
}

export interface HobbyItem {
  id: string
  name: string
  description: string
  icon?: string
  image?: string
}

export interface ContactInfo {
  email: string
  phone?: string
  location: string
  availability: string
  responseTime: string
  openTo: string[]
  resumeUrl?: string
}

export interface PortfolioData {
  profile: {
    name: string
    title: string
    branding: string
    headlineLines: string[]
    tagline: string
    photoUrl: string
    summary: string
    highlights: string[]
    selectedImpact: ImpactStat[]
    currentlyExploring: string[]
  }
  about: {
    bio: string[]
    facts: Array<{ label: string; value: string }>
  }
  whatIBring: string[]
  navigation: NavItem[]
  socialLinks: SocialLink[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  skills: SkillGroup[]
  achievements: AchievementItem[]
  testimonials: TestimonialItem[]
  certifications: CertificationItem[]
  hobbies: HobbyItem[]
  contact: ContactInfo
}
