<!-- src/components/common/Header.vue – MENU MOBILE ULTRA PROFESSIONNEL & MODERNE (Senior Dev Style 2025) -->
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
const openSubmenus = ref<Set<string>>(new Set())

const toggleSubmenu = (cat: string) => {
  const key = cat.toLowerCase()
  if (openSubmenus.value.has(key)) {
    openSubmenus.value.delete(key)
  } else {
    openSubmenus.value.add(key)
  }
}

// Breaking news
const breakingNews = ref({
  title: 'Urgent : Le gouvernement annonce un couvre-feu national à partir de 20h ce soir',
  link: '/article/couvre-feu-national-2025'
})

// Chemins des logos
const logoLight = new URL('@/assets/images/logo-removebg.png', import.meta.url).href
const logoDark = new URL('@/assets/images/logo-confident.svg', import.meta.url).href

// Liste des rubriques principales
const mainItems = ['Accueil', 'Actualités', 'Analyses', 'Enquêtes', 'Sports', 'Éditorial', 'DOSSIERS']

// Sous-rubriques
const subCategories = [
  'National', 'International', 'Politique', 'Société', 'Économie & Business',
  'Sécurité & Défense', 'Diplomatie', 'Culture', 'Tech & Innovation', 'Opinions', 'Nécrologie', 'Reportages'
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 dark:bg-[#001F33]/95 backdrop-blur-xl shadow-lg transition-all duration-500">
    <BreakingNewsBanner v-if="breakingNews" :news="breakingNews" />

    <!-- Barre principale -->
    <div class="border-b border-gray-200 dark:border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between h-28 lg:h-32">
          <!-- LOGO -->
          <RouterLink to="/" class="group -ml-3">
            <img
              :src="isDark ? logoDark : logoLight"
              alt="Le Confident"
              class="h-28 lg:h-36 w-auto object-contain transition-all duration-700 group-hover:scale-105"
            />
          </RouterLink>

          <!-- Menu desktop -->
          <nav class="hidden lg:flex items-center gap-10 xl:gap-14">
            <RouterLink to="/" class="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-[#04A7D6] transition">Accueil</RouterLink>
            <RouterLink to="/rubrique/actualites" class="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-[#04A7D6] transition">Actualités</RouterLink>
            <RouterLink to="/rubrique/analyses" class="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-[#04A7D6] transition">Analyses</RouterLink>
            <RouterLink to="/rubrique/enquetes" class="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-[#04A7D6] transition">Enquêtes</RouterLink>
            <RouterLink to="/rubrique/sports" class="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-[#04A7D6] transition">Sports</RouterLink>
            <RouterLink to="/rubrique/editorial" class="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-[#04A7D6] transition">Éditorial</RouterLink>
            <RouterLink to="/dossiers" class="text-2xl font-extrabold text-[#F9A826] hover:opacity-90 transition">DOSSIERS</RouterLink>
          </nav>

          <!-- Actions droite -->
          <div class="flex items-center gap-6">
            <SearchBar />
            <button @click="toggleDarkMode" class="p-4 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition" aria-label="Mode sombre">
              <svg v-if="!isDark" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
              <svg v-else class="w-6 h-6 text-[#04A7D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </button>

            <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition" aria-label="Menu">
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

    <!-- Menu secondaire desktop -->
    <div class="bg-[#F2F2F2] dark:bg-[#001F33]/80 border-t border-b border-gray-200 dark:border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <nav class="hidden lg:flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs font-extrabold uppercase tracking-widest text-gray-700 dark:text-gray-200">
          <RouterLink
            v-for="cat in subCategories"
            :key="cat"
            :to="`/rubrique/${cat.toLowerCase().replace(/ & /g,'-').replace(/ /g,'-')}`"
            class="hover:text-[#04A7D6] transition"
          >
            {{ cat }}
          </RouterLink>
        </nav>
      </div>
    </div>

    <!-- MENU MOBILE – DESIGN SENIOR : ÉLÉGANT, SPACIEUX, ANIMÉ, PROFESSIONNEL -->
    <Teleport to="body">
      <!-- Overlay avec animation fluide -->
      <transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="mobileMenuOpen"
          class="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md"
          @click="mobileMenuOpen = false"
        />
      </transition>

      <!-- Panneau latéral qui glisse depuis la droite (plus moderne que full overlay centré) -->
      <transition
        enter-active-class="transition-transform duration-500 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-400 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          v-if="mobileMenuOpen"
          class="fixed inset-y-0 right-0 z-[10000] w-full max-w-md bg-white dark:bg-[#001F33] shadow-2xl flex flex-col overflow-hidden"
          @click.stop
        >
          <!-- Header du menu mobile -->
          <div class="flex items-center justify-between px-8 py-10 border-b border-gray-200 dark:border-white/10">
            <RouterLink to="/" @click="mobileMenuOpen = false" class="flex items-center">
              <img :src="isDark ? logoDark : logoLight" alt="Le Confident" class="h-16 w-auto" />
            </RouterLink>
            <button
              @click="mobileMenuOpen = false"
              class="p-4 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition"
              aria-label="Fermer le menu"
            >
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Contenu scrollable -->
          <div class="flex-1 overflow-y-auto">
            <nav class="px-8 py-12">
              <ul class="space-y-8">
                <!-- Liens principaux – gros, espacés, avec effet subtil -->
                <li v-for="item in mainItems" :key="item">
                  <RouterLink
                    :to="item === 'Accueil' ? '/' : item === 'DOSSIERS' ? '/dossiers' : `/rubrique/${item.toLowerCase()}`"
                    @click="mobileMenuOpen = false"
                    class="block text-3xl font-black tracking-tight transition-all duration-300 hover:translate-x-2"
                    :class="{
                      'text-[#003B5C] dark:text-white hover:text-[#04A7D6]': item !== 'DOSSIERS',
                      'text-[#F9A826] hover:text-[#F9A826]/80': item === 'DOSSIERS'
                    }"
                  >
                    {{ item }}
                  </RouterLink>
                </li>

                <!-- Accordéon Rubriques -->
                <li class="pt-12 border-t-4 border-gray-200 dark:border-white/10">
                  <button
                    @click="toggleSubmenu('sous-rubriques')"
                    class="w-full flex items-center justify-between py-6 text-3xl font-black text-[#003B5C] dark:text-white tracking-tight"
                    :aria-expanded="openSubmenus.has('sous-rubriques')"
                  >
                    Rubriques
                    <svg
                      class="w-8 h-8 text-[#04A7D6] transition-transform duration-500"
                      :class="{ 'rotate-180': openSubmenus.has('sous-rubriques') }"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <transition
                    enter-active-class="transition-all duration-500 ease-out"
                    enter-from-class="max-h-0 opacity-0"
                    enter-to-class="max-h-96 opacity-100"
                    leave-active-class="transition-all duration-400 ease-in"
                    leave-from-class="max-h-96 opacity-100"
                    leave-to-class="max-h-0 opacity-0"
                  >
                    <ul v-show="openSubmenus.has('sous-rubriques')" class="overflow-hidden mt-6 space-y-5 pl-4">
                      <li v-for="cat in subCategories" :key="cat">
                        <RouterLink
                          :to="`/rubrique/${cat.toLowerCase().replace(/ & /g,'-').replace(/ /g,'-')}`"
                          @click="mobileMenuOpen = false"
                          class="block text-xl font-medium text-gray-600 dark:text-gray-300 hover:text-[#04A7D6] hover:translate-x-3 transition-all duration-300"
                        >
                          {{ cat }}
                        </RouterLink>
                      </li>
                    </ul>
                  </transition>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </transition>
    </Teleport>
  </header>
</template>

<style scoped>
.text-primary { color: #04A7D6; }
.text-orange { color: #F9A826; }
</style>