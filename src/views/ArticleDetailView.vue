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
    <!-- Hero Section: Immersif et élégant, avec zoom subtil -->
    <section class="relative h-[60vh] sm:h-[80vh] md:h-screen overflow-hidden">
      <img
        :src="article.image"
        :alt="article.title"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-[25s] ease-in-out hover:scale-105"
      />
      
      <!-- Overlay dégradé sophistiqué pour lisibilité optimale -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      
      <!-- Contenu hero: Centré verticalement sur grands écrans -->
      <div class="absolute inset-x-0 bottom-0 sm:inset-y-0 sm:flex sm:items-end sm:justify-start pb-10 sm:pb-16 px-6 sm:px-10 md:px-16 max-w-6xl mx-auto">
        <div class="max-w-3xl">
          <CategoryTag :category="article.category" class="mb-4 sm:mb-6" />
          
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-xl tracking-tight">
            {{ article.title }}
          </h1>
          
          <div class="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-white/85 text-sm sm:text-base">
            <span class="font-semibold">{{ article.author }}</span>
            <span class="hidden sm:inline">•</span>
            <time datetime="2025-12-10">{{ article.date }}</time>
            <span>•</span>
            <span>{{ article.readingTime }} min de lecture</span>
          </div>
        </div>
      </div>
      
      <!-- Indicateur de scroll discret -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 animate-bounce hidden sm:block">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Contenu principal: Chevauchement élégant avec bord arrondi -->
    <article class="relative z-10 bg-white -mt-16 sm:-mt-24 md:-mt-32 rounded-t-3xl sm:rounded-t-[4rem] shadow-2xl">
      <div class="container mx-auto px-6 py-16 sm:py-20 md:py-24 md:px-12 lg:px-20 max-w-4xl">
        <div class="prose prose-lg md:prose-xl max-w-none">
          <div v-html="article.content"></div>
        </div>

        <!-- Section partage: Icônes plus grandes et espacées -->
        <div class="mt-24 pt-16 border-t border-gray-200/50">
          <p class="text-sm uppercase tracking-widest text-gray-500 mb-8 font-medium">Partagez cet article</p>
          <div class="flex items-center justify-center sm:justify-start gap-6">
            <button
              aria-label="Partager sur X (Twitter)"
              class="group w-14 h-14 rounded-full bg-[#04A7D6] text-white flex items-center justify-center hover:bg-[#003B5C] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span class="text-xl font-bold">X</span>
            </button>
            <button
              aria-label="Partager sur Facebook"
              class="group w-14 h-14 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-[#166fe5] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span class="text-xl font-bold">f</span>
            </button>
            <button
              aria-label="Partager sur LinkedIn"
              class="group w-14 h-14 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:bg-[#004182] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span class="text-xl font-bold">in</span>
            </button>
            <button
              aria-label="Copier le lien"
              class="group w-14 h-14 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>

    <!-- Section "À lire aussi": Plus élégante avec placeholder premium -->
    <section class="py-20 md:py-28 bg-gray-50">
      <div class="container mx-auto px-6 md:px-12 max-w-7xl">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#003B5C] mb-12 text-center tracking-tight">À lire aussi</h2>
        <div class="text-center text-gray-600 bg-white rounded-3xl shadow-xl py-20 px-8">
          <p class="text-xl md:text-2xl font-light">Cette section arrive bientôt avec des suggestions personnalisées.</p>
          <p class="mt-6 text-lg text-gray-500">Nos équipes y travaillent activement pour vous offrir le meilleur contenu.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Styles pour contenu injecté: Typographie premium et responsive */
.prose :deep(p) {
  margin-bottom: 1.75rem;
  color: #333;
  line-height: 1.8;
  font-size: 1.1rem;
}

.prose :deep(.lead) {
  font-size: 1.375rem;
  line-height: 1.6;
  color: #222;
  font-weight: 500;
}

.prose :deep(h2) {
  font-size: 1.875rem;
  font-weight: 800;
  color: #003B5C;
  margin: 2.5rem 0 1.25rem;
  position: relative;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.prose :deep(h2)::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 4rem;
  height: 3px;
  background-color: #04A7D6;
  border-radius: 2px;
}

.prose :deep(blockquote) {
  margin: 2.5rem 0;
  padding: 1.5rem 2rem;
  background-color: #f9fdff;
  border-left: 8px solid #04A7D6;
  border-radius: 0 12px 12px 0;
  font-style: italic;
  font-size: 1.125rem;
  line-height: 1.7;
  color: #1e3a8a;
}

.prose :deep(blockquote cite) {
  display: block;
  margin-top: 1rem;
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

/* Responsive ajustements pour petits écrans */
@media (max-width: 768px) {
  .prose :deep(p) {
    font-size: 1rem;
  }

  .prose :deep(.lead) {
    font-size: 1.25rem;
  }

  .prose :deep(h2) {
    font-size: 1.625rem;
  }

  .prose :deep(blockquote) {
    padding: 1.25rem 1.5rem;
    font-size: 1rem;
  }
}

/* Hover sur image hero pour interactivité */
img {
  transition: transform 0.5s ease;
}
</style>