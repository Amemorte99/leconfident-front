<!-- src/components/common/Header.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import BreakingNewsBanner from '@/components/common/BreakingNewsBanner.vue'
import SearchBar from '@/components/common/SearchBar.vue'

const breakingNews = ref({
  title: 'Urgent : Le gouvernement annonce un couvre-feu national à partir de 20h ce soir',
  link: '/article/couvre-feu-national-2025'
})

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm">
    <!-- BREAKING NEWS ORANGE -->
    <BreakingNewsBanner v-if="breakingNews" :news="breakingNews" />

    <!-- BARRE PRINCIPALE HAUTEUR 90px -->
    <div class="border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-24">

          <!-- LOGO À GAUCHE -->
          <RouterLink to="/" class="flex items-center -ml-2">
            <img
              src="@/assets/images/logo-confident.svg"
              alt="Le Confident"
              class="h-20 md:h-24 transition-all duration-300 hover:scale-105"
            />
          </RouterLink>

          <!-- MENU PRINCIPAL DESKTOP – CENTRÉ, SOBRE, PRO -->
          <nav class="hidden xl:flex items-center space-x-12">
            <RouterLink to="/" class="text-base font-medium text-gray-800 hover:text-[#04A7D6] transition">
              Accueil
            </RouterLink>
            <RouterLink to="/rubrique/actualites" class="text-base font-medium text-gray-800 hover:text-[#04A7D6] transition">
              Actualités
            </RouterLink>
            <RouterLink to="/rubrique/analyses" class="text-base font-medium text-gray-800 hover:text-[#04A7D6] transition">
              Analyses
            </RouterLink>
            <RouterLink to="/rubrique/enquetes" class="text-base font-medium text-gray-800 hover:text-[#04A7D6] transition">
              Enquêtes
            </RouterLink>
            <RouterLink to="/rubrique/economie" class="text-base font-medium text-gray-800 hover:text-[#04A7D6] transition">
              Économie
            </RouterLink>
            <RouterLink to="/dossiers" class="text-lg font-black text-[#F9A826] hover:opacity-80 transition">
              DOSSIERS
            </RouterLink>
          </nav>

          <!-- DROITE : RECHERCHE + DARK MODE + BURGER -->
          <div class="flex items-center gap-4">
            <SearchBar />
            <button aria-label="Mode sombre" class="p-3 rounded-full hover:bg-gray-100 transition">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            <!-- BURGER MOBILE -->
            <button @click="mobileMenuOpen = !mobileMenuOpen"
              class="xl:hidden p-3 rounded-lg hover:bg-gray-50 transition">
              <svg class="w-7 h-7" :class="{ 'hidden': mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="w-7 h-7" :class="{ 'hidden': !mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- MENU SECONDAIRE FIN, GRIS DOUX, TOUT EN MAJUSCULES -->
    <div class="bg-[#F2F2F2] border-t border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="hidden xl:flex flex-wrap justify-center gap-x-10 gap-y-3 py-4 text-xs font-bold uppercase tracking-widest text-gray-700">
          <RouterLink v-for="cat in ['National','International','Politique','Société','Économie & Business','Sécurité & Défense','Diplomatie','Culture','Tech & Innovation','Opinions','Reportages']"
            :key="cat"
            :to="`/rubrique/${cat.toLowerCase().replace(/ & /g,'-').replace(/ /g,'-')}`"
            class="hover:text-[#04A7D6] transition">
            {{ cat }}
          </RouterLink>
        </div>

        <!-- MENU MOBILE DÉROULANT – ÉLÉGANT ET AÉRÉ -->
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4">
          <nav v-if="mobileMenuOpen" class="xl:hidden py-6 border-t border-gray-300 bg-white">
            <div class="space-y-5 text-center">
              <RouterLink to="/" @click="mobileMenuOpen=false" class="block text-lg font-semibold hover:text-[#04A7D6]">Accueil</RouterLink>
              <RouterLink to="/rubrique/actualites" @click="mobileMenuOpen=false" class="block text-lg font-semibold hover:text-[#04A7D6]">Actualités</RouterLink>
              <RouterLink to="/rubrique/analyses" @click="mobileMenuOpen=false" class="block text-lg font-semibold hover:text-[#04A7D6]">Analyses</RouterLink>
              <RouterLink to="/rubrique/enquetes" @click="mobileMenuOpen=false" class="block text-lg font-semibold hover:text-[#04A7D6]">Enquêtes</RouterLink>
              <RouterLink to="/dossiers" @click="mobileMenuOpen=false" class="block text-xl font-black text-[#F9A826]">DOSSIERS</RouterLink>
            </div>
            <div class="mt-8 pt-8 border-t border-gray-200 space-y-4 text-sm font-medium text-gray-600">
              <RouterLink v-for="cat in ['National','International','Politique','Société','Économie & Business','Sécurité & Défense','Diplomatie','Culture','Tech & Innovation','Opinions','Reportages']"
                :key="cat"
                :to="`/rubrique/${cat.toLowerCase().replace(/ & /g,'-').replace(/ /g,'-')}`"
                @click="mobileMenuOpen=false"
                class="block hover:text-[#04A7D6] transition">
                {{ cat }}
              </RouterLink>
            </div>
          </nav>
        </transition>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Petits ajustements pour que ton variables.css ne couvre pas encore */
.hover\:text-confident:hover { color: #04A7D6; }
</style>