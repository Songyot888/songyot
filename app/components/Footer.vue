<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <span class="logo-accent">&lt;</span>
        SONGYOT<span class="logo-dot">.W</span>
        <span class="logo-accent">/&gt;</span>
      </div>
      
      <p class="footer-text">
        © {{ new Date().getFullYear() }} Songyot Wonghathaen. All rights reserved.
      </p>
      
      <p class="footer-tech">
        Built with <span class="heart">❤️</span> using Nuxt 4 &amp; Vanilla CSS
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border-color);
  background: var(--bg-secondary);
  padding: 40px 20px;
  text-align: center;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.footer-brand {
  font-family: var(--font-primary);
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--text-primary);
}

.logo-accent {
  color: var(--accent-indigo);
}

.logo-dot {
  color: var(--accent-cyan);
}

.footer-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.footer-tech {
  color: var(--text-muted);
  font-size: 0.8rem;
}

.heart {
  color: #ef4444;
  display: inline-block;
  animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}
</style>
