<!-- src/components/TheFooter.vue -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-[#003B5C] text-white">
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 md:py-20">
      <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">

        <!-- Colonne 1 : Logo, slogan & contact (plus large sur desktop) -->
        <div class="lg:col-span-5 space-y-8">
          <RouterLink to="/" class="inline-block">
            <img 
              src="@/assets/images/logo-white.svg" 
              alt="Le Confident" 
              class="h-16 sm:h-20 w-auto"
            />
          </RouterLink>

          <p class="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
            Informer juste, informer vrai et autrement.
          </p>

          <div class="space-y-4 text-sm sm:text-base text-gray-400">
            <p class="flex items-center gap-3">
              <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a 
                href="mailto:leconfidentiel235@gmail.com" 
                class="hover:text-[#04A7D6] transition-colors duration-200"
              >
                leconfidentiel235@gmail.com
              </a>
            </p>
          </div>
        </div>

        <!-- Colonne 2 : Rubriques -->
        <div class="lg:col-span-3">
          <h3 class="text-lg sm:text-xl font-extrabold mb-6 text-[#04A7D6]">Rubriques</h3>
          <ul class="grid grid-cols-2 gap-x-8 gap-y-4 text-gray-300">
            <li><RouterLink to="/rubrique/actualites" class="hover:text-white transition-colors duration-200">Actualités</RouterLink></li>
            <li><RouterLink to="/rubrique/analyses" class="hover:text-white transition-colors duration-200">Analyses</RouterLink></li>
            <li><RouterLink to="/rubrique/enquetes" class="hover:text-white transition-colors duration-200">Enquêtes</RouterLink></li>
            <li><RouterLink to="/rubrique/economie" class="hover:text-white transition-colors duration-200">Économie</RouterLink></li>
            <li><RouterLink to="/rubrique/editorial" class="hover:text-white transition-colors duration-200 font-semibold">Éditorial</RouterLink></li>
            <li class="col-span-2">
              <RouterLink 
                to="/dossiers" 
                class="text-[#F9A826] font-black text-lg hover:opacity-80 transition-opacity duration-200"
              >
                DOSSIERS
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Colonne 3 : Newsletter -->
        <div class="lg:col-span-4">
          <h3 class="text-lg sm:text-xl font-extrabold mb-6 text-[#04A7D6]">Newsletter</h3>
          <p class="text-gray-300 mb-6 text-base">
            Recevez l’essentiel de l’actualité chaque matin dans votre boîte mail.
          </p>

          <form class="flex flex-col sm:flex-row gap-4" @submit.prevent>
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              required
              class="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#04A7D6] focus:border-transparent transition-all duration-200"
            />
            <button 
              type="submit"
              class="px-8 py-4 bg-[#04A7D6] hover:bg-[#F9A826] hover:text-[#003B5C] rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              S’abonner
            </button>
          </form>
        </div>

        <!-- Colonne 4 : Réseaux sociaux (centrée sur mobile) -->
        <div class="lg:col-span-12 lg:col-start-10 lg:col-end-13 flex flex-col items-start lg:items-end">
          <h3 class="text-lg sm:text-xl font-extrabold mb-6 text-[#04A7D6] w-full text-left lg:text-right">
            Suivez-nous
          </h3>
          <div class="flex gap-5">
            <a 
              href="https://www.facebook.com/profile.php?id=61558775472983" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook Le Confident"
              class="w-14 h-14 bg-white/10 hover:bg-[#1877F2] rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 shadow-md"
            >
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.012 1.842-4.669 4.533-4.669 1.29 0 2.399.096 2.721.139v3.156h-1.863c-1.039 0-1.241.494-1.241 1.219v1.597h2.482l-.323 3.47h-2.159v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
              </svg>
            </a>

            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="X (Twitter) Le Confident"
              class="w-14 h-14 bg-white/10 hover:bg-black rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-rotate-3 shadow-md"
            >
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram Le Confident"
              class="w-14 h-14 bg-white/10 hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-500 hover:to-orange-400 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-md"
            >
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058 1.265-.069 1.645-.069 4.849 0 3.205.012 3.584.069 4.849.149 3.225 1.664 4.771 4.919 4.919 1.266.058 1.644.07 4.85.07 3.204 0 3.584-.012 4.849-.07 3.26-.149 4.771-1.699 4.919-4.919.058-1.265.069-1.645.069-4.849 0-3.205-.012-3.584-.069-4.849-.149-3.225-1.664-4.771-4.919-4.919-1.266-.058-1.644-.07-4.85-.07zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Ligne de séparation et mentions légales -->
      <div class="mt-16 pt-10 border-t border-white/10">
        <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-6">
          <p>© 2025 Le Confident — Tous droits réservés</p>
          <nav class="flex flex-wrap justify-center gap-6 md:gap-8">
            <RouterLink to="/mentions-legales" class="hover:text-white transition-colors duration-200">
              Mentions légales
            </RouterLink>
            <RouterLink to="/politique-confidentialite" class="hover:text-white transition-colors duration-200">
              Politique de confidentialité
            </RouterLink>
            <RouterLink to="/contact" class="hover:text-white transition-colors duration-200">
              Contact
            </RouterLink>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Amélioration subtile des interactions */
button, a {
  transition: all 0.3s ease;
}
</style>