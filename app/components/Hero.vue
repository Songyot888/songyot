<script setup lang="ts">
const scrollToProjects = () => {
  const element = document.getElementById('projects')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="hero-container">
      <!-- Left text area -->
      <div class="hero-content">
        <div class="greeting-badge">
          <span class="badge-dot"></span> Available for Opportunities
        </div>
        
        <h1 class="hero-title">
          Hi, I'm <span class="highlight-text">SONGYOT WONGHATHAEN (NUT)</span>
        </h1>
        
        <h2 class="hero-subtitle">
          Full Stack Developer
        </h2>
        
        <p class="hero-description">
          นักศึกษาภาควิชาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยมหาสารคาม 
          ที่มีแพสชันอย่างเต็มเปี่ยมในการเขียนโค้ดและพร้อมที่จะพัฒนาซอฟต์แวร์คุณภาพเยี่ยมทั้งในส่วนของ Frontend และ Backend
        </p>
        
        <div class="hero-actions">
          <button class="btn btn-primary" @click="scrollToProjects">
            ดูผลงานของผม
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
          </button>
          <a href="/resume.pdf" download="Songyot_Wonghathaen_Resume.pdf" class="btn btn-secondary">
            ดาวน์โหลด Resume (PDF)
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </a>
        </div>
      </div>
      
      <!-- Right image area with floating tech tags -->
      <div class="hero-image-container">
        <div class="avatar-glow"></div>
        <div class="avatar-wrapper">
          <img src="/images/profile.png" alt="SONGYOT WONGHATHAEN (NUT)" class="profile-img" />
        </div>
        
        <!-- Floating Tech Badges -->
        <div class="floating-tag tag-vue">Vue.js</div>
        <div class="floating-tag tag-go">Go (Gin)</div>
        <div class="floating-tag tag-nuxt">Nuxt</div>
        <div class="floating-tag tag-flutter">Flutter</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 100px;
  overflow: hidden;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 60px;
  width: 100%;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.greeting-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-emerald);
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(16, 185, 129, 0.2);
  margin-bottom: 24px;
  font-family: var(--font-primary);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background-color: var(--accent-emerald);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--accent-emerald);
  animation: pulse 1.8s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.15;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.highlight-text {
  background: linear-gradient(135deg, var(--accent-indigo) 10%, var(--accent-purple) 50%, var(--accent-pink) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.subtitle-parenthesis {
  color: var(--accent-cyan);
  font-weight: 600;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* Hero Image with Glow effects & Floating Tags */
.hero-image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-wrapper {
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  padding: 8px;
  background: linear-gradient(135deg, var(--accent-indigo), var(--accent-purple), var(--accent-cyan));
  background-size: 200% 200%;
  animation: rotateGradient 6s linear infinite;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.15),
              0 0 30px rgba(99, 102, 241, 0.2);
  z-index: 2;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  border-radius: 50%;
  border: 4px solid var(--bg-primary);
  background-color: var(--bg-secondary);
}

.avatar-glow {
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--accent-indigo) 0%, var(--accent-cyan) 100%);
  filter: blur(40px);
  opacity: 0.2;
  z-index: 1;
  animation: pulseGlow 4s infinite alternate;
}

@keyframes rotateGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes pulseGlow {
  0% {
    transform: scale(0.95);
    opacity: 0.15;
  }
  100% {
    transform: scale(1.05);
    opacity: 0.25;
  }
}

/* Floating Tech Tags */
.floating-tag {
  position: absolute;
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-primary);
  z-index: 10;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  pointer-events: none;
}

.tag-vue {
  top: 10%;
  left: 0;
  border-color: rgba(16, 185, 129, 0.3);
  animation: floatTag1 6s ease-in-out infinite;
}

.tag-go {
  bottom: 15%;
  left: -5%;
  border-color: rgba(6, 182, 212, 0.3);
  animation: floatTag2 7s ease-in-out infinite;
}

.tag-nuxt {
  top: 25%;
  right: -5%;
  border-color: rgba(16, 185, 129, 0.3);
  animation: floatTag3 5s ease-in-out infinite;
}

.tag-flutter {
  bottom: 25%;
  right: 0;
  border-color: rgba(59, 130, 246, 0.3);
  animation: floatTag4 8s ease-in-out infinite;
}

@keyframes floatTag1 {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
}

@keyframes floatTag2 {
  0%, 100% { transform: translateY(0) rotate(3deg); }
  50% { transform: translateY(-8px) rotate(-3deg); }
}

@keyframes floatTag3 {
  0%, 100% { transform: translateY(0) rotate(-4deg); }
  50% { transform: translateY(-12px) rotate(4deg); }
}

@keyframes floatTag4 {
  0%, 100% { transform: translateY(0) rotate(2deg); }
  50% { transform: translateY(-6px) rotate(-2deg); }
}

/* Responsiveness */
@media (max-width: 1024px) {
  .hero-container {
    gap: 40px;
  }
  .hero-title {
    font-size: 2.8rem;
  }
  .avatar-wrapper {
    width: 280px;
    height: 280px;
  }
  .avatar-glow {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding-top: 120px;
    min-height: auto;
  }
  .hero-container {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }
  .hero-content {
    align-items: center;
  }
  .hero-actions {
    justify-content: center;
    width: 100%;
  }
  .hero-actions .btn {
    width: 100%;
  }
  .hero-image-container {
    order: -1; /* Image on top on mobile */
  }
  .avatar-wrapper {
    width: 240px;
    height: 240px;
  }
  .avatar-glow {
    width: 260px;
    height: 260px;
  }
  .floating-tag {
    display: none; /* Hide floating tags on mobile to avoid clutter */
  }
}
</style>
