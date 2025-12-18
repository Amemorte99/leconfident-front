<!-- src/components/TheFooter.vue -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="relative bg-[#003B5C] text-white overflow-hidden">
    <!-- Fond subtil élégant et professionnel (texture bleu marine profonde) -->
    <div class="absolute inset-0 opacity-20">
      <img 
        src="https://www.shutterstock.com/image-illustration/deep-textured-navy-blue-background-260nw-2649100833.jpg" 
        alt="Texture bleu marine élégante" 
        class="w-full h-full object-cover"
      />
    </div>

    <div class="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-20 md:py-28">
      <div class="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-12">

        <!-- Colonne 1 : Logo, slogan & contact -->
        <div class="lg:col-span-5 space-y-10">
          <RouterLink to="/" class="inline-block">
            <img 
              src="@/assets/images/logo-white.svg" 
              alt="Le Confident - Média d'information indépendant" 
              class="h-20 sm:h-24 w-auto drop-shadow-lg"
            />
          </RouterLink>

          <p class="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-lg font-light tracking-wide">
            Informer juste, informer vrai et autrement.
          </p>

          <div class="space-y-6 text-base text-gray-300">
            <p class="flex items-center gap-4">
              <svg class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a 
                href="mailto:leconfidentiel235@gmail.com" 
                class="hover:text-[#04A7D6] transition-colors duration-300 font-medium"
              >
                leconfidentiel235@gmail.com
              </a>
            </p>
          </div>
        </div>

        <!-- Colonne 2 : Rubriques – Disposition en grille équilibrée -->
        <div class="lg:col-span-3">
          <h3 class="text-xl sm:text-2xl font-extrabold mb-8 text-[#04A7D6] tracking-wider">Rubriques</h3>
          <ul class="grid grid-cols-2 gap-x-10 gap-y-6 text-gray-200 text-base">
            <li><RouterLink to="/rubrique/actualites" class="hover:text-white transition-colors duration-300">Actualités</RouterLink></li>
            <li><RouterLink to="/rubrique/analyses" class="hover:text-white transition-colors duration-300">Analyses</RouterLink></li>
            <li><RouterLink to="/rubrique/enquetes" class="hover:text-white transition-colors duration-300">Enquêtes</RouterLink></li>
            <li><RouterLink to="/rubrique/economie" class="hover:text-white transition-colors duration-300">Économie</RouterLink></li>
            <li><RouterLink to="/rubrique/editorial" class="hover:text-white transition-colors duration-300 font-bold">Éditorial</RouterLink></li>
            <li class="col-span-2 mt-6">
              <RouterLink 
                to="/dossiers" 
                class="text-[#F9A826] font-black text-2xl hover:opacity-80 transition-opacity duration-300 block text-center"
              >
                DOSSIERS
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Colonne 3 : Newsletter -->
        <div class="lg:col-span-4">
          <h3 class="text-xl sm:text-2xl font-extrabold mb-8 text-[#04A7D6] tracking-wider">Newsletter</h3>
          <p class="text-gray-200 mb-10 text-base leading-relaxed">
            Recevez l’essentiel de l’actualité chaque matin dans votre boîte mail.
          </p>

          <form class="flex flex-col sm:flex-row gap-5" @submit.prevent>
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              required
              class="flex-1 px-8 py-5 bg-white/10 border border-white/30 rounded-2xl placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#04A7D6]/50 focus:border-[#04A7D6] transition-all duration-300 text-white"
            />
            <button 
              type="submit"
              class="px-10 py-5 bg-[#04A7D6] hover:bg-[#F9A826] hover:text-[#003B5C] rounded-2xl font-black text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              S’abonner
            </button>
          </form>
        </div>

        <!-- Colonne 4 : Réseaux sociaux – Alignement parfait droite sur desktop -->
        <div class="lg:col-span-12 lg:col-start-10 lg:col-end-13 flex flex-col items-start lg:items-end">
          <h3 class="text-xl sm:text-2xl font-extrabold mb-8 text-[#04A7D6] tracking-wider w-full text-left lg:text-right">
            Suivez-nous
          </h3>
          <div class="flex gap-8">
            <a 
              href="https://www.facebook.com/profile.php?id=61558775472983" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook Le Confident"
              class="w-16 h-16 bg-white/10 hover:bg-[#1877F2] rounded-3xl flex items-center justify-center transition-all duration-400 hover:scale-115 hover:rotate-6 shadow-lg"
            >
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.012 1.842-4.669 4.533-4.669 1.29 0 2.399.096 2.721.139v3.156h-1.863c-1.039 0-1.241.494-1.241 1.219v1.597h2.482l-.323 3.47h-2.159v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
              </svg>
            </a>

            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="X (Twitter) Le Confident"
              class="w-16 h-16 bg-white/10 hover:bg-black rounded-3xl flex items-center justify-center transition-all duration-400 hover:scale-115 hover:-rotate-6 shadow-lg"
            >
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram Le Confident"
              class="w-16 h-16 bg-white/10 hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-500 hover:to-orange-400 rounded-3xl flex items-center justify-center transition-all duration-400 hover:scale-115 hover:rotate-12 shadow-lg"
            >
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058 1.265-.069 1.645-.069 4.849 0 3.205.012 3.584.069 4.849.149 3.225 1.664 4.771 4.919 4.919 1.266.058 1.644.07 4.85.07 3.204 0 3.584-.012 4.849-.07 3.26-.149 4.771-1.699 4.919-4.919.058-1.265.069-1.645.069-4.849 0-3.205-.012-3.584-.069-4.849-.149-3.225-1.664-4.771-4.919-4.919-1.266-.058-1.644-.07-4.85-.07zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Mentions légales – Centrage parfait sur mobile -->
      <div class="mt-20 pt-12 border-t border-white/20">
        <div class="flex flex-col md:flex-row justify-between items-center text-sm sm:text-base text-gray-300 gap-8">
          <p class="text-center md:text-left">© 2025 Le Confident — Tous droits réservés</p>
          <nav class="flex flex-wrap justify-center gap-8 md:gap-12">
            <RouterLink to="/mentions-legales" class="hover:text-white transition-colors duration-300">
              Mentions légales
            </RouterLink>
            <RouterLink to="/politique-confidentialite" class="hover:text-white transition-colors duration-300">
              Politique de confidentialité
            </RouterLink>
            <RouterLink to="/contact" class="hover:text-white transition-colors duration-300">
              Contact
            </RouterLink>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Transitions fluides et professionnelles */
button, a, input {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>