<!-- src/components/common/Footer.vue – VERSION ABSOLUE 2025 : DESIGN SENIOR ULTRA-ÉLÉGANT & LUXUEUX -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-gradient-to-b from-[#001F33] to-[#003B5C] text-white relative overflow-hidden">
    <!-- Fond décoratif subtil avec vagues modernes -->
    <div class="absolute inset-0 opacity-20">
      <svg class="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#04A7D6" fill-opacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-20 lg:gap-24">

        <!-- 1. LOGO + SLOGAN + CONTACT – Luxe & Spacieux -->
        <div class="lg:col-span-5">
          <RouterLink to="/" class="inline-block mb-16 group">
            <img src="@/assets/images/newlogo.jpg" alt="Le Confident"
                 class="h-32 w-auto transition-all duration-1000 ease-out group-hover:scale-110 group-hover:-rotate-2 drop-shadow-2xl" />
          </RouterLink>

          <p class="text-2xl leading-loose text-gray-100 max-w-md mb-16 font-light tracking-wider opacity-90">
            Informer juste, informer vrai et autrement.
          </p>

          <div class="space-y-8">
            <a href="mailto:leconfidentiel235@gmail.com"
               class="flex items-center gap-6 text-xl hover:text-[#04A7D6] transition-all duration-700 group">
              <div class="w-16 h-16 bg-gradient-to-br from-[#04A7D6]/20 to-[#04A7D6]/5 rounded-3xl flex items-center justify-center group-hover:from-[#04A7D6]/50 group-hover:to-[#04A7D6]/20 group-hover:scale-115 transition-all duration-700 shadow-xl">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="font-semibold tracking-wide">leconfidentiel235@gmail.com</span>
            </a>
          </div>
        </div>

        <!-- 2. RUBRIQUES – Typographie premium & Effets subtils -->
        <div class="lg:col-span-4">
          <h3 class="text-4xl font-black text-[#04A7D6] mb-14 tracking-tighter drop-shadow-md">Rubriques</h3>
          <div class="grid grid-cols-2 gap-x-16 gap-y-8 text-xl font-semibold">
            <RouterLink to="/rubrique/actualites" class="group flex items-center gap-3 hover:text-[#04A7D6] transition-all duration-500">
              <span class="w-0 group-hover:w-8 border-t-2 border-[#04A7D6] transition-all duration-500"></span>
              Actualités
            </RouterLink>
            <RouterLink to="/rubrique/analyses" class="group flex items-center gap-3 hover:text-[#04A7D6] transition-all duration-500">
              <span class="w-0 group-hover:w-8 border-t-2 border-[#04A7D6] transition-all duration-500"></span>
              Analyses
            </RouterLink>
            <RouterLink to="/rubrique/enquetes" class="group flex items-center gap-3 hover:text-[#04A7D6] transition-all duration-500">
              <span class="w-0 group-hover:w-8 border-t-2 border-[#04A7D6] transition-all duration-500"></span>
              Enquêtes
            </RouterLink>
            <RouterLink to="/rubrique/economie" class="group flex items-center gap-3 hover:text-[#04A7D6] transition-all duration-500">
              <span class="w-0 group-hover:w-8 border-t-2 border-[#04A7D6] transition-all duration-500"></span>
              Économie
            </RouterLink>
            <RouterLink to="/rubrique/editorial" class="group flex items-center gap-3 text-[#04A7D6] hover:opacity-80 transition-all duration-500">
              <span class="w-0 group-hover:w-8 border-t-2 border-white/50 transition-all duration-500"></span>
              Éditorial
            </RouterLink>
            <RouterLink to="/dossiers" class="text-3xl font-black text-[#F9A826] group flex items-center gap-3 hover:opacity-80 transition-all duration-500">
              <span class="w-0 group-hover:w-12 border-t-4 border-[#F9A826] transition-all duration-700 rounded-full"></span>
              DOSSIERS
            </RouterLink>
          </div>
        </div>

        <!-- 3. NEWSLETTER + RÉSEAUX – Formulaire luxueux & Icônes animées -->
        <div class="lg:col-span-3">
          <h3 class="text-4xl font-black text-[#04A7D6] mb-12 tracking-tighter drop-shadow-md">Newsletter</h3>
          <p class="text-gray-100 mb-12 text-xl font-light leading-relaxed opacity-90">
            Recevez chaque matin l’essentiel de l’actualité, directement dans votre boîte.
          </p>

          <form class="mb-20">
            <div class="flex flex-col sm:flex-row gap-5">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                class="flex-1 px-10 py-7 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl placeholder:text-gray-400 focus:outline-none focus:border-[#04A7D6] focus:bg-white/10 focus:ring-4 focus:ring-[#04A7D6]/30 transition-all duration-700 text-xl shadow-2xl"
              />
              <button class="px-14 py-7 bg-gradient-to-r from-[#04A7D6] to-[#048FC6] hover:from-[#048FC6] hover:to-[#04A7D6] rounded-3xl font-black text-xl transition-all duration-700 shadow-2xl hover:shadow-[#04A7D6]/50 hover:-translate-y-1">
                S’abonner
              </button>
            </div>
          </form>

          <!-- Réseaux sociaux – Icônes premium avec effet glow -->
          <div class="flex gap-10">
            <a href="https://www.facebook.com/profile.php?id=61558775472983" target="_blank" rel="noopener noreferrer"
               class="group w-18 h-18 bg-gradient-to-br from-white/5 to-white/10 hover:from-[#04A7D6]/60 hover:to-[#04A7D6]/30 rounded-3xl flex items-center justify-center transition-all duration-700 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-[#04A7D6]/60 backdrop-blur-sm">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.012 1.842-4.669 4.533-4.669 1.29 0 2.399.096 2.721.139v3.156h-1.863c-1.039 0-1.241.494-1.241 1.219v1.597h2.482l-.323 3.47h-2.159v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
              </svg>
            </a>

            <a href="https://x.com/LeConfident235" target="_blank" rel="noopener noreferrer"
               class="group w-18 h-18 bg-gradient-to-br from-white/5 to-white/10 hover:from-[#04A7D6]/60 hover:to-[#04A7D6]/30 rounded-3xl flex items-center justify-center transition-all duration-700 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-[#04A7D6]/60 backdrop-blur-sm">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer"
               class="group w-18 h-18 bg-gradient-to-br from-white/5 to-white/10 hover:from-[#04A7D6]/60 hover:to-[#04A7D6]/30 rounded-3xl flex items-center justify-center transition-all duration-700 hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-[#04A7D6]/60 backdrop-blur-sm">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058 1.265-.069 1.645-.069 4.849 0 3.205.012 3.584.069 4.849.149 3.225 1.664 4.771 4.919 4.919 1.266.058 1.644.07 4.85.07 3.204 0 3.584-.012 4.849-.07 3.26-.149 4.771-1.699 4.919-4.919.058-1.265.069-1.645.069-4.849 0-3.205-.012-3.584-.069-4.849-.149-3.225-1.664-4.771-4.919-4.919-1.266-.058-1.644-.07-4.85-.07zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- LIGNE FINALE – Élégante & Discrète -->
      <div class="mt-32 pt-20 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-10">
          <p class="text-gray-300 text-lg font-light tracking-wider">
            © 2025 Le Confident — Tous droits réservés
          </p>
          <div class="flex flex-wrap justify-center gap-12 text-lg font-medium">
            <RouterLink to="/mentions-legales" class="hover:text-[#04A7D6] transition-all duration-500 hover:translate-y-[-2px]">Mentions légales</RouterLink>
            <RouterLink to="/politique-confidentialite" class="hover:text-[#04A7D6] transition-all duration-500 hover:translate-y-[-2px]">Politique de confidentialité</RouterLink>
            <RouterLink to="/contact" class="hover:text-[#04A7D6] transition-all duration-500 hover:translate-y-[-2px]">Contact</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Effet glow + rotation fluide sur les icônes sociales */
a.group:hover svg {
  filter: drop-shadow(0 0 20px rgba(4, 167, 214, 0.8));
  animation: spinGlow 1s ease-in-out;
}

@keyframes spinGlow {
  0% { transform: rotate(0deg); }
  50% { transform: rotate(15deg); }
  100% { transform: rotate(0deg); }
}

/* Légère animation d'entrée au scroll (optionnel avec Intersection Observer si voulu) */
</style>