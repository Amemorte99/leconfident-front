<!-- src/components/common/Header.vue – MOBILE DÉROULANT PARFAIT 2025 -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import BreakingNewsBanner from '@/components/common/BreakingNewsBanner.vue'
import SearchBar from '@/components/common/SearchBar.vue'

// Dark mode
const isDark = ref(false)
onMounted(() => {
  const saved = localStorage.getItem('leconfident-theme')
  isDark.value = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
  if (isDark.value) document.documentElement.classList.add('dark')
})
const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('leconfident-theme', isDark.value ? 'dark' : 'light')
}

// Menu mobile
const mobileMenuOpen = ref(false)

// Breaking news
const breakingNews = ref({
  title: 'Urgent : Le gouvernement annonce un couvre-feu national à partir de 20h ce soir',
  link: '/article/couvre-feu-national-2025'
})

// Logos
const logoLight = new URL('@/assets/images/logo-removebg.png', import.meta.url).href
const logoDark = new URL('@/assets/images/logo-confident.svg', import.meta.url).href
</script>

<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-[#001F33] shadow-lg transition-colors duration-500">
    <BreakingNewsBanner v-if="breakingNews" :news="breakingNews" />

    <!-- BARRE PRINCIPALE -->
    <div class="border-b border-gray-200 dark:border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between h-28 lg:h-32">

          <!-- LOGO -->
          <RouterLink to="/" class="group -ml-3">
            <img
              :src="isDark ? logoDark : logoLight"
              alt="Le Confident"
              class="h-28 lg:h-36 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </RouterLink>

          <!-- MENU DESKTOP -->
          <nav class="hidden lg:flex items-center gap-10 xl:gap-14">
            <RouterLink to="/" class="text-xl font-bold text-gray-900 dark:text-white hover:text-[#04A7D6] transition">Accueil</RouterLink>
            <RouterLink to="/rubrique/actualites" class="text-xl font-bold text-gray-900 dark:text-white hover:text-[#04A7D6] transition">Actualités</RouterLink>
            <RouterLink to="/rubrique/analyses" class="text-xl font-bold text-gray-900 dark:text-white hover:text-[#04A7D6] transition">Analyses</RouterLink>
            <RouterLink to="/rubrique/enquetes" class="text-xl font-bold text-gray-900 dark:text-white hover:text-[#04A7D6] transition">Enquêtes</RouterLink>
            <RouterLink to="/rubrique/economie" class="text-xl font-bold text-gray-900 dark:text-white hover:text-[#04A7D6] transition">Économie</RouterLink>
            <RouterLink to="/rubrique/editorial" class="text-xl font-bold text-gray-900 dark:text-white hover:text-[#04A7D6] transition">Éditorial</RouterLink>
            <RouterLink to="/dossiers" class="text-2xl font-extrabold text-[#F9A826] hover:opacity-90 transition">DOSSIERS</RouterLink>
          </nav>

          <!-- ACTIONS DROITE -->
          <div class="flex items-center gap-6">
            <SearchBar />
            <button @click="toggleDarkMode" class="p-4 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition">
              <svg v-if="!isDark" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
              <svg v-else class="w-6 h-6 text-[#04A7D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </button>

            <!-- BURGER MOBILE -->
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition">
              <svg class="w-7 h-7" :class="{ hidden: mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg class="w-7 h-7" :class="{ hidden: !mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- MENU SECONDAIRE DESKTOP -->
    <div class="bg-[#F2F2F2] dark:bg-[#001F33]/80 border-t border-b border-gray-200 dark:border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <nav class="hidden lg:flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs font-extrabold uppercase tracking-widest text-gray-700 dark:text-gray-200">
          <RouterLink v-for="cat in ['National','International','Politique','Société','Économie & Business','Sécurité & Défense','Diplomatie','Culture','Tech & Innovation','Opinions','Éditorial','Reportages']"
                :key="cat"
                :to="`/rubrique/${cat.toLowerCase().replace(/ & /g,'-').replace(/ /g,'-')}`"
                class="hover:text-[#04A7D6] transition">
            {{ cat }}
          </RouterLink>
        </nav>
      </div>
    </div>

    <!-- MENU MOBILE DÉROULANT – VERSION ULTRA-PRO 2025 -->
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden fixed inset-x-0 top-28 z-40 bg-white dark:bg-[#001F33] shadow-2xl"
    >
      <!-- Contenu scrollable -->
      <div class="h-screen overflow-y-auto pb-32">
        <nav class="px-10 py-12 space-y-10 text-center">
          <!-- Liens principaux -->
          <RouterLink to="/" @click="mobileMenuOpen = false"
            class="block text-4xl font-black text-[#003B5C] dark:text-white hover:text-[#04A7D6] transition">
            Accueil
          </RouterLink>
          <RouterLink to="/rubrique/actualites" @click="mobileMenuOpen = false"
            class="block text-4xl font-black text-[#003B5C] dark:text-white hover:text-[#04A7D6] transition">
            Actualités
          </RouterLink>
          <RouterLink to="/dossiers" @click="mobileMenuOpen = false"
            class="block text-6xl font-black text-[#F9A826] my-16">
            DOSSIERS
          </RouterLink>
          <RouterLink to="/rubrique/editorial" @click="mobileMenuOpen = false"
            class="block text-4xl font-black text-[#04A7D6] hover:text-white transition">
            Éditorial
          </RouterLink>

          <!-- Sous-rubriques -->
          <div class="pt-12 border-t-2 border-gray-200 dark:border-white/20 space-y-8">
            <RouterLink
              v-for="cat in ['National','International','Politique','Société','Économie & Business','Sécurité & Défense','Diplomatie','Culture','Tech & Innovation','Opinions','Reportages']"
              :key="cat"
              :to="`/rubrique/${cat.toLowerCase().replace(/ & /g,'-').replace(/ /g,'-')}`"
              @click="mobileMenuOpen = false"
              class="block text-2xl font-bold text-gray-700 dark:text-gray-200 hover:text-[#04A7D6] transition"
            >
              {{ cat }}
            </RouterLink>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>