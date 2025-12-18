<!-- src/views/HomeView.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import ArticleCard from '@/components/common/ArticleCard.vue'

const featuredArticles = ref([
  {
    slug: "scandale-ministere-finances",
    title: "Enquête exclusive : 2 milliards détournés au ministère des Finances",
    excerpt: "Documents à l’appui, Le Confident révèle l’un des plus gros scandales de la décennie…",
    image: "https://picsum.photos/1200/800?random=10",
    category: "Enquêtes",
    date: "10 décembre 2025",
    readingTime: 15
  },
  {
    slug: "president-discours-surprise",
    title: "Le Président dissout l’Assemblée et annonce des élections anticipées",
    excerpt: "Discours surprise hier soir : le pays entre dans une période d’incertitude politique majeure.",
    image: "https://picsum.photos/1200/800?random=11",
    category: "Politique",
    date: "9 décembre 2025",
    readingTime: 7
  },
  {
    slug: "startup-afrique-levee-record",
    title: "Une start-up africaine lève 150 millions $ et défie les géants",
    excerpt: "Record historique pour le continent : la fintech vient de boucler la plus grosse levée de fonds jamais réalisée en Afrique.",
    image: "https://picsum.photos/1200/800?random=12",
    category: "Tech & Innovation",
    date: "8 décembre 2025",
    readingTime: 9
  },
  {
    slug: "couvre-feu-national",
    title: "Couvre-feu national décrété à partir de 20h dès ce soir",
    excerpt: "Face à la recrudescence des violences, le gouvernement prend des mesures exceptionnelles pour 15 jours renouvelables.",
    image: "https://picsum.photos/1200/800?random=13",
    category: "Actualités",
    date: "7 décembre 2025",
    readingTime: 5
  },
  // Ajoute plus d'articles si besoin pour la grille
])

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' })

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero: Élégant, immersif, inspiré NYT / Le Monde / Guardian -->
    <section class="relative h-[80vh] md:h-screen overflow-hidden bg-black">
      <img 
        src="https://picsum.photos/1920/1080?blur=4&random=50" 
        alt="Fond hero Le Confident" 
        class="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div class="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none">
          Le Confident
        </h1>
        <p class="mt-6 text-xl md:text-2xl lg:text-3xl font-light text-gray-200 max-w-3xl">
          Informer juste. Informer vrai.<br />
          <span class="font-semibold text-[#F9A826]">Et autrement.</span>
        </p>

        <div class="mt-12 flex flex-wrap gap-6">
          <RouterLink 
            to="/rubrique/actualites" 
            class="px-8 py-4 bg-[#04A7D6] text-white font-semibold rounded-md hover:bg-[#003B5C] transition duration-300 shadow-lg"
          >
            Découvrir l'actualité
          </RouterLink>
          <RouterLink 
            to="/dossiers" 
            class="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#003B5C] transition duration-300"
          >
            Nos grandes enquêtes
          </RouterLink>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70">
        <svg class="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- À la une: Grille hiérarchique professionnelle -->
    <section class="py-20 md:py-32 bg-white">
      <div class="container mx-auto px-6 md:px-12 max-w-7xl">
        <header class="mb-16 text-center md:text-left">
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003B5C]">
            À la une
          </h2>
          <p class="mt-4 text-lg md:text-xl text-gray-600">
            Les articles phares du moment
          </p>
          <div class="mt-6 w-32 h-1 bg-gradient-to-r from-[#04A7D6] to-[#F9A826]"></div>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <ArticleCard
            v-for="(article, index) in featuredArticles"
            :key="article.slug"
            :article="article"
            class="reveal opacity-0 translate-y-12 transition-all duration-700"
            :class="{
              'md:col-span-2 lg:col-span-2 lg:row-span-2': index === 0,
              'hover:shadow-xl hover:-translate-y-2': true
            }"
          />
        </div>

        <div class="mt-16 text-center">
          <RouterLink 
            to="/rubrique/actualites"
            class="inline-flex items-center px-8 py-4 text-[#003B5C] font-semibold border-b-2 border-[#04A7D6] hover:text-[#04A7D6] transition"
          >
            Voir toutes les actualités
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Dossiers: Section impact avec overlay subtil -->
    <section class="relative py-32 bg-[#003B5C]">
      <div class="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?random=60&blur=2')] bg-cover bg-center opacity-10"></div>

      <div class="relative container mx-auto px-6 md:px-12 text-center text-white">
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
          Nos dossiers
        </h2>
        <p class="text-xl md:text-2xl max-w-4xl mx-auto mb-12 opacity-90">
          Les grandes enquêtes exclusives qui révèlent ce que personne n’ose dire.
        </p>
        <RouterLink 
          to="/dossiers"
          class="px-10 py-5 bg-[#F9A826] text-[#003B5C] font-bold rounded-md hover:bg-white transition duration-300 shadow-lg"
        >
          Explorer les dossiers
        </RouterLink>
      </div>
    </section>

    <!-- Communauté Facebook: Carte élégante -->
    <section class="py-20 md:py-28 bg-gray-100">
      <div class="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 class="text-4xl md:text-5xl font-bold text-[#003B5C] text-center mb-12">
          Rejoignez notre communauté
        </h2>

        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-10 md:p-16 text-center">
            <div class="flex items-center justify-center gap-6 mb-8">
              <div class="w-20 h-20 bg-[#1877F2] rounded-xl flex items-center justify-center shadow-lg">
                <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.012 1.842-4.669 4.533-4.669 1.29 0 2.399.096 2.721.139v3.156h-1.863c-1.039 0-1.241.494-1.241 1.219v1.597h2.482l-.323 3.47h-2.159v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
                </svg>
              </div>
              <div class="text-left">
                <p class="text-2xl md:text-3xl font-bold text-[#003B5C]">Le Confident</p>
                <p class="text-lg text-gray-600">223 abonnés · Actualités · Enquêtes</p>
              </div>
            </div>

            <p class="text-lg italic text-[#04A7D6] mb-10">
              “Informer juste, informer vrai et autrement”
            </p>

            <a 
              href="https://www.facebook.com/profile.php?id=61558775472983" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-block px-10 py-5 bg-[#1877F2] text-white font-bold rounded-md hover:bg-[#166FE5] transition duration-300 shadow-lg"
            >
              Nous suivre sur Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.reveal {
  transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>