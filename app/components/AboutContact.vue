<script setup lang="ts">
import { ref } from 'vue'

const email = 'songyot.wonghathaen@gmail.com'
const phone = '0955827248'
const github = 'https://github.com/songyot888'

interface Toast {
  id: number
  message: string
}

const toasts = ref<Toast[]>([])
let toastId = 0

const copyToClipboard = (text: string, type: string) => {
  navigator.clipboard.writeText(text).then(() => {
    const id = toastId++
    const message = `คัดลอก ${type} เรียบร้อยแล้ว!`
    toasts.value.push({ id, message })
    
    // Clear toast after 2.5 seconds
    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== id)
    }, 2500)
  }).catch(() => {
    // Fallback if copy fails
    alert(`ไม่สามารถคัดลอกได้: ${text}`)
  })
}

const taExperiences = [
  {
    course: 'Web Development',
    description: 'ช่วยเหลือผู้สอนในการตรวจงาน ให้คำแนะนำเกี่ยวกับการเขียนเว็บ (HTML, CSS, JavaScript) และการแก้ไขจุดบกพร่องแก่นักศึกษารุ่นน้อง'
  },
  {
    course: 'Object-Oriented Programming (OOP)',
    description: 'ช่วยนักศึกษาทำความเข้าใจหลักการพื้นฐาน เช่น Encapsulation, Inheritance, Polymorphism และการเขียนโค้ดที่มีโครงสร้างเป็นสัดส่วน'
  },
  {
    course: 'Mobile Application Development',
    description: 'ให้คำแนะนำเกี่ยวกับเครื่องมือ Flutter/Dart แนะนำวิธีเขียนโปรแกรมจัดการ State และแนวคิดของ Widget tree ในแอปพลิเคชันมือถือ'
  }
]
</script>

<template>
  <section id="contact" class="about-contact-section">
    <h2 class="section-title">เกี่ยวกับ & ติดต่อ</h2>
    
    <div class="about-contact-grid grid-2">
      <!-- Left: About Me (TA Experience) -->
      <div class="about-column">
        <h3 class="column-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="title-icon"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
          ประวัติการสอน (Teaching Assistant)
        </h3>
        
        <p class="about-intro">
          นอกเหนือจากการพัฒนาซอฟต์แวร์ ผมยังมีโอกาสได้เรียนรู้และแบ่งปันความรู้ผ่านการเป็น<strong>ผู้ช่วยสอน (Teaching Assistant - TA)</strong> ในรายวิชาสำคัญๆ ของภาควิชา ซึ่งช่วยเสริมสร้างพื้นฐานการเขียนโค้ดและการสื่อสารของผมให้มั่นคงยิ่งขึ้น:
        </p>
        
        <div class="timeline">
          <div v-for="ta in taExperiences" :key="ta.course" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h4 class="ta-course">{{ ta.course }}</h4>
              <p class="ta-desc">{{ ta.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right: Contacts -->
      <div class="contact-column">
        <h3 class="column-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="title-icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          ช่องทางการติดต่อ
        </h3>
        
        <p class="contact-intro">
          คุณสามารถติดต่อผมเพื่อสอบถามข้อมูลเพิ่มเติม เสนอโอกาสการทำงาน หรือพูดคุยแลกเปลี่ยนได้ตลอดเวลาผ่านทางช่องทางต่างๆ ด้านล่างนี้ครับ:
        </p>
        
        <div class="contact-cards">
          <!-- Email Card -->
          <div class="glass-card contact-card" @click="copyToClipboard(email, 'อีเมล')">
            <div class="contact-icon email">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">Email</span>
              <span class="contact-value">{{ email }}</span>
            </div>
            <button class="copy-btn" aria-label="Copy Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
          
          <!-- Tel Card -->
          <div class="glass-card contact-card" @click="copyToClipboard(phone, 'เบอร์โทรศัพท์')">
            <div class="contact-icon tel">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">Tel</span>
              <span class="contact-value">{{ phone }}</span>
            </div>
            <button class="copy-btn" aria-label="Copy Phone Number">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
          
          <!-- Socials row -->
          <div class="social-row">
            <a :href="github" target="_blank" rel="noopener" class="glass-card social-item">
              <div class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <span class="social-name">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Active Toast Notifications -->
    <div class="toast-container">
      <div v-for="toast in toasts" :key="toast.id" class="toast">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        {{ toast.message }}
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-contact-section {
  position: relative;
}

.about-contact-grid {
  margin-top: 20px;
  align-items: start;
}

.column-title {
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.title-icon {
  color: var(--accent-indigo);
}

.about-intro, .contact-intro {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 28px;
}

/* Timeline design for TA */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  padding-left: 20px;
  border-left: 2px solid var(--border-color);
  margin-left: 8px;
}

.timeline-item {
  position: relative;
}

.timeline-dot {
  position: absolute;
  left: -27px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent-indigo);
  box-shadow: 0 0 8px var(--accent-indigo);
  border: 2px solid var(--bg-primary);
  transition: all var(--transition-fast);
}

.timeline-item:hover .timeline-dot {
  background: var(--accent-cyan);
  box-shadow: 0 0 10px var(--accent-cyan);
  transform: scale(1.2);
}

.timeline-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ta-course {
  font-size: 1.1rem;
  color: var(--text-primary);
  font-weight: 600;
}

.ta-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Contact layout design */
.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-card {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  position: relative;
}

.contact-card:hover {
  transform: translateY(-2px);
}

.contact-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.03);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  transition: all var(--transition-fast);
}

.contact-card:hover .contact-icon {
  color: var(--text-primary);
  border-color: rgba(15, 23, 42, 0.15);
}

.contact-icon.email {
  color: var(--accent-purple);
  background: rgba(139, 92, 246, 0.08);
  border-color: rgba(139, 92, 246, 0.15);
}

.contact-card:hover .contact-icon.email {
  background: rgba(139, 92, 246, 0.12);
  box-shadow: 0 0 12px rgba(139, 92, 246, 0.2);
}

.contact-icon.tel {
  color: var(--accent-emerald);
  background: rgba(16, 185, 129, 0.08);
  border-color: rgba(16, 185, 129, 0.15);
}

.contact-card:hover .contact-icon.tel {
  background: rgba(16, 185, 129, 0.12);
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.2);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  font-weight: 600;
}

.contact-value {
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 500;
}

.copy-btn {
  margin-left: auto;
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: all var(--transition-fast);
}

.contact-card:hover .copy-btn {
  color: var(--text-secondary);
}

.copy-btn:hover {
  background: rgba(15, 23, 42, 0.05);
  color: var(--text-primary) !important;
}

/* Social links styling */
.social-row {
  display: flex;
  gap: 16px;
}

.social-item {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--text-secondary);
  flex: 1;
}

.social-item:hover {
  color: var(--text-primary);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -10px rgba(15, 23, 42, 0.08);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-name {
  font-size: 0.95rem;
  font-weight: 600;
  font-family: var(--font-primary);
}

@media (max-width: 768px) {
  .social-row {
    flex-direction: column;
  }
}
</style>
