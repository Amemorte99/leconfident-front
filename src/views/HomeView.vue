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

// Scroll reveal simple pour les cartes
onMounted(() => {
  const cards = document.querySelectorAll('.reveal-card')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  cards.forEach(card => observer.observe(card))
})
</script>

<template>
  <div class="min-h-screen bg-white overflow-x-hidden">

    <!-- HERO ABSOLU – Niveau Vogue / NYT 2025 -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Fond vidéo-like avec overlay gradient + parallax subtil -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#001F33] via-[#003B5C] to-black">
        <div class="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?blur=2&random=30')] bg-cover bg-center scale-110 animate-kenburns"></div>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <div class="relative z-20 text-center px-6 max-w-7xl">
        <!-- Logo animé avec reveal -->
        <h1 class="text-8xl sm:text-9xl lg:text-[12rem] font-black leading-none tracking-tighter">
          <span class="inline-block bg-gradient-to-r from-white via-[#04A7D6] to-[#F9A826] bg-clip-text text-transparent drop-shadow-3xl animate-reveal-text">
            Le Confident
          </span>
        </h1>

        <p class="mt-12 text-4xl lg:text-6xl font-extralight text-gray-100 tracking-widest opacity-0 animate-fade-in-delay">
          Informer juste. Informer vrai.
          <span class="block mt-4 font-black text-[#F9A826] text-5xl lg:text-7xl animate-glow">
            Et autrement.
          </span>
        </p>

        <!-- Boutons premium -->
        <div class="mt-20 flex flex-wrap justify-center gap-10 opacity-0 animate-fade-in-delay-2">
          <RouterLink to="/rubrique/actualites"
            class="group px-20 py-8 bg-gradient-to-r from-[#04A7D6] to-[#048FC6] text-white text-3xl font-black rounded-full hover:from-white hover:to-gray-100 hover:text-[#003B5C] transition-all duration-1000 shadow-3xl hover:shadow-5xl hover:-translate-y-3 hover:ring-8 hover:ring-[#04A7D6]/30">
            Lire l'actualité
            <span class="ml-4 inline-block group-hover:translate-x-4 transition-transform">→</span>
          </RouterLink>

          <RouterLink to="/dossiers"
            class="px-20 py-8 bg-transparent border-8 border-[#F9A826] text-[#F9A826] text-3xl font-black rounded-full hover:bg-[#F9A826] hover:text-white hover:border-white transition-all duration-1000 hover:scale-110 hover:shadow-5xl">
            Nos dossiers
          </RouterLink>
        </div>
      </div>

      <!-- Scroll indicator premium -->
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div class="w-12 h-20 border-4 border-white/50 rounded-full flex justify-center">
          <div class="w-2 h-6 bg-white/70 rounded-full mt-4 animate-scroll-ball"></div>
        </div>
      </div>
    </section>

    <!-- À LA UNE – Layout magazine ultra-pro -->
    <section class="py-40 lg:py-56 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="text-center mb-28">
          <h2 class="text-7xl lg:text-9xl font-black text-[#003B5C] tracking-tighter">
            À la une
          </h2>
          <p class="mt-6 text-3xl lg:text-5xl font-light text-[#04A7D6] tracking-wide">
            Les histoires qui font l’actualité aujourd’hui
          </p>
          <div class="w-48 h-2 bg-gradient-to-r from-[#04A7D6] to-[#F9A826] mx-auto mt-8 rounded-full"></div>
        </div>

        <!-- Grille asymétrique premium : 1 grande carte + 3 petites -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-16">
          <ArticleCard
            v-for="(article, index) in featuredArticles"
            :key="article.slug"
            :article="article"
            class="reveal-card opacity-0 hover:-translate-y-8 hover:shadow-4xl transition-all duration-1000 rounded-3xl overflow-hidden border border-gray-200/50 bg-white backdrop-blur-xl"
            :class="{ 
              'md:col-span-3 lg:col-span-2 lg:row-span-2 hover:scale-105': index === 0,
              'md:col-span-3 lg:col-span-2': index === 1 && featuredArticles.length > 3
            }"
          />
        </div>

        <div class="text-center mt-32">
          <RouterLink to="/rubrique/actualites"
            class="group inline-flex items-center gap-8 px-28 py-10 bg-[#003B5C] text-white text-4xl font-black rounded-full hover:bg-gradient-to-r hover:from-[#04A7D6] hover:to-[#048FC6] transition-all duration-1000 shadow-4xl hover:shadow-[#04A7D6]/60 hover:scale-110">
            Toutes les actualités
            <svg class="w-12 h-12 group-hover:translate-x-6 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- DOSSIERS – Impact maximal -->
    <section class="relative py-56 lg:py-80 bg-gradient-to-br from-[#F9A826] via-orange-500 to-[#F9A826]">
      <div class="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?random=40&blur=1')] bg-cover opacity-15"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      <div class="relative container mx-auto px-6 lg:px-12 text-center">
        <h2 class="text-9xl lg:text-[14rem] font-black tracking-tighter text-white drop-shadow-4xl mb-16">
          DOSSIERS
        </h2>
        <p class="text-4xl lg:text-6xl font-light text-white/90 max-w-6xl mx-auto leading-relaxed mb-24 drop-shadow-2xl">
          Les grandes enquêtes qui révèlent ce que personne n’ose dire.
        </p>
        <RouterLink to="/dossiers"
          class="inline-block px-40 py-16 bg-white text-[#F9A826] text-6xl lg:text-8xl font-black rounded-3xl hover:bg-transparent hover:text-white border-12 border-white transition-all duration-1000 hover:scale-115 hover:shadow-5xl hover:drop-shadow-2xl">
          PLONGER DANS L’ENQUÊTE
        </RouterLink>
      </div>
    </section>

    <!-- Facebook Premium Integration -->
    <section class="py-40 bg-gradient-to-b from-gray-100 to-white">
      <div class="container mx-auto px-6 lg:px-12 text-center">
        <h2 class="text-6xl lg:text-8xl font-black text-[#003B5C] mb-20 tracking-tighter">
          Rejoignez la communauté
        </h2>
        <div class="max-w-4xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-4xl p-16 border border-gray-200/50">
          <div class="flex items-center justify-center gap-8 mb-12">
            <div class="w-32 h-32 bg-[#1877F2] rounded-2xl flex items-center justify-center shadow-2xl">
              <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.012 1.842-4.669 4.533-4.669 1.29 0 2.399.096 2.721.139v3.156h-1.863c-1.039 0-1.241.494-1.241 1.219v1.597h2.482l-.323 3.47h-2.159v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
              </svg>
            </div>
            <div class="text-left">
              <p class="text-5xl font-black text-[#003B5C]">Le Confident</p>
              <p class="text-2xl text-gray-600 mt-2">223 abonnés • Actualités • Enquêtes • Analyses</p>
            </div>
          </div>
          <p class="text-4xl font-light italic text-[#04A7D6] mb-16">"Informer juste, informer vrai et autrement"</p>
          <a href="https://www.facebook.com/profile.php?id=61558775472983" target="_blank" rel="noopener noreferrer"
             class="inline-block px-24 py-10 bg-[#1877F2] hover:bg-[#166FE5] text-white text-4xl font-black rounded-full transition-all duration-700 hover:scale-110 hover:shadow-3xl">
            Suivre sur Facebook
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Ken Burns subtil sur le fond hero */
@keyframes kenburns {
  0% { transform: scale(1) translateZ(0); }
  100% { transform: scale(1.15) translateZ(0); }
}
.animate-kenburns {
  animation: kenburns 30s linear infinite alternate;
}

