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
    image: "https://media.icij.org/uploads/2021/11/Pandora-Papers-Africa-front-pages.jpg",
    category: "Enquêtes",
    date: "10 décembre 2025",
    readingTime: 15
  },
  {
    slug: "president-discours-surprise",
    title: "Le Président dissout l’Assemblée et annonce des élections anticipées",
    excerpt: "Discours surprise hier soir : le pays entre dans une période d’incertitude politique majeure.",
    image: "https://peoplesdispatch.org/wp-content/uploads/2023/12/F0n3JVtWwAUZWw_.jpg",
    category: "Politique",
    date: "9 décembre 2025",
    readingTime: 7
  },
  {
    slug: "startup-afrique-levee-record",
    title: "Une start-up africaine lève 150 millions $ et défie les géants",
    excerpt: "Record historique pour le continent : la fintech vient de boucler la plus grosse levée de fonds jamais réalisée en Afrique.",
    image: "https://www.techinafrica.com/wp-content/uploads/2025/04/84ff12b9-5382-4086-8205-708a1114f611_3500x1969.webp",
    category: "Tech & Innovation",
    date: "8 décembre 2025",
    readingTime: 9
  },
  {
    slug: "couvre-feu-national",
    title: "Couvre-feu national décrété à partir de 20h dès ce soir",
    excerpt: "Face à la recrudescence des violences, le gouvernement prend des mesures exceptionnelles pour 15 jours renouvelables.",
    image: "https://stratnewsglobal.com/wp-content/uploads/2025/09/NIGHT-CURFEW.jpg",
    category: "Actualités",
    date: "7 décembre 2025",
    readingTime: 5
  }
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
    <!-- Hero: Plus immersif avec une image journalistique élégante et professionnelle -->
    <section class="relative h-[80vh] md:h-screen overflow-hidden bg-black">
      <img 
        src="https://media.newyorker.com/photos/61e2460fd1968fc10283b08c/master/w_2560%2Cc_limit/220124_r39741.jpg" 
        alt="Journalisme d'investigation : vérité et liberté de la presse" 
        class="absolute inset-0 w-full h-full object-cover opacity-55 transition-transform duration-[30s] ease-linear hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      <div class="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none drop-shadow-2xl">
          Le Confident
        </h1>
        <p class="mt-8 text-xl md:text-2xl lg:text-3xl font-light text-gray-100 max-w-4xl leading-relaxed">
          Informer juste. Informer vrai.<br />
          <span class="font-bold text-[#F9A826] drop-shadow-md">Et autrement.</span>
        </p>

        <div class="mt-12 flex flex-wrap gap-6">
          <RouterLink 
            to="/rubrique/actualites" 
            class="px-10 py-5 bg-[#04A7D6] text-white text-lg font-bold rounded-lg hover:bg-[#003B5C] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Découvrir l'actualité
          </RouterLink>
          <RouterLink 
            to="/dossiers" 
            class="px-10 py-5 border-3 border-white text-white text-lg font-bold rounded-lg hover:bg-white hover:text-[#003B5C] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Nos grandes enquêtes
          </RouterLink>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
        <svg class="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- À la une: Grille hiérarchique avec images thématiques professionnelles -->
    <section class="py-20 md:py-32 bg-white">
      <div class="container mx-auto px-6 md:px-12 max-w-7xl">
        <header class="mb-16 text-center md:text-left">
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#003B5C]">
            À la une
          </h2>
          <p class="mt-4 text-lg md:text-xl text-gray-600">
            Les articles phares du moment
          </p>
          <div class="mt-6 w-40 h-1.5 bg-gradient-to-r from-[#04A7D6] via-[#F9A826] to-[#003B5C] rounded-full"></div>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <ArticleCard
            v-for="(article, index) in featuredArticles"
            :key="article.slug"
            :article="article"
            class="reveal opacity-0 translate-y-12 transition-all duration-800 ease-out rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3"
            :class="{
              'md:col-span-2 lg:col-span-2 lg:row-span-2': index === 0
            }"
          />
        </div>

        <div class="mt-20 text-center">
          <RouterLink 
            to="/rubrique/actualites"
            class="inline-flex items-center px-10 py-5 text-[#003B5C] text-lg font-bold border-b-4 border-[#04A7D6] hover:text-[#04A7D6] hover:border-[#F9A826] transition-all duration-300"
          >
            Voir toutes les actualités
            <svg class="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Dossiers: Image élégante d'investigation pour plus d'impact -->
    <section class="relative py-32 md:py-40 bg-[#003B5C]">
      <div class="absolute inset-0 opacity-20">
        <img 
          src="https://t4.ftcdn.net/jpg/17/38/60/27/360_F_1738602745_WrmD4V02MnFyGmJXDcL0DDc8StF4wDDI.jpg" 
          alt="Dossiers d'enquête" 
          class="w-full h-full object-cover"
        />
      </div>

      <div class="relative container mx-auto px-6 md:px-12 text-center text-white">
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-10 drop-shadow-2xl">
          Nos dossiers
        </h2>
        <p class="text-xl md:text-2xl max-w-4xl mx-auto mb-12 opacity-95 leading-relaxed">
          Les grandes enquêtes exclusives qui révèlent ce que personne n’ose dire.
        </p>
        <RouterLink 
          to="/dossiers"
          class="inline-block px-12 py-6 bg-[#F9A826] text-[#003B5C] text-xl font-black rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl"
        >
          Explorer les dossiers
        </RouterLink>
      </div>
    </section>

    <!-- Communauté Facebook: Carte plus raffinée -->
    <section class="py-20 md:py-28 bg-gray-100">
      <div class="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 class="text-4xl md:text-5xl font-extrabold text-[#003B5C] text-center mb-14">
          Rejoignez notre communauté
        </h2>

        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div class="p-12 md:p-20 text-center">
            <div class="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10">
              <div class="w-24 h-24 bg-[#1877F2] rounded-2xl flex items-center justify-center shadow-xl">
                <svg class="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.012 1.842-4.669 4.533-4.669 1.29 0 2.399.096 2.721.139v3.156h-1.863c-1.039 0-1.241.494-1.241 1.219v1.597h2.482l-.323 3.47h-2.159v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
                </svg>
              </div>
              <div class="text-center sm:text-left">
                <p class="text-3xl md:text-4xl font-extrabold text-[#003B5C]">Le Confident</p>
                <p class="text-xl text-gray-600 mt-2">223 abonnés · Actualités · Enquêtes</p>
              </div>
            </div>

            <p class="text-xl italic text-[#04A7D6] mb-12">
              “Informer juste, informer vrai et autrement”
            </p>

            <a 
              href="https://www.facebook.com/profile.php?id=61558775472983" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-block px-12 py-6 bg-[#1877F2] text-white text-xl font-bold rounded-xl hover:bg-[#166FE5] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
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
  transition: opacity 0.9s ease-out, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>