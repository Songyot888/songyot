// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      title: 'SONGYOT WONGHATHAEN (NUT) | Full Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of SONGYOT WONGHATHAEN (NUT), Full Stack Developer and Computer Science Student at Mahasarakham University.' },
        { name: 'keywords', content: 'Songyot Wonghathaen, Developer Portfolio, Full Stack Developer, Web Development, Vue, Nuxt, Go, Gin, Flutter' },
        { name: 'author', content: 'Songyot Wonghathaen' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'SONGYOT WONGHATHAEN (NUT) | Full Stack Developer' },
        { property: 'og:description', content: 'Computer Science Student at Mahasarakham University and Full Stack Developer.' },
        { property: 'og:image', content: '/images/profile.png' },
        
        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'SONGYOT WONGHATHAEN (NUT) | Full Stack Developer' },
        { property: 'twitter:description', content: 'Computer Science Student at Mahasarakham University and Full Stack Developer.' },
        { property: 'twitter:image', content: '/images/profile.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