/* Reveal texte progressif */
.animate-reveal-text {
  background-size: 200% 100%;
  animation: gradientShift 8s ease infinite, fadeIn 2s ease-out;
}
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Fade in avec délai */
.animate-fade-in-delay {
  animation: fadeIn 2s ease-out 0.8s forwards;
}
.animate-fade-in-delay-2 {
  animation: fadeIn 2s ease-out 1.4s forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Glow orange */
.animate-glow {
  animation: glow 4s ease-in-out infinite;
}
@keyframes glow {
  0%, 100% { text-shadow: 0 0 20px rgba(249, 168, 38, 0.6); }
  50% { text-shadow: 0 0 40px rgba(249, 168, 38, 0.9); }
}

/* Scroll ball */
@keyframes scroll-ball {
  0%, 100% { transform: translateY(0); opacity: 0.7; }
  50% { transform: translateY(12px); opacity: 1; }
}
.animate-scroll-ball {
  animation: scroll-ball 2s ease-in-out infinite;
}

/* Scroll reveal pour cartes */
.reveal-card {
  opacity: 0;
  transform: translateY(80px);
  transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal-card.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-card:nth-child(1) { transition-delay: 0.1s; }
.reveal-card:nth-child(2) { transition-delay: 0.3s; }
.reveal-card:nth-child(3) { transition-delay: 0.5s; }
.reveal-card:nth-child(4) { transition-delay: 0.7s; }
</style>