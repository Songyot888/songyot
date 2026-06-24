<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import Skills from '~/components/Skills.vue'
import Projects from '~/components/Projects.vue'
import AboutContact from '~/components/AboutContact.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div class="app-wrapper">
    <NuxtRouteAnnouncer />
    
    <!-- Frosted-glass Sticky Navbar -->
    <Navbar />
    
    <!-- Main Sections -->
    <main>
      <Hero />
      <Skills />
      <Projects />
      <AboutContact />
    </main>
    
    <!-- Page Footer -->
    <Footer />
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

main {
  flex-grow: 1;
}
</style>
