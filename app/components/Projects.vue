<script setup lang="ts">
const projects = [
  {
    title: 'Tiwjung Tutor Finding Application',
    subtitle: 'Senior Project',
    description: 'แพลตฟอร์มจับคู่นักศึกษากับติวเตอร์ มีระบบแชทแบบเรียลไทม์ ค้นหาคอร์สเรียน และจัดอันดับติวเตอร์ยอดนิยม',
    image: '/images/project-tiwjung.png',
    tags: ['Flutter', 'Go (Gin)', 'MySQL', 'Firebase'],
    github: 'https://github.com/Wuttichai11072547/projecttiwjung.git',
    demo: '#'
  },
  {
    title: 'Hk-WebAI-Eco_Sphere_Tracker',
    subtitle: 'MSU Hackathon 2026',
    description: 'เว็บแอปพลิเคชันรูปแบบ Dashboard ที่สร้างขึ้นด้วย AI Development Tools 100% ภายใน 48 ชั่วโมง ทำคะแนน Lighthouse ได้มากกว่า 90 คะแนน',
    image: '/images/project-eco.png',
    tags: ['AI Dev Tools', 'Nuxt', 'JSON Data Pack', 'CSS Grid'],
    github: 'https://github.com/PatiphanKh/Hk-WebAI-Eco_Sphere_Tracker.git',
    demo: 'https://hk-web-ai-eco-sphere-tracker.vercel.app'
  },
  {
    title: 'Web URL Shortener',
    subtitle: 'URL Link Management System',
    description: 'ระบบย่อลิงก์เว็บแบบครบวงจร  และเก็บสถิติจำนวนคนคลิกแบบเรียลไทม์',
    image: '/images/project-url.png',
    tags: ['Nuxt', 'Go (Gin)', 'MySQL', 'Docker'],
    github: 'https://github.com/Songyot888/web-new-url.git',
    demo: 'https://new-url.ulshot.shop'
  },
  {
    title: 'Delivery Application',
    subtitle: 'Mobile App',
    description: 'แอปพลิเคชันบนมือถือสำหรับสั่งงานขนส่ง/เดลิเวอรี่ รองรับการอัปเดตตำแหน่งและสถานะของคนขับแบบเรียลไทม์',
    image: '/images/project-delivery.png',
    tags: ['Flutter', 'Firebase Firestore', 'Google Maps API'],
    github: 'https://github.com/Songyot888/delivery',
    demo: '#'
  }
]
</script>

<template>
  <section id="projects" class="projects-section">
    <h2 class="section-title">ผลงานและโปรเจกต์</h2>
    
    <div class="projects-grid grid-2">
      <div v-for="proj in projects" :key="proj.title" class="glass-card project-card">
        <!-- Project Mockup Box -->
        <div class="project-img-wrapper">
          <img :src="proj.image" :alt="proj.title" class="project-img" loading="lazy" />
          <div class="project-badge">{{ proj.subtitle }}</div>
        </div>
        
        <!-- Project Info -->
        <div class="project-info">
          <h3 class="project-title">{{ proj.title }}</h3>
          
          <p class="project-desc">{{ proj.description }}</p>
          
          <!-- Tags -->
          <div class="project-tags">
            <span v-for="tag in proj.tags" :key="tag" class="tag-badge">
              {{ tag }}
            </span>
          </div>
          
          <!-- Action Buttons -->
          <div class="project-actions">
            <a :href="proj.github" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub Code
            </a>
            <a 
              v-if="proj.demo && proj.demo !== '#'" 
              :href="proj.demo" 
              target="_blank" 
              rel="noopener" 
              class="btn btn-primary btn-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              Demo Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  position: relative;
}

.projects-grid {
  margin-top: 20px;
}

.project-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
}

.project-img-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.project-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(79, 70, 229, 0.95);
  backdrop-filter: blur(4px);
  color: white;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: var(--font-primary);
  letter-spacing: 0.05em;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.12);
}

.project-info {
  padding: 28px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-title {
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 24px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  margin-top: auto;
}

.tag-badge {
  background: rgba(79, 70, 229, 0.06);
  border: 1px solid rgba(79, 70, 229, 0.12);
  color: var(--accent-indigo);
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

.project-actions {
  display: flex;
  gap: 12px;
}

.btn-sm {
  padding: 8px 18px;
  font-size: 0.85rem;
  flex: 1;
}

@media (max-width: 768px) {
  .project-info {
    padding: 20px;
  }
}
</style>
