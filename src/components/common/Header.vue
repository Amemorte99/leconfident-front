<!-- src/components/common/Header.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import BreakingNewsBanner from '@/components/common/BreakingNewsBanner.vue'
import SearchBar from '@/components/common/SearchBar.vue'

const mobileMenuOpen = ref(false)
const breakingNews = ref({
  title: 'Urgent : Le gouvernement annonce un couvre-feu national à partir de 20h ce soir',
  link: '/article/couvre-feu-national-2025'
})
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm">
    <!-- BREAKING NEWS – Orange clair -->
    <BreakingNewsBanner v-if="breakingNews" :news="breakingNews" />

    <!-- BARRE PRINCIPALE – Sobre et luxueuse -->
    <div class="border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-24 lg:h-28">

          <!-- LOGO À GAUCHE -->
          <RouterLink to="/" class="flex items-center">
            <img
              src="@/assets/images/logo-removebg.png"
              alt="Le Confident"
              class="h-24 lg:h-28 xl:h-32 w-auto transition-all duration-500 hover:scale-105"
            />
          </RouterLink>

          <!-- MENU PRINCIPAL DESKTOP – avec Éditorial -->
          <nav class="hidden lg:flex items-center space-x-10 xl:space-x-14">
            <RouterLink to="/" class="text-lg font-bold text-black hover:text-[#04A7D6] transition">Accueil</RouterLink>
            <RouterLink to="/rubrique/actualites" class="text-lg font-bold text-black hover:text-[#04A7D6] transition">Actualités</RouterLink>
            <RouterLink to="/rubrique/analyses" class="text-lg font-bold text-black hover:text-[#04A7D6] transition">Analyses</RouterLink>
            <RouterLink to="/rubrique/enquetes" class="text-lg font-bold text-black hover:text-[#04A7D6] transition">Enquêtes</RouterLink>
            <RouterLink to="/rubrique/economie" class="text-lg font-bold text-black hover:text-[#04A7D6] transition">Économie</RouterLink>
            <RouterLink to="/rubrique/editorial" class="text-lg font-bold text-black hover:text-[#04A7D6] transition">Éditorial</RouterLink>
            <RouterLink to="/dossiers" class="text-xl font-extrabold text-[#F9A826] hover:opacity-90 transition">DOSSIERS</RouterLink>
          </nav>

          <!-- RECHERCHE + DARK + BURGER -->
          <div class="flex items-center gap-6">
            <SearchBar />
            <button aria-label="Mode sombre" class="hidden md:block p-3 rounded-full hover:bg-[#F2F2F2] transition">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            <!-- BURGER MOBILE -->
            <button @click="mobileMenuOpen = !mobileMenuOpen"
              class="lg:hidden p-3 rounded-lg hover:bg-[#F2F2F2] transition">
              <svg class="w-7 h-7 text-black" :class="{ hidden: mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="w-7 h-7 text-black" :class="{ hidden: !mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- MENU SECONDAIRE – Gris doux + Éditorial ajouté -->
    <div class="bg-[#F2F2F2] border-t border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="hidden lg:flex flex-wrap justify-center gap-x-12 gap-y-3 py-5 text-xs font-extrabold uppercase tracking-widest text-black/70">
          <RouterLink to="/rubrique/national" class="hover:text-[#04A7D6] transition">National</RouterLink>
          <RouterLink to="/rubrique/international" class="hover:text-[#04A7D6] transition">International</RouterLink>
          <RouterLink to="/rubrique/politique" class="hover:text-[#04A7D6] transition">Politique</RouterLink>
          <RouterLink to="/rubrique/societe" class="hover:text-[#04A7D6] transition">Société</RouterLink>
          <RouterLink to="/rubrique/economie" class="hover:text-[#04A7D6] transition">Économie & Business</RouterLink>
          <RouterLink to="/rubrique/securite" class="hover:text-[#04A7D6] transition">Sécurité & Défense</RouterLink>
          <RouterLink to="/rubrique/diplomatie" class="hover:text-[#04A7D6] transition">Diplomatie</RouterLink>
          <RouterLink to="/rubrique/culture" class="hover:text-[#04A7D6] transition">Culture</RouterLink>
          <RouterLink to="/rubrique/tech" class="hover:text-[#04A7D6] transition">Tech & Innovation</RouterLink>
          <RouterLink to="/rubrique/opinions" class="hover:text-[#04A7D6] transition">Opinions</RouterLink>
          <RouterLink to="/rubrique/editorial" class="hover:text-[#04A7D6] font-extrabold transition">Éditorial</RouterLink>
          <RouterLink to="/rubrique/reportages" class="hover:text-[#04A7D6] transition">Reportages</RouterLink>
        </div>

        <!-- MENU MOBILE FULL SCREEN – Éditorial bien visible -->
        <Teleport to="body">
          <transition
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-if="mobileMenuOpen" class="fixed inset-0 z-[9999] bg-white lg:hidden" @click="mobileMenuOpen = false">
              <div class="pt-32 pb-20 px-8 text-center">
                <nav class="space-y-10">
                  <RouterLink to="/" @click="mobileMenuOpen=false" class="block text-4xl font-extrabold text-[#003B5C] hover:text-[#04A7D6] transition">Accueil</RouterLink>
                  <RouterLink to="/rubrique/actualites" @click="mobileMenuOpen=false" class="block text-4xl font-extrabold text-[#003B5C] hover:text-[#04A7D6] transition">Actualités</RouterLink>
                  <RouterLink to="/rubrique/analyses" @click="mobileMenuOpen=false" class="block text-4xl font-extrabold text-[#003B5C] hover:text-[#04A7D6] transition">Analyses</RouterLink>
                  <RouterLink to="/rubrique/enquetes" @click="mobileMenuOpen=false" class="block text-4xl font-extrabold text-[#003B5C] hover:text-[#04A7D6] transition">Enquêtes</RouterLink>
                  <RouterLink to="/dossiers" @click="mobileMenuOpen=false" class="block text-6xl font-extrabold text-[#F9A826] my-12">DOSSIERS</RouterLink>
                  <RouterLink to="/rubrique/editorial" @click="mobileMenuOpen=false" class="block text-4xl font-extrabold text-[#04A7D6] my-8">Éditorial</RouterLink>
                  <div class="pt-10 border-t border-gray-200 space-y-6 text-xl font-medium text-gray-700">
                    <RouterLink v-for="cat in ['National','International','Politique','Société','Économie & Business','Sécurité & Défense','Diplomatie','Culture','Tech & Innovation','Opinions','Reportages']"
                      :key="cat"
                      :to="`/rubrique/${cat.toLowerCase().replace(/ & /g,'-').replace(/ /g,'-')}`"
                      @click="mobileMenuOpen=false"
                      class="block hover:text-[#04A7D6] transition"
                    >{{ cat }}</RouterLink>
                  </div>
                </nav>
              </div>
            </div>
          </transition>
        </Teleport>
      </div>
    </div>
  </header>
</template>