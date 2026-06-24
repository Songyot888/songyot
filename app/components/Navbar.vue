<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('hero')
const isMobileMenuOpen = ref(false)

const sections = [
  { id: 'hero', name: 'หน้าแรก' },
  { id: 'skills', name: 'ทักษะ' },
  { id: 'projects', name: 'ผลงาน' },
  { id: 'contact', name: 'เกี่ยวกับ & ติดต่อ' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const scrollToSection = (id: string) => {
  isMobileMenuOpen.value = false
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Track current section by scroll position
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, {
    rootMargin: '-50% 0px -50% 0px' // Trigger when section occupies the middle of viewport
  })

  sections.forEach(sec => {
    const el = document.getElementById(sec.id)
    if (el && observer) {
      observer.observe(el)
    }
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo / Name -->
      <a href="#hero" class="nav-logo" @click.prevent="scrollToSection('hero')">
        <span class="logo-accent">&lt;</span>
        SONGYOT<span class="logo-dot">.W</span>
        <span class="logo-accent">/&gt;</span>
      </a>

      <!-- Desktop Nav Items -->
      <ul class="nav-links">
        <li v-for="sec in sections" :key="sec.id">
          <a
            :href="`#${sec.id}`"
            :class="['nav-link', { active: activeSection === sec.id }]"
            @click.prevent="scrollToSection(sec.id)"
          >
            {{ sec.name }}
          </a>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button class="mobile-toggle" @click="toggleMobileMenu" aria-label="Toggle Navigation">
        <span :class="['bar', { open: isMobileMenuOpen }]"></span>
        <span :class="['bar', { open: isMobileMenuOpen }]"></span>
        <span :class="['bar', { open: isMobileMenuOpen }]"></span>
      </button>
    </div>

    <!-- Mobile Nav Dropdown -->
    <div :class="['mobile-menu', { show: isMobileMenuOpen }]">
      <ul>
        <li v-for="sec in sections" :key="sec.id">
          <a
            :href="`#${sec.id}`"
            :class="['mobile-link', { active: activeSection === sec.id }]"
            @click.prevent="scrollToSection(sec.id)"
          >
            {{ sec.name }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
  transition: all var(--transition-normal);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-family: var(--font-primary);
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 2px;
}

.logo-accent {
  color: var(--accent-indigo);
  font-weight: 500;
}

.logo-dot {
  color: var(--accent-cyan);
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
  position: relative;
  padding: 6px 0;
  transition: color var(--transition-fast);
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-indigo), var(--accent-cyan));
  transition: width var(--transition-fast);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: var(--text-primary);
  font-weight: 600;
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1010;
}

.bar {
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
  border-radius: 2px;
  transition: all var(--transition-fast);
}

.bar.open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.bar.open:nth-child(2) {
  opacity: 0;
}

.bar.open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Dropdown */
.mobile-menu {
  display: none;
  width: 100%;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  padding: 16px 24px;
  overflow: hidden;
  max-height: 0;
  transition: max-height var(--transition-normal) ease-in-out;
}

.mobile-menu.show {
  display: block;
  max-height: 300px;
}

.mobile-menu ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mobile-link {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-secondary);
  display: block;
  padding: 8px 0;
  transition: color var(--transition-fast);
}

.mobile-link:hover,
.mobile-link.active {
  color: var(--text-primary);
  padding-left: 8px;
  border-left: 3px solid var(--accent-indigo);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .mobile-toggle {
    display: flex;
  }
  .mobile-menu {
    display: block;
  }
}
</style>
