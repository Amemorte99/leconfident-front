<!-- src/components/common/Footer.vue – VERSION ULTIME 2025 -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-[#003B5C] text-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-16">

        <!-- 1. LOGO + SLOGAN + CONTACT (gauche) -->
        <div class="lg:col-span-5">
          <RouterLink to="/" class="inline-block mb-10 group">
            <img src="@/assets/images/logo-white.svg" alt="Le Confident"
                 class="h-24 w-auto transition-transform duration-700 group-hover:scale-110" />
          </RouterLink>

          <p class="text-xl leading-relaxed text-gray-300 max-w-lg mb-12">
            Informer juste, informer vrai et autrement.
          </p>

          <div class="space-y-5 text-gray-400">
            <a href="mailto:leconfidentiel235@gmail.com"
               class="flex items-center gap-4 text-lg hover:text-[#04A7D6] transition group">
              <div class="w-12 h-12 bg-[#04A7D6]/20 rounded-2xl flex items-center justify-center group-hover:bg-[#04A7D6] transition">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span>leconfidentiel235@gmail.com</span>
            </a>
          </div>
        </div>

        <!-- 2. RUBRIQUES (milieu) -->
        <div class="lg:col-span-4">
          <h3 class="text-2xl font-extrabold text-[#04A7D6] mb-10 tracking-tight">Rubriques</h3>
          <div class="grid grid-cols-2 gap-x-10 gap-y-5 text-lg">
            <RouterLink to="/rubrique/actualites" class="hover:text-[#04A7D6] transition">Actualités</RouterLink>
            <RouterLink to="/rubrique/analyses" class="hover:text-[#04A7D6] transition">Analyses</RouterLink>
            <RouterLink to="/rubrique/enquetes" class="hover:text-[#04A7D6] transition">Enquêtes</RouterLink>
            <RouterLink to="/rubrique/economie" class="hover:text-[#04A7D6] transition">Économie</RouterLink>
            <RouterLink to="/rubrique/editorial" class="font-black text-[#04A7D6] hover:opacity-80 transition">Éditorial</RouterLink>
            <RouterLink to="/dossiers" class="text-2xl font-extrabold text-[#F9A826] hover:opacity-80 transition">DOSSIERS</RouterLink>
          </div>
        </div>

        <!-- 3. NEWSLETTER + RÉSEAUX (droite) -->
        <div class="lg:col-span-3">
          <h3 class="text-2xl font-extrabold text-[#04A7D6] mb-8 tracking-tight">Newsletter</h3>
          <p class="text-gray-300 mb-8">Recevez chaque matin l’essentiel de l’actualité.</p>

          <form class="mb-12">
            <div class="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre e-mail"
                class="flex-1 px-7 py-5 bg-white/10 border border-white/20 rounded-2xl placeholder:text-gray-500 focus:outline-none focus:border-[#04A7D6] focus:bg-white/20 transition text-lg"
              />
              <button class="px-10 py-5 bg-[#04A7D6] hover:bg-white hover:text-[#003B5C] rounded-2xl font-black text-lg transition duration-500 shadow-lg hover:shadow-[#04A7D6]/30">
                S’abonner
              </button>
            </div>
          </form>

          <div class="flex gap-6">
            <a href="https://www.facebook.com/profile.php?id=61558775472983" target="_blank"
               class="group w-16 h-16 bg-white/10 hover:bg-[#04A7D6] rounded-3xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-xl">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.012 1.842-4.669 4.533-4.669 1.29 0 2.399.096 2.721.139v3.156h-1.863c-1.039 0-1.241.494-1.241 1.219v1.597h2.482l-.323 3.47h-2.159v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
              </svg>
            </a>

            <a href="#" target="_blank"
               class="group w-16 h-16 bg-white/10 hover:bg-[#04A7D6] rounded-3xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-xl">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a href="#" target="_blank"
               class="group w-16 h-16 bg-white/10 hover:bg-[#04A7D6] rounded-3xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-xl">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058 1.265-.069 1.645-.069 4.849 0 3.205.012 3.584.069 4.849.149 3.225 1.664 4.771 4.919 4.919 1.266.058 1.644.07 4.85.07 3.204 0 3.584-.012 4.849-.07 3.26-.149 4.771-1.699 4.919-4.919.058-1.265.069-1.645.069-4.849 0-3.205-.012-3.584-.069-4.849-.149-3.225-1.664-4.771-4.919-4.919-1.266-.058-1.644-.07-4.85-.07zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- LIGNE FINALE -->
      <div class="mt-20 pt-12 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <p class="text-gray-400 text-sm">
            © 2025 Le Confident — Tous droits réservés
          </p>
          <div class="flex flex-wrap justify-center gap-8 mt-6 lg:mt-0 text-sm">
            <RouterLink to="/mentions-legales" class="hover:text-[#04A7D6] transition">Mentions légales</RouterLink>
            <RouterLink to="/politique-confidentialite" class="hover:text-[#04A7D6] transition">Politique de confidentialité</RouterLink>
            <RouterLink to="/contact" class="hover:text-[#04A7D6] transition">Contact</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Effet brillance subtil sur les icônes sociales */
a:hover svg {
  filter: drop-shadow(0 0 12px rgba(4, 167, 214, 0.6));
}
</style>