<!-- src/views/ArticleDetailView.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CategoryTag from '@/components/common/CategoryTag.vue'

const route = useRoute()
const slug = route.params.slug as string

// Simulation d’article (plus tard tu fetcheras depuis une API)
const article = ref({
  title: "Enquête exclusive : 2 milliards détournés au ministère des Finances",
  category: "Enquêtes",
  date: "10 décembre 2025",
  readingTime: 15,
  author: "Rédaction Le Confident",
  image: "https://picsum.photos/1200/600?random=10",
  content: `
    <p class="lead text-xl mb-8">Documents à l’appui, <strong>Le Confident</strong> révèle aujourd’hui l’un des plus gros scandales financiers de la décennie.</p>
    
    <p>Après six mois d’investigation, nos journalistes ont pu consulter des rapports confidentiels, des virements bancaires et des témoignages sous X qui mettent en lumière un détournement massif de fonds publics au sein du ministère des Finances.</p>
    
    <h2 class="text-3xl font-extrabold text-[#003B5C] my-8">Un système bien rodé</h2>
    <p>Entre 2022 et 2025, plus de <strong>2,1 milliards FCFA</strong> auraient été siphonnés via des marchés publics fictifs, des sociétés écrans basées à l’étranger et des retrocommissions vers des hauts fonctionnaires.</p>
    
    <blockquote class="border-l-4 border-[#04A7D6] pl-6 py-4 my-10 text-lg italic bg-gray-50">
      « On nous demandait de signer des bons de commande pour des prestations jamais réalisées » — Témoin protégé, ex-directeur adjoint
    </blockquote>
    
    <p>Le scandale éclate au moment où le pays traverse une crise économique sans précédent. Ces fonds étaient initialement destinés au programme d’urgence pour la jeunesse et à la construction d’hôpitaux régionaux.</p>
    
    <h2 class="text-3xl font-extrabold text-[#003B5C] my-8">Réactions politiques</h2>
    <p>L’opposition exige la création immédiate d’une commission d’enquête parlementaire. Le gouvernement, par la voix de son porte-parole, promet « toute la lumière » sur cette affaire.</p>
  `
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Article Hero -->
    <section class="relative">
      <img :src="article.image" :alt="article.title" class="w-full h-96 md:h-screen object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      
      <div class="absolute bottom-0 left-0 right-0 text-white p-8 md:p-16 max-w-5xl">
        <CategoryTag :category="article.category" class="mb-4 inline-block" />
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
          {{ article.title }}
        </h1>
        <div class="mt-6 flex items-center gap-6 text-sm md:text-base opacity-90">
          <span>{{ article.author }}</span>
          <span>•</span>
          <span>{{ article.date }}</span>
          <span>•</span>
          <span>{{ article.readingTime }} min de lecture</span>
        </div>
      </div>
    </section>

    <!-- Contenu de l’article -->
    <article class="container mx-auto px-4 py-12 max-w-4xl">
      <div class="prose prose-lg max-w-none" v-html="article.content"></div>

      <!-- Partage -->
      <div class="mt-16 pt-8 border-t border-gray-200">
        <p class="text-sm text-gray-600 mb-4">Partagez cet article :</p>
        <div class="flex gap-4">
          <button class="w-12 h-12 bg-[#04A7D6] text-white rounded-full flex items-center justify-center hover:bg-[#003B5C] transition">
            X
          </button>
          <button class="w-12 h-12 bg-[#04A7D6] text-white rounded-full flex items-center justify-center hover:bg-[#003B5C] transition">
            f
          </button>
          <button class="w-12 h-12 bg-[#04A7D6] text-white rounded-full flex items-center justify-center hover:bg-[#003B5C] transition">
            in
          </button>
        </div>
      </div>
    </article>

    <!-- Articles similaires (à venir) -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-extrabold text-[#003B5C] mb-10">À lire aussi</h2>
        <div class="text-center text-gray-600">
          <p class="text-lg">Fonctionnalité en cours de développement...</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Style pour le contenu HTML injecté */
.prose :deep(p) {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.8;
}
.prose :deep(h2) {
  color: #003B5C;
  margin: 2rem 0 1rem;
}
.prose :deep(blockquote) {
  font-style: italic;
  background: #f9f9f9;
  border-left: 6px solid #04A7D6;
  padding: 1.5rem;
  margin: 2rem 0;
}
</style>