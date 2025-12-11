<!-- src/views/HomeView.vue -->
<script setup lang="ts">
import BreakingNewsBanner from '@/components/common/BreakingNewsBanner.vue'
import ArticleCard from '@/components/common/ArticleCard.vue'
import CategoryTag from '@/components/common/CategoryTag.vue'

const breakingNews = {
  title: "Urgent : Le gouvernement annonce un couvre-feu national à partir de 20h ce soir",
  link: "/article/couvre-feu-national-2025"
}

const featuredArticles = [
  {
    slug: "scandale-ministere-finances",
    title: "Enquête exclusive : 2 milliards détournés au ministère des Finances",
    excerpt: "Documents à l’appui, Le Confident révèle l’un des plus gros scandales de la décennie...",
    image: "https://picsum.photos/800/600?random=1",
    category: "Enquêtes",
    date: "2025-12-10",
    readingTime: 15
  },
  {
    slug: "president-discours-surprise",
    title: "Le Président dissout l’Assemblée et annonce des élections anticipées",
    excerpt: "Discours surprise hier soir : le pays entre dans une période d’incertitude politique majeure.",
    image: "https://picsum.photos/800/600?random=2",
    category: "Politique",
    date: "2025-12-09",
    readingTime: 7
  },
  {
    slug: "startup-afrique-levee-record",
    title: "Une start-up africaine lève 150 millions $ et défie les géants",
    excerpt: "Record historique pour le continent : la fintech vient de boucler la plus grosse levée de fonds jamais réalisée en Afrique.",
    image: "https://picsum.photos/800/600?random=3",
    category: "Tech & Innovation",
    date: "2025-12-08",
    readingTime: 9
  }
]
</script>

<template>
  <div>
    <!-- Breaking News (déjà dans le Header, mais on garde une version ici aussi si tu veux) -->
    <BreakingNewsBanner v-if="breakingNews" :news="breakingNews" />

    <!-- Hero -->
    <section class="relative bg-gradient-to-b from-bleu-nuit to-black text-white py-32">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-6">
          Le Confident
        </h1>
        <p class="text-2xl md:text-4xl font-medium opacity-90 max-w-4xl mx-auto">
          Informer juste, informer vrai et autrement.
        </p>
      </div>
    </section>

    <!-- Dernières actualités -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-5xl font-black text-bleu-nuit text-center mb-16">
          Dernières actualités
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ArticleCard
            v-for="article in featuredArticles"
            :key="article.slug"
            :article="article"
          />
        </div>

        <div class="text-center mt-16">
          <a href="/rubrique/actualites" class="inline-block bg-bleu-confident text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-bleu-nuit transition">
            Voir toutes les actualités
          </a>
        </div>
      </div>
    </section>

    <!-- Dossiers spéciaux -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-5xl font-black text-bleu-nuit text-center mb-16">
          Dossiers
        </h2>
        <div class="text-center">
          <a href="/dossiers" class="inline-block bg-orange-breaking text-white px-16 py-8 rounded-2xl text-3xl font-black hover:scale-105 transition">
            DOSSIERS SPÉCIAUX
          </a>
        </div>
      </div>
    </section>
  </div>
</template>