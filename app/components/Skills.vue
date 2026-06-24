<script setup lang="ts">
const skillGroups = [
  {
    title: 'Frontend Development',
    description: 'พัฒนาหน้าเว็บและอินเตอร์เฟสผู้ใช้ที่ตอบสนองอย่างลื่นไหลและสวยงาม',
    iconColor: 'cyan',
    skills: ['Vue.js', 'Nuxt', 'Angular', 'TypeScript', 'HTML5', 'Tailwind CSS'],
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
  },
  {
    title: 'Backend & APIs',
    description: 'ออกแบบระบบจัดการข้อมูลภายในและ API Service ที่เสถียร รวดเร็ว และปลอดภัย',
    iconColor: 'indigo',
    skills: ['Go (Gin, GORM)', 'Node.js', 'NestJS', '.NET Core', 'Express', 'RESTful API'],
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>`
  },
  {
    title: 'Mobile Development',
    description: 'สร้างสรรค์แอปพลิเคชันบนมือถือที่รองรับการใช้งานแบบ Cross-platform',
    iconColor: 'blue',
    skills: ['Dart', 'Flutter', 'State Management', 'Google Maps API'],
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`
  },
  {
    title: 'Databases & Cloud',
    description: 'ออกแบบ จัดการระบบฐานข้อมูล และบริการระบบคลาวด์แพลตฟอร์มต่างๆ',
    iconColor: 'emerald',
    skills: ['MySQL', 'PostgreSQL', 'Firebase Firestore'],
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`
  },
  {
    title: 'DevOps & Tools',
    description: 'ระบบควบคุมเวอร์ชัน จำลองสภาพแวดล้อมรันแอป และเครื่องมือช่วยเขียนโค้ดอัจฉริยะ',
    iconColor: 'purple',
    skills: ['Git / GitHub', 'Docker', 'AI Dev Tools' , 'Postman', 'Dbeaver'],
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`
  }
]
</script>

<template>
  <section id="skills" class="skills-section">
    <h2 class="section-title">ทักษะและความเชี่ยวชาญ</h2>
    
    <div class="skills-grid">
      <div 
        v-for="group in skillGroups" 
        :key="group.title" 
        class="glass-card skill-card"
        :class="`glow-${group.iconColor}`"
      >
        <div class="card-header">
          <div class="icon-box" :class="group.iconColor" v-html="group.svgIcon"></div>
          <h3 class="card-title">{{ group.title }}</h3>
        </div>
        
        <p class="card-desc">{{ group.description }}</p>
        
        <div class="skills-list">
          <span 
            v-for="skill in group.skills" 
            :key="skill" 
            class="skill-badge"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  position: relative;
}

.skills-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
}

/* Row 1: 3 cards (each spans 2 columns: 2+2+2 = 6) */
.skills-grid > :nth-child(1),
.skills-grid > :nth-child(2),
.skills-grid > :nth-child(3) {
  grid-column: span 2;
}

/* Row 2: 2 cards (each spans 3 columns: 3+3 = 6) */
.skills-grid > :nth-child(4),
.skills-grid > :nth-child(5) {
  grid-column: span 3;
}

.skill-card {
  padding: 32px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.icon-box {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all var(--transition-normal);
}

.icon-box.cyan {
  color: var(--accent-cyan);
  background: rgba(6, 182, 212, 0.1);
  border-color: rgba(6, 182, 212, 0.2);
}

.icon-box.indigo {
  color: var(--accent-indigo);
  background: rgba(99, 102, 241, 0.1);
  border-color: rgba(99, 102, 241, 0.2);
}

.icon-box.blue {
  color: var(--accent-blue);
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.2);
}

.icon-box.emerald {
  color: var(--accent-emerald);
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.2);
}

.icon-box.purple {
  color: var(--accent-purple);
  background: rgba(124, 58, 237, 0.1);
  border-color: rgba(124, 58, 237, 0.2);
}

.card-title {
  font-size: 1.35rem;
  color: var(--text-primary);
}

.card-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 24px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
}

.skill-badge {
  background: rgba(15, 23, 42, 0.03);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all var(--transition-fast);
}

.skill-card:hover .skill-badge {
  background: rgba(15, 23, 42, 0.05);
  border-color: rgba(15, 23, 42, 0.12);
}

.skill-badge:hover {
  transform: translateY(-2px);
  background: var(--text-primary) !important;
  color: var(--bg-primary);
}

/* Glowing card borders on hover */
.glow-cyan:hover {
  box-shadow: 0 10px 30px -10px rgba(6, 182, 212, 0.15);
  border-color: rgba(6, 182, 212, 0.35);
}

.glow-indigo:hover {
  box-shadow: 0 10px 30px -10px rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.35);
}

.glow-blue:hover {
  box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.35);
}

.glow-emerald:hover {
  box-shadow: 0 10px 30px -10px rgba(16, 185, 129, 0.15);
  border-color: rgba(16, 185, 129, 0.35);
}

.glow-purple:hover {
  box-shadow: 0 10px 30px -10px rgba(124, 58, 237, 0.15);
  border-color: rgba(124, 58, 237, 0.35);
}

@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  .skills-grid > :nth-child(1),
  .skills-grid > :nth-child(2),
  .skills-grid > :nth-child(3),
  .skills-grid > :nth-child(4) {
    grid-column: span 1;
  }
  .skills-grid > :nth-child(5) {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .skills-grid > * {
    grid-column: span 1 !important;
  }
  .skill-card {
    padding: 24px;
  }
}
</style>
