<!-- src/components/common/Header.vue – VERSION SENIOR 2025 (Propre, Élégante, Parfaite) -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import BreakingNewsBanner from '@/components/common/BreakingNewsBanner.vue'
import SearchBar from '@/components/common/SearchBar.vue'

// Dark mode (léger, persistant, sans dépendance)
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
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 dark:bg-[#001F33]/95 backdrop-blur-lg shadow-sm transition-all duration-500">
    <!-- Breaking News -->
    <BreakingNewsBanner v-if="breakingNews" :news="breakingNews" />

    <!-- Barre principale -->
    <div class="border-b border-gray-200 dark:border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between h-28 lg:h-32">

          <!-- Logo — parfaitement centré, animé subtilement -->
          <RouterLink to="/" class="group -ml-3">
            <img
              src="@/assets/images/logo-removebg.png"
              alt="Le Confident"
              class="h-28 lg:h-36 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </RouterLink>

          <!-- Menu principal desktop — typographie impeccable, espacement pro -->
          <nav class="hidden lg:flex items-center gap-10 xl:gap-14">
            <RouterLink to="/" class="text-xl font-bold text-gray-900 dark:text-white hover:text-primary transition">
              Accueil
            </RouterLink>
            <RouterLink to="/rubrique/actualites" class="text-xl font-bold text-gray-900 dark:text-white hover:text-primary transition">
              Actualités
            </RouterLink>
            <RouterLink to="/rubrique/analyses" class="text-xl font-bold text-gray-900 dark:text-white hover:text-primary transition">
              Analyses
            </RouterLink>
            <RouterLink to="/rubrique/enquetes" class="text-xl font-bold text-gray-900 dark:text-white hover:text-primary transition">
              Enquêtes
            </RouterLink>
            <RouterLink to="/rubrique/economie" class="text-xl font-bold text-gray-900 dark:text-white hover:text-primary transition">
              Économie
            </RouterLink>
            <RouterLink to="/rubrique/editorial" class="text-xl font-bold text-gray-900 dark:text-white hover:text-primary transition">
              Éditorial
            </RouterLink>
            <RouterLink to="/dossiers" class="text-2xl font-extrabold text-orange hover:opacity-90 transition">
              DOSSIERS
            </RouterLink>
          </nav>

          <!-- Actions droite — alignement parfait -->
          <div class="flex items-center gap-6">
            <SearchBar />

            <!-- Dark mode — icône fluide -->
            <button
              @click="toggleDarkMode"
              class="p-4 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
              aria-label="Mode sombre"
            >
              <svg v-if="!isDark" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <svg v-else class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>

            <!-- Burger mobile — clean & moderne -->
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="lg:hidden p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition"
              aria-label="Menu"
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

    <!-- Menu secondaire — gris doux, ultra-lisible -->
    <div class="bg-[#F2F2F2] dark:bg-[#001F33]/70 border-t border-b border-gray-200 dark:border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <nav class="hidden lg:flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs font-extrabold uppercase tracking-widest text-gray-700 dark:text-gray-300">
          <RouterLink
            v-for="cat in ['National','International','Politique','Société','Économie & Business','Sécurité & Défense','Diplomatie','Culture','Tech & Innovation','Opinions','Éditorial','Reportages']"
            :key="cat"
            :to="`/rubrique/${cat.toLowerCase().replace(/ & /g,'-').replace(/ /g,'-')}`"
            class="hover:text-primary transition"
          >
            {{ cat }}
          </RouterLink>
        </nav>
      </div>
    </div>

    <!-- Menu mobile full screen — sobre, élégant, très pro -->
    <Teleport to="body">
      <transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="mobileMenuOpen" class="fixed inset-0 z-[9999] bg-white dark:bg-[#001F33]" @click="mobileMenuOpen = false">
          <div class="flex min-h-screen items-center justify-center px-8">
            <nav class="space-y-10 text-center">
              <RouterLink to="/" @click="mobileMenuOpen=false" class="block text-5xl font-extrabold text-[#003B5C] dark:text-[#04A7D6] hover:text-primary transition">Accueil</RouterLink>
              <RouterLink to="/rubrique/actualites" @click="mobileMenuOpen=false" class="block text-5xl font-extrabold text-[#003B5C] dark:text-[#04A7D6] hover:text-primary transition">Actualités</RouterLink>
              <RouterLink to="/dossiers" @click="mobileMenuOpen=false" class="block text-7xl font-extrabold text-orange my-12">DOSSIERS</RouterLink>
              <RouterLink to="/rubrique/editorial" @click="mobileMenuOpen=false" class="block text-5xl font-extrabold text-primary my-10">Éditorial</RouterLink>

              <div class="pt-12 border-t border-gray-200 dark:border-white/10 space-y-6 text-2xl text-gray-700 dark:text-gray-300">
                <RouterLink
                  v-for="cat in ['National','International','Politique','Société','Économie & Business','Sécurité & Défense','Diplomatie','Culture','Tech & Innovation','Opinions','Reportages']"
                  :key="cat"
                  :to="`/rubrique/${cat.toLowerCase().replace(/ & /g,'-').replace(/ /g,'-')}`"
                  @click="mobileMenuOpen=false"
                  class="block hover:text-primary transition"
                >
                  {{ cat }}
                </RouterLink>
              </div>
            </nav>
          </div>
        </div>
      </transition>
    </Teleport>
  </header>
</template>

<style scoped>
/* Couleurs personnalisées pour le CDN */
@layer utilities {
  .text-primary { color: #04A7D6; }
  .text-orange { color: #F9A826; }
}
</style>