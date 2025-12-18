<!-- src/views/ArticleDetailView.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CategoryTag from '@/components/common/CategoryTag.vue'

const route = useRoute()
const slug = route.params.slug as string

// Données simulées (à remplacer par un fetch API plus tard)
const article = ref({
  title: "Enquête exclusive : 2 milliards détournés au ministère des Finances",
  category: "Enquêtes",
  date: "10 décembre 2025",
  readingTime: 15,
  author: "Rédaction Le Confident",
  image: "https://picsum.photos/1200/600?random=10",
  content: `
    <p class="lead text-xl md:text-2xl font-medium text-gray-800 mb-10">Documents à l’appui, <strong>Le Confident</strong> révèle aujourd’hui l’un des plus gros scandales financiers de la décennie.</p>
    
    <p>Après six mois d’investigation, nos journalistes ont pu consulter des rapports confidentiels, des virements bancaires et des témoignages sous X qui mettent en lumière un détournement massif de fonds publics au sein du ministère des Finances.</p>
    
    <h2>Un système bien rodé</h2>
    <p>Entre 2022 et 2025, plus de <strong>2,1 milliards FCFA</strong> auraient été siphonnés via des marchés publics fictifs, des sociétés écrans basées à l’étranger et des retrocommissions vers des hauts fonctionnaires.</p>
    
    <blockquote>
      « On nous demandait de signer des bons de commande pour des prestations jamais réalisées » 
      <cite>— Témoin protégé, ex-directeur adjoint</cite>
    </blockquote>
    
    <p>Le scandale éclate au moment où le pays traverse une crise économique sans précédent. Ces fonds étaient initialement destinés au programme d’urgence pour la jeunesse et à la construction d’hôpitaux régionaux.</p>
    
    <h2>Réactions politiques</h2>
    <p>L’opposition exige la création immédiate d’une commission d’enquête parlementaire. Le gouvernement, par la voix de son porte-parole, promet « toute la lumière » sur cette affaire.</p>
  `
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section avec overlay élégant -->
    <section class="relative h-[70vh] md:h-[85vh] overflow-hidden">
      <img
        :src="article.image"
        :alt="article.title"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] ease-linear hover:scale-110"
      />
      
      <!-- Overlay dégradé plus sophistiqué -->
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      
      <!-- Contenu hero -->
      <div class="absolute inset-x-0 bottom-0 pb-12 md:pb-20 px-6 md:px-12 max-w-5xl mx-auto">
        <CategoryTag :category="article.category" class="mb-6" />
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
          {{ article.title }}
        </h1>
        
        <div class="mt-8 flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base">
          <span class="font-medium">{{ article.author }}</span>
          <span class="hidden sm:inline">•</span>
          <time>{{ article.date }}</time>
          <span>•</span>
          <span>{{ article.readingTime }} min de lecture</span>
        </div>
      </div>
      
      <!-- Scroll indicator subtil -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Contenu principal -->
    <article class="bg-white -mt-12 md:-mt-20 relative z-10 rounded-t-3xl shadow-2xl">
      <div class="container mx-auto px-6 py-16 md:px-12 lg:px-20 max-w-4xl">
        <div class="prose prose-lg lg:prose-xl max-w-none">
          <div v-html="article.content"></div>
        </div>

        <!-- Section partage -->
        <div class="mt-20 pt-12 border-t border-gray-200">
          <p class="text-sm uppercase tracking-wider text-gray-600 mb-6">Partagez cet article</p>
          <div class="flex items-center gap-5">
            <button
              aria-label="Partager sur X (Twitter)"
              class="group w-12 h-12 rounded-full bg-[#04A7D6] text-white flex items-center justify-center hover:bg-[#003B5C] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span class="text-lg font-bold">X</span>
            </button>
            <button
              aria-label="Partager sur Facebook"
              class="group w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-[#166fe5] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span class="text-lg font-bold">f</span>
            </button>
            <button
              aria-label="Partager sur LinkedIn"
              class="group w-12 h-12 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:bg-[#004182] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span class="text-lg font-bold">in</span>
            </button>
            <button
              aria-label="Copier le lien"
              class="group w-12 h-12 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>

    <!-- Section "À lire aussi" -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6 md:px-12">
        <h2 class="text-3xl md:text-4xl font-bold text-[#003B5C] mb-12 text-center">À lire aussi</h2>
        <div class="text-center text-gray-600 bg-white rounded-2xl shadow-lg py-16">
          <p class="text-xl">Cette section arrive bientôt avec des suggestions personnalisées.</p>
          <p class="mt-4 text-lg">Nos équipes y travaillent activement.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Typographie et styles pour le contenu injecté via v-html */
.prose :deep(p) {
  margin-bottom: 1.75rem;
  color: #374151;
  line-height: 1.8;
}

.prose :deep(.lead) {
  font-size: 1.375rem;
  line-height: 1.7;
  color: #1f2937;
  font-weight: 500;
}

.prose :deep(h2) {
  font-size: 2.125rem;
  font-weight: 800;
  color: #003B5C;
  margin: 3rem 0 1.5rem;
  position: relative;
}

.prose :deep(h2)::before {
  content: '';
  position: absolute;
  left: -2rem;
  top: 50%;
  width: 6px;
  height: 2.5rem;
  background-color: #04A7D6;
  transform: translateY(-50%);
  border-radius: 4px;
}

.prose :deep(blockquote) {
  margin: 3rem 0;
  padding: 2rem 2.5rem;
  background: linear-gradient(to right, #04A7D6, transparent);
  background-color: #f8fdff;
  border-left: 6px solid #04A7D6;
  border-radius: 0 12px 12px 0;
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #1e40af;
}

.prose :deep(blockquote cite) {
  display: block;
  margin-top: 1.5rem;
  font-style: normal;
  font-size: 1rem;
  color: #4b5563;
  text-align: right;
  font-weight: 600;
}

.prose :deep(strong) {
  color: #003B5C;
  font-weight: 700;
}

/* Responsive ajustements */
@media (max-width: 768px) {
  .prose :deep(h2)::before {
    display: none;
  }
  
  .prose :deep(blockquote) {
    padding: 1.5rem;
    border-radius: 0 8px 8px 0;
  }
}

/* Animation subtile au hover sur l'image hero */
img:hover {
  transform: scale(1.1);
}
</style>