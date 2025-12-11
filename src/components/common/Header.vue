<!-- src/components/common/Header.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import BreakingNewsBanner from '@/components/common/BreakingNewsBanner.vue'
import SearchBar from '@/components/common/SearchBar.vue'

// ──────────────────────────────────────
// Breaking News (désactive avec null)
// ──────────────────────────────────────
interface BreakingNews {
  title: string
  link?: string
}

const breakingNews = ref<BreakingNews | null>({
  title: 'Urgent : Le gouvernement annonce un couvre-feu national à partir de 20h ce soir',
  link: '/article/couvre-feu-national-2025'
})
// → Pour désactiver : breakingNews.value = null

// ──────────────────────────────────────
// Rubriques secondaires
// ──────────────────────────────────────
const categories = ref([
  { name: 'National',          link: '/rubrique/national',          slug: 'national' },
  { name: 'International',     link: '/rubrique/international',     slug: 'international' },
  { name: 'Politique',         link: '/rubrique/politique',         slug: 'politique' },
  { name: 'Société',           link: '/rubrique/societe',           slug: 'societe' },
  { name: 'Économie & Business', link: '/rubrique/economie',        slug: 'economie' },
  { name: 'Sécurité & Défense', link: '/rubrique/securite',         slug: 'securite' },
  { name: 'Diplomatie',        link: '/rubrique/diplomatie',        slug: 'diplomatie' },
  { name: 'Culture',           link: '/rubrique/culture',           slug: 'culture' },
  { name: 'Tech & Innovation', link: '/rubrique/tech',             slug: 'tech' },
  { name: 'Opinions',          link: '/rubrique/opinions',          slug: 'opinions' },
  { name: 'Reportages',        link: '/rubrique/reportages',        slug: 'reportages' }
])
</script>

<template>
  <header class="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
    <!-- Breaking News -->
    <BreakingNewsBanner
      v-if="breakingNews"
      :news="breakingNews"
    />

    <!-- Barre principale -->
    <div class="bg-white py-4">
      <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex-shrink-0">
          <img
            src="@/assets/images/logo-confident.svg"
            alt="Le Confident"
            class="h-16 md:h-20 w-auto transition-transform hover:scale-105"
          >
        </RouterLink>

        <!-- Menu principal (desktop) -->
        <nav class="hidden lg:flex items-center space-x-10 text-base font-semibold">
          <RouterLink
            to="/"
            class="text-gray-800 hover:text-[#04A7D6] transition"
          >
            Accueil
          </RouterLink>
          <RouterLink
            to="/rubrique/actualites"
            class="text-gray-800 hover:text-[#04A7D6] transition"
          >
            Actualités
          </RouterLink>
          <RouterLink
            to="/rubrique/analyses"
            class="text-gray-800 hover:text-[#04A7D6] transition"
          >
            Analyses & Décryptages
          </RouterLink>
          <RouterLink
            to="/rubrique/enquetes"
            class="text-gray-800 hover:text-[#04A7D6] transition"
          >
            Enquêtes
          </RouterLink>
          <RouterLink
            to="/rubrique/economie"
            class="text-gray-800 hover:text-[#04A7D6] transition"
          >
            Économie
          </RouterLink>
          <RouterLink
            to="/dossiers"
            class="text-[#F9A826] font-bold hover:opacity-80 transition"
          >
            DOSSIERS
          </RouterLink>
        </nav>

        <!-- Search + Dark Mode -->
        <div class="flex items-center gap-4">
          <SearchBar />
          <button
            aria-label="Mode sombre"
            class="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu rubriques secondaire -->
    <div class="bg-[#F2F2F2] py-3 border-t border-gray-300">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-wrap gap-6 text-xs font-bold text-gray-700 uppercase tracking-wider">
          <RouterLink
            v-for="cat in categories"
            :key="cat.slug"
            :to="cat.link"
            class="hover:text-[#04A7D6] transition"
          >
            {{ cat.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Couleurs personnalisées (même sans Tailwind) */
.text-bleu-confident { color: #04A7D6; }
.text-orange-breaking { color: #F9A826; }
.bg-bleu-confident { background-color: #04A7D6; }
</style>