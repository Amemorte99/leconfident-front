<!-- src/views/RubriqueView.vue -->
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ArticleCard from '@/components/common/ArticleCard.vue'
import CategoryTag from '@/components/common/CategoryTag.vue'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

// Mapping des slugs → noms affichés (tu peux l’enrichir)
const rubriqueNames: Record<string, string> = {
  national: 'National',
  international: 'International',
  politique: 'Politique',
  societe: 'Société',
  economie: 'Économie & Business',
  securite: 'Sécurité & Défense',
  diplomatie: 'Diplomatie & Relations internationales',
  culture: 'Culture & Société',
  tech: 'Tech & Innovation',
  opinions: 'Opinions',
  reportages: 'Reportages',
  enquetes: 'Enquêtes',
  analyses: 'Analyses & Décryptages',
  editorial: 'Éditorial'
}

const rubriqueTitle = computed(() => {
  return rubriqueNames[slug.value] || slug.value.charAt(0).toUpperCase() + slug.value.slice(1)
})

// Articles de démo (plus tard tu les fetcheras depuis une API)
const articles = ref([
  {
    slug: 'scandale-ministere-2025',
    title: 'Scandale au ministère : 2 milliards détournés en 3 ans',
    excerpt: 'Documents exclusifs, témoignages sous X, retrocommissions… Le Confident révèle l’un des plus gros détournements de fonds publics de la décennie.',
    image: 'https://picsum.photos/600/400?random=11',
    category: rubriqueTitle.value,
    date: '2025-12-10',
    readingTime: 14
  },
  {
    slug: 'president-election-anticipée',
    title: 'Le Président dissout l’Assemblée et annonce des élections anticipées',
    excerpt: 'Discours surprise hier soir : le chef de l’État prend tout le monde de court et fixe le scrutin dans 90 jours.',
    image: 'https://picsum.photos/600/400?random=12',
    category: rubriqueTitle.value,
    date: '2025-12-09',
    readingTime: 6
  },
  {
    slug: 'startup-afrique-levée-record',
    title: 'Une start-up africaine lève 150 millions $ et défie les géants américains',
    excerpt: 'Avec sa solution de paiement mobile ultra-sécurisée, elle vient de réaliser la plus grosse levée de fonds du continent.',
    image: 'https://picsum.photos/600/400?random=13',
    category: rubriqueTitle.value,
    date: '2025-12-08',
    readingTime: 8
  },
  {
    slug: 'couvre-feu-national',
    title: 'Couvre-feu national décrété à partir de 20h dès ce soir',
    excerpt: 'Face à la recrudescence des violences, le gouvernement prend des mesures exceptionnelles pour 15 jours renouvelables.',
    image: 'https://picsum.photos/600/400?random=14',
    category: rubriqueTitle.value,
    date: '2025-12-07',
    readingTime: 5
  }
])
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero rubrique -->
    <section class="bg-gradient-to-b from-[#003B5C] to-[#001F33] text-white py-24">
      <div class="container mx-auto px-4 text-center">
        <CategoryTag :category="rubriqueTitle" class="mb-6 inline-block" />
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight">
          {{ rubriqueTitle }}
        </h1>
        <p class="mt-6 text-xl opacity-90 max-w-3xl mx-auto">
          Toute l’actualité, les enquêtes et les analyses sur {{ rubriqueTitle.toLowerCase() }}
        </p>
      </div>
    </section>

    <!-- Liste des articles -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ArticleCard
            v-for="article in articles"
            :key="article.slug"
            :article="article"
          />
        </div>

        <!-- Bouton charger plus (simulation) -->
        <div class="text-center mt-16">
          <button class="bg-[#04A7D6] text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-[#003B5C] transition">
            Charger plus d’articles
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Rien de spécial ici, tout est déjà magnifique */
</style>