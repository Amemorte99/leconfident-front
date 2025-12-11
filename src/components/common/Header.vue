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
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
    <!-- Breaking News -->
    <BreakingNewsBanner v-if="breakingNews" :news="breakingNews" />

    <!-- Barre principale -->
    <div class="border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-24 lg:h-28">

          <!-- Logo -->
          <RouterLink to="/" class="flex items-center">
            <img
              src="@/assets/images/logo-confident.svg"
              alt="Le Confident"
              class="h-20 lg:h-24 transition-all duration-500 hover:scale-105"
            />
          </RouterLink>

          <!-- Menu principal desktop -->
          <nav class="hidden lg:flex items-center space-x-10 xl:space-x-14">
            <RouterLink to="/" class="text-lg font-medium text-gray-800 hover:text-[#04A7D6] transition">Accueil</RouterLink>
            <RouterLink to="/rubrique/actualites" class="text-lg font-medium text-gray-800 hover:text-[#04A7D6] transition">Actualités</RouterLink>
            <RouterLink to="/rubrique/analyses" class="text-lg font-medium text-gray-800 hover:text-[#04A7D6] transition">Analyses</RouterLink>
            <RouterLink to="/rubrique/enquetes" class="text-lg font-medium text-gray-800 hover:text-[#04A7D6] transition">Enquêtes</RouterLink>
            <RouterLink to="/rubrique/economie" class="text-lg font-medium text-gray-800 hover:text-[#04A7D6] transition">Economie</RouterLink>
            <RouterLink to="/dossiers" class="text-xl font-black text-[#F9A826] hover:opacity-80 transition">DOSSIERS</RouterLink>
          </nav>

          <!-- Actions droite -->
          <div class="flex items-center gap-4 lg:gap-6">
            <SearchBar />
            <button aria-label="Mode sombre" class="hidden sm:block p-3 rounded-full hover:bg-gray-100 transition">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            <!-- Burger mobile -->
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition"
            >
              <svg class="w-7 h-7" :class="{ hidden: mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="w-7 h-7" :class="{ hidden: !mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu secondaire + Mobile full screen -->
    <div class="bg-[#F2F2F2]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Desktop secondaire -->
        <div class="hidden lg:flex flex-wrap justify-center gap-x-10 gap-y-4 py-5 text-xs font-black uppercase tracking-widest text-gray-700">
          <RouterLink
            v-for="cat in ['National','International','Politique','Société','Économie & Business','Sécurité & Défense','Diplomatie','Culture','Tech & Innovation','Opinions','Reportages']"
            :key="cat"
            :to="`/rubrique/${cat.toLowerCase().replace(/ & /g,'-').replace(/ /g,'-')}`"
            class="hover:text-[#04A7D6] transition"
          >{{ cat }}</RouterLink>
        </div>

        <!-- MENU MOBILE FULL SCREEN – ULTRA LUXE -->
        <Teleport to="body">
          <transition
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-if="mobileMenuOpen" class="fixed inset-0 z-[9998] bg-black/60 lg:hidden" @click="mobileMenuOpen = false">
              <div class="fixed inset-x-0 top-0 bg-white shadow-2xl pt-28 pb-12 px-8 overflow-y-auto">
                <nav class="space-y-8 text-center">
                  <RouterLink to="/" @click="mobileMenuOpen=false" class="block text-3xl font-black text-[#003B5C] hover:text-[#04A7D6] transition">Accueil</RouterLink>
                  <RouterLink to="/rubrique/actualites" @click="mobileMenuOpen=false" class="block text-3xl font-black text-[#003B5C] hover:text-[#04A7D6] transition">Actualités</RouterLink>
                  <RouterLink to="/rubrique/analyses" @click="mobileMenuOpen=false" class="block text-3xl font-black text-[#003B5C] hover:text-[#04A7D6] transition">Analyses</RouterLink>
                  <RouterLink to="/rubrique/enquetes" @click="mobileMenuOpen=false" class="block text-3xl font-black text-[#003B5C] hover:text-[#04A7D6] transition">Enquêtes</RouterLink>
                  <RouterLink to="/dossiers" @click="mobileMenuOpen=false" class="block text-4xl font-black text-[#F9A826] my-8">DOSSIERS</RouterLink>
                  <div class="pt-8 border-t border-gray-200 space-y-6 text-lg font-medium text-gray-600">
                    <RouterLink
                      v-for="cat in ['National','International','Politique','Société','Économie & Business','Sécurité & Défense','Diplomatie','Culture','Tech & Innovation','Opinions','Reportages']"
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