<!-- src/components/common/Footer.vue – VERSION ABSOLUE 2025 : DESIGN SENIOR ULTRA-ÉLÉGANT & LUXUEUX -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="relative bg-gradient-to-b py-16 from-[#001F33] to-[#003B5C] text-white overflow-hidden shadow-inner">
    <!-- Fond subtil avec vagues élégantes pour un effet premium – Optimisé pour performances -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <svg class="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#04A7D6" fill-opacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
        <!-- 1. LOGO + SLOGAN + CONTACT – Luxe, responsive & spacieux avec transitions fluides -->
        <div class="lg:col-span-5 space-y-8 md:space-y-10">
          <RouterLink to="/" class="inline-block group focus:outline-none focus:ring-2 focus:ring-[#04A7D6] focus:ring-offset-2 rounded-full">
            <img src="@/assets/images/logo-white.svg" alt="Le Confident" class="h-24 md:h-28 lg:h-32 w-auto transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-rotate-2 group-focus:scale-105 group-focus:-rotate-2 drop-shadow-xl" />
          </RouterLink>
          <p class="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-200 max-w-prose font-serif italic tracking-wide opacity-95">
            Informer juste, informer vrai et autrement.
          </p>
          <div class="space-y-4 md:space-y-6">
            <a href="mailto:leconfidentiel235@gmail.com" class="flex items-center gap-4 text-base md:text-lg lg:text-xl hover:text-[#04A7D6] transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-[#04A7D6] focus:ring-offset-2 rounded-md">
              <div class="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#04A7D6]/10 to-transparent rounded-full flex items-center justify-center group-hover:from-[#04A7D6]/30 group-hover:scale-105 transition-all duration-300 shadow-md group-focus:from-[#04A7D6]/30">
                <svg class="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="font-medium tracking-wider">leconfidentiel235@gmail.com</span>
            </a>
          </div>
        </div>

        <!-- 2. RUBRIQUES – Typographie premium, responsive & effets subtils avec accessibilité -->
        <div class="lg:col-span-4 space-y-8 md:space-y-10 mt-12 md:mt-0">
          <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#04A7D6] tracking-tight drop-shadow-sm">Rubriques</h3>
          <nav class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-base md:text-lg lg:text-xl font-medium">
            <RouterLink v-for="link in rubriques" :key="link.to" :to="link.to" class="group flex items-center gap-2 hover:text-[#04A7D6] transition-colors duration-300 focus:outline-none focus:text-[#04A7D6] focus:ring-2 focus:ring-[#04A7D6] focus:ring-offset-2 rounded-md" :class="link.class">
              <span class="w-0 h-0.5 bg-[#04A7D6] group-hover:w-6 transition-all duration-300 group-focus:w-6"></span>
              {{ link.text }}
            </RouterLink>
            <RouterLink to="/dossiers" class="text-xl md:text-2xl lg:text-3xl font-bold text-[#F9A826] group flex items-center gap-3 hover:opacity-90 transition-opacity duration-300 col-span-1 sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#F9A826] focus:ring-offset-2 rounded-md">
              <span class="w-0 h-1 bg-[#F9A826] group-hover:w-8 transition-all duration-500 group-focus:w-8 rounded-full"></span>
              DOSSIERS
            </RouterLink>
          </nav>
        </div>

        <!-- 3. NEWSLETTER + RÉSEAUX – Formulaire luxueux, responsive & icônes animées avec validation basique et visibilité accrue sur grands écrans -->
        <div class="lg:col-span-3 space-y-8 md:space-y-10 mt-12 md:mt-0">
          <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#04A7D6] tracking-tight drop-shadow-sm">Newsletter</h3>
          <p class="text-base md:text-lg lg:text-xl text-gray-200 font-serif leading-relaxed opacity-95">
            Recevez chaque matin l’essentiel de l’actualité, directement dans votre boîte.
          </p>
          <form class="space-y-4 md:space-y-6" @submit.prevent>
            <div class="flex flex-col sm:flex-row gap-4 lg:gap-5">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                required
                class="flex-1 px-6 py-4 md:px-8 md:py-6 lg:py-7 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl lg:rounded-3xl placeholder:text-gray-400 focus:outline-none focus:border-[#04A7D6] focus:bg-white/10 focus:ring-2 focus:ring-[#04A7D6]/20 transition-all duration-300 text-base md:text-lg lg:text-xl shadow-lg"
              />
              <button type="submit" class="px-8 py-4 md:px-12 md:py-6 lg:px-14 lg:py-7 bg-gradient-to-r from-[#04A7D6] to-[#048FC6] hover:from-[#048FC6] hover:to-[#04A7D6] rounded-2xl lg:rounded-3xl font-bold text-base md:text-lg lg:text-xl transition-all duration-300 shadow-lg hover:shadow-[#04A7D6]/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#04A7D6] focus:ring-offset-2">
                S’abonner
              </button>
            </div>
          </form>
          <!-- Réseaux sociaux – Icônes premium avec effet glow subtil et accessibilité -->
          <nav class="flex justify-start gap-6 md:gap-8 lg:gap-10">
            <a v-for="social in socials" :key="social.href" :href="social.href" target="_blank" rel="noopener noreferrer" class="group w-14 h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] bg-white/5 hover:bg-[#04A7D6]/20 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-[#04A7D6]/30 focus:outline-none focus:ring-2 focus:ring-[#04A7D6] focus:ring-offset-2" :aria-label="social.label">
              <component :is="social.icon" class="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 transition-filter duration-500 group-hover:filter group-hover:drop-shadow-md group-focus:filter group-focus:drop-shadow-md" />
            </a>
          </nav>
        </div>
      </div>

      <!-- Ligne finale – Élégante & Discrète avec transitions -->
      <div class="mt-16 md:mt-24 lg:mt-32 pt-8 md:pt-12 lg:pt-20 border-t border-white/10">
        <div class="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 text-sm md:text-base lg:text-lg text-gray-300 font-light tracking-wider">
          <p>© 2025 Le Confident — Tous droits réservés</p>
          <nav class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <RouterLink v-for="legal in legals" :key="legal.to" :to="legal.to" class="hover:text-[#04A7D6] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:text-[#04A7D6] focus:ring-2 focus:ring-[#04A7D6] focus:ring-offset-2">
              {{ legal.text }}
            </RouterLink>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  data() {
    return {
      rubriques: [
        { to: '/rubrique/actualites', text: 'Actualités' },
        { to: '/rubrique/analyses', text: 'Analyses' },
        { to: '/rubrique/enquetes', text: 'Enquêtes' },
        { to: '/rubrique/economie', text: 'Économie' },
        { to: '/rubrique/editorial', text: 'Éditorial', class: 'text-[#04A7D6] hover:opacity-80' },
      ],
      socials: [
        {
          href: 'https://www.facebook.com/profile.php?id=61558775472983',
          label: 'Facebook',
          icon: defineComponent({
            render: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, h('path', { d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.012 1.842-4.669 4.533-4.669 1.29 0 2.399.096 2.721.139v3.156h-1.863c-1.039 0-1.241.494-1.241 1.219v1.597h2.482l-.323 3.47h-2.159v8.385c5.737-.9 10.125-5.864 10.125-11.854z' })),
          }),
        },
        {
          href: 'https://x.com/LeConfident235',
          label: 'X (Twitter)',
          icon: defineComponent({
            render: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, h('path', { d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' })),
          }),
        },
        {
          href: 'https://instagram.com',
          label: 'Instagram',
          icon: defineComponent({
            render: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, h('path', { d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058 1.265-.069 1.645-.069 4.849 0 3.205.012 3.584.069 4.849.149 3.225 1.664 4.771 4.919 4.919 1.266.058 1.644.07 4.85.07 3.204 0 3.584-.012 4.849-.07 3.26-.149 4.771-1.699 4.919-4.919.058-1.265.069-1.645.069-4.849 0-3.205-.012-3.584-.069-4.849-.149-3.225-1.664-4.771-4.919-4.919-1.266-.058-1.644-.07-4.85-.07zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' })),
          }),
        },
      ],
      legals: [
        { to: '/mentions-legales', text: 'Mentions légales' },
        { to: '/politique-confidentialite', text: 'Politique de confidentialité' },
        { to: '/contact', text: 'Contact' },
      ],
    }
  },
})
</script>

<style scoped>
/* Effet glow subtil + rotation fluide sur les icônes sociales – Optimisé pour fluidité */
.group:hover svg,
.group:focus svg {
  filter: drop-shadow(0 0 12px rgba(4, 167, 214, 0.6));
  animation: subtleSpin 0.8s ease-in-out;
}

@keyframes subtleSpin {
  0% { transform: rotate(0deg); }
  50% { transform: rotate(8deg); }
  100% { transform: rotate(0deg); }
}

/* Media queries pour responsivité parfaite et progressive enhancement */
@media (min-width: 640px) {
  .grid {
    gap: 1.5rem;
  }
}

@media (min-width: 768px) {
  h3 {
    text-align: left;
  }
}

@media (min-width: 1024px) {
  .space-y-10 {
    space-y: 3.5rem;
  }
}
</style>