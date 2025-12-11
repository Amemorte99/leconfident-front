<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ArticleCard from '@/components/common/ArticleCard.vue'

const featuredArticles = ref([
  {
    slug: "scandale-ministere-finances",
    title: "Enquête exclusive : 2 milliards détournés au ministère des Finances",
    excerpt: "Documents à l’appui, Le Confident révèle l’un des plus gros scandales de la décennie…",
    image: "https://picsum.photos/1200/800?random=10",
    category: "Enquêtes",
    date: "2025-12-10",
    readingTime: 15
  },
  {
    slug: "president-discours-surprise",
    title: "Le Président dissout l’Assemblée et annonce des élections anticipées",
    excerpt: "Discours surprise hier soir : le pays entre dans une période d’incertitude politique majeure.",
    image: "https://picsum.photos/1200/800?random=11",
    category: "Politique",
    date: "2025-12-09",
    readingTime: 7
  },
  {
    slug: "startup-afrique-levee-record",
    title: "Une start-up africaine lève 150 millions $ et défie les géants",
    excerpt: "Record historique pour le continent : la fintech vient de boucler la plus grosse levée de fonds jamais réalisée en Afrique.",
    image: "https://picsum.photos/1200/800?random=12",
    category: "Tech & Innovation",
    date: "2025-12-08",
    readingTime: 9
  },
  {
    slug: "couvre-feu-national",
    title: "Couvre-feu national décrété à partir de 20h dès ce soir",
    excerpt: "Face à la recrudescence des violences, le gouvernement prend des mesures exceptionnelles pour 15 jours renouvelables.",
    image: "https://picsum.photos/1200/800?random=13",
    category: "Actualités",
    date: "2025-12-07",
    readingTime: 5
  }
])
</script>

<template>
  <div class="min-h-screen bg-white">

    <!-- HERO MAJESTUEUX – Ultra-clair, moderne, impactant -->
    <section class="relative overflow-hidden bg-gradient-to-br from-[#003B5C] via-[#001F33] to-black text-white">
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative container mx-auto px-6 lg:px-8 py-32 lg:py-48 text-center">
        <h1 class="text-6xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#04A7D6] to-white drop-shadow-2xl">
          Le Confident
        </h1>
        <p class="text-2xl sm:text-3xl lg:text-5xl font-light tracking-wide max-w-5xl mx-auto leading-relaxed">
          Informer juste, informer vrai <span class="font-black text-[#F9A826]">et autrement</span>.
        </p>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>

    <!-- À LA UNE – Grille épurée, cartes luxueuses -->
    <section class="py-20 lg:py-32 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-5xl lg:text-7xl font-extrabold text-[#003B5C] mb-4">À la une</h2>
          <div class="w-32 h-1.5 bg-[#04A7D6] mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <ArticleCard
            v-for="article in featuredArticles"
            :key="article.slug"
            :article="article"
            class="hover:-translate-y-3 transition-all duration-500"
          />
        </div>

        <div class="text-center mt-20">
          <RouterLink
            to="/rubrique/actualites"
            class="group inline-flex items-center gap-4 px-12 py-6 bg-[#04A7D6] text-white text-xl font-bold rounded-full hover:bg-[#003B5C] transition-all duration-500 shadow-xl hover:shadow-2xl"
          >
            Toutes les actualités
            <svg class="w-7 h-7 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- DOSSIERS SPÉCIAUX – Bloc orange qui claque -->
    <section class="py-28 lg:py-40 bg-gradient-to-r from-[#F9A826] to-orange-600 text-white">
      <div class="container mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-6xl lg:text-8xl font-extrabold mb-12 tracking-tight">Dossiers</h2>
        <p class="text-2xl lg:text-4xl font-light mb-16 max-w-4xl mx-auto opacity-95">
          Nos grandes enquêtes et formats longs multimédias
        </p>
        <RouterLink
          to="/dossiers"
          class="inline-block px-20 py-10 bg-white text-[#F9A826] text-4xl lg:text-5xl font-extrabold rounded-3xl hover:bg-gray-100 transition-all duration-700 hover:scale-105 shadow-2xl"
        >
          EXPLORER LES DOSSIERS
        </RouterLink>
      </div>
    </section>

    <!-- DERNIÈRES ACTUALITÉS (optionnel, si tu veux une 2e section) -->
    <!-- Tu peux en rajouter une ici si tu veux, sinon c’est déjà parfait.-->
  </div>
</template>

<style scoped>
/* Animation subtile au scroll (optionnel mais classe) */
article {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(40px);
}
article:nth-child(1) { animation-delay: 0.1s; }
article:nth-child(2) { animation-delay: 0.2s; }
article:nth-child(3) { animation-delay: 0.3s; }
article:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}
</style>