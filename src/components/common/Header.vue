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

const isMobileMenuOpen = ref(false)

const categories = ref([
  'National', 'International', 'Politique', 'Société',
  'Économie & Business', 'Sécurité & Défense', 'Diplomatie',
  'Culture', 'Tech & Innovation', 'Opinions', 'Reportages'
])
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-md">
    <!-- Breaking News -->
    <BreakingNewsBanner v-if="breakingNews" :news="breakingNews" />

    <!-- Barre principale -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <RouterLink to="/" class="flex items-center">
            <img
              src="@/assets/images/logo-confident.svg"
              alt="Le Confident"
              class="h-14 md:h-16 transition-transform hover:scale-105"
            >
          </RouterLink>

          <!-- Menu Desktop -->
          <nav class="hidden lg:flex items-center space-x-10">
            <RouterLink to="/" class="text-gray-800 hover:text-bleu-confident font-semibold transition">
              Accueil
            </RouterLink>
            <RouterLink to="/rubrique/actualites" class="text-gray-800 hover:text-bleu-confident font-semibold transition">
              Actualités
            </RouterLink>
            <RouterLink to="/rubrique/analyses" class="text-gray-800 hover:text-bleu-confident font-semibold transition">
              Analyses
            </RouterLink>
            <RouterLink to="/rubrique/enquetes" class="text-gray-800 hover:text-bleu-confident font-semibold transition">
              Enquêtes
            </RouterLink>
            <RouterLink to="/rubrique/economie" class="text-gray-800 hover:text-bleu-confident font-semibold transition">
              Économie
            </RouterLink>
            <RouterLink to="/dossiers" class="text-orange-breaking font-black text-lg hover:opacity-80 transition">
              DOSSIERS
            </RouterLink>
          </nav>

          <!-- Actions droite -->
          <div class="flex items-center gap-4">
            <SearchBar />
            <button aria-label="Mode sombre" class="p-2 rounded-full hover:bg-gray-100 transition">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            <!-- Burger Mobile -->
            <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Menu"
            >
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu rubriques secondaire (desktop + mobile) -->
    <div class="bg-softGray border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="hidden lg:flex flex-wrap gap-8 py-3 text-xs font-bold uppercase tracking-wider text-gray-700">
          <RouterLink
            v-for="cat in categories"
            :key="cat"
            :to="`/rubrique/${cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`"
            class="hover:text-bleu-confident transition"
          >
            {{ cat }}
          </RouterLink>
        </div>

        <!-- Menu mobile déroulant -->
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform -translate-y-4 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-4 opacity-0"
        >
          <div v-if="isMobileMenuOpen" class="lg:hidden py-4 border-t border-gray-300">
            <div class="grid grid-cols-2 gap-4 text-sm font-semibold">
              <RouterLink to="/" @click="isMobileMenuOpen = false" class="py-2 hover:text-bleu-confident">
                Accueil
              </RouterLink>
              <RouterLink to="/rubrique/actualites" @click="isMobileMenuOpen = false" class="py-2 hover:text-bleu-confident">
                Actualités
              </RouterLink>
              <RouterLink to="/rubrique/analyses" @click="isMobileMenuOpen = false" class="py-2 hover:text-bleu-confident">
                Analyses
              </RouterLink>
              <RouterLink to="/rubrique/enquetes" @click="isMobileMenuOpen = false" class="py-2 hover:text-bleu-confident">
                Enquêtes
              </RouterLink>
              <RouterLink to="/dossiers" @click="isMobileMenuOpen = false" class="py-2 text-orange-breaking font-bold">
                DOSSIERS
              </RouterLink>
            </div>
            <div class="mt-6 pt-6 border-t border-gray-300 space-y-3 text-sm">
              <RouterLink
                v-for="cat in categories"
                :key="cat"
                :to="`/rubrique/${cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`"
                @click="isMobileMenuOpen = false"
                class="block py-2 hover:text-bleu-confident"
              >
                {{ cat }}
              </RouterLink>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>