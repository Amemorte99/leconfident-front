<!-- src/views/HomeView.vue – VERSION ABSOLUE 2025 : DESIGN SENIOR ULTRA-ÉLÉGANT & LUXUEUX -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import ArticleCard from '@/components/common/ArticleCard.vue'

const featuredArticles = ref([
  {
    slug: "reforme-agraire-tchad",
    title: "La réforme agraire au Tchad : promesses tenues ou illusion ?",
    excerpt: "Une enquête exclusive sur les impacts réels de la réforme foncière annoncée en 2023, entre espoirs des paysans et résistances des élites traditionnelles.",
    image: "https://imgs.mongabay.com/wp-content/uploads/sites/20/2024/08/29111628/2monga.jpg",
    category: "Enquêtes",
    date: "19 décembre 2025",
    readingTime: 18
  },
  {
    slug: "president-discours-surprise",
    title: "Le Président dissout l’Assemblée et annonce des élections anticipées",
    excerpt: "Discours surprise hier soir : le pays entre dans une période d’incertitude politique majeure.",
    image: "https://humanglemedia.com/wp-content/uploads/2021/04/23E9E91E-118F-43B7-832C-9943B0432A15.jpeg",
    category: "Politique",
    date: "18 décembre 2025",
    readingTime: 8
  },
  {
    slug: "fintech-afrique-levee-record",
    title: "Une fintech tchadienne lève 150 millions $ et défie les géants mondiaux",
    excerpt: "Record historique pour le continent : cette start-up vient de boucler la plus grosse levée de fonds jamais réalisée en Afrique centrale.",
    image: "https://www.techinafrica.com/wp-content/uploads/2025/04/84ff12b9-5382-4086-8205-708a1114f611_3500x1969-758x426.webp",
    category: "Tech & Innovation",
    date: "17 décembre 2025",
    readingTime: 10
  },
  {
    slug: "mesures-securite-nationales",
    title: "Renforcement des mesures de sécurité nationale face aux tensions",
    excerpt: "Le gouvernement annonce des dispositions exceptionnelles pour préserver l’ordre public et la stabilité.",
    image: "http://www.xinhuanet.com/english/2020-04/26/139009715_15878995525741n.jpg",
    category: "Actualités",
    date: "16 décembre 2025",
    readingTime: 6
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
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b  from-[#001F33]/5 to-[#003B5C]/5">
    <!-- Hero principal : Immersif, journalistique et premium -->
    <section class="relative h-[85vh] md:h-[95vh] overflow-hidden">
      <img
        src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/43B4/production/_129323371_gettyimages-1232471833.jpg"
        alt="Journalisme d'investigation au Tchad : vérité et liberté de la presse"
        class="absolute inset-0 w-full h-full object-cover brightness-50 transition-transform duration-[40s] ease-linear group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#001F33]/40 to-[#001F33]/90" />
      
      <div class="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 class="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tighter leading-none drop-shadow-2xl">
          Le Confident
        </h1>
        <p class="mt-8 text-xl md:text-2xl lg:text-3xl font-light text-gray-100 max-w-5xl leading-relaxed opacity-95">
          Informer juste. Informer vrai.<br />
          <span class="font-bold text-[#F9A826] drop-shadow-lg">Et autrement.</span>
        </p>
        <div class="mt-12 py-2 flex flex-wrap gap-6 md:gap-8">
          <RouterLink
            to="/rubrique/actualites"
            class="px-10 py-5 bg-gradient-to-r from-[#04A7D6] to-[#048FC6] text-white text-lg md:text-xl font-black rounded-3xl hover:from-[#048FC6] hover:to-[#04A7D6] transition-all duration-500 shadow-2xl hover:shadow-[#04A7D6]/50 hover:-translate-y-1"
          >
            Découvrir l'actualité
          </RouterLink>
          <RouterLink
            to="/dossiers"
            class="px-10 py-5 border-4 border-white text-white text-lg md:text-xl font-black rounded-3xl hover:bg-white hover:text-[#003B5C] transition-all duration-500 shadow-2xl hover:shadow-xl hover:-translate-y-1"
          >
            Nos grandes enquêtes
          </RouterLink>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70">
        <svg class="w-10 h-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- À la une : Grille hiérarchique premium avec effets subtils -->
    <section class="py-24 md:py-32 lg:py-40 bg-white/90 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="text-center mb-16 md:mb-24">
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-black text-[#001F33] tracking-tight drop-shadow-md">
            <span class="bg-gradient-to-r from-[#04A7D6] to-[#F9A826] bg-clip-text text-transparent">À la une</span>
          </h2>
          <p class="mt-6 text-xl md:text-2xl text-[#003B5C]/80 font-light max-w-3xl mx-auto leading-relaxed">
            Les investigations et analyses qui font l’actualité aujourd’hui
          </p>
          <div class="mt-8 w-48 h-1 bg-gradient-to-r from-[#04A7D6] via-[#F9A826] to-[#003B5C] rounded-full mx-auto" />
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
          <ArticleCard
            v-for="(article, index) in featuredArticles"
            :key="article.slug"
            :article="article"
            class="reveal opacity-0 translate-y-16 transition-all duration-1000 ease-out"
            :class="{
              'md:col-span-2 lg:col-span-2 xl:col-span-2 lg:row-span-2': index === 0,
              'hover:-translate-y-4 hover:shadow-3xl': true
            }"
          />
        </div>

        <div class="mt-20 md:mt-28 text-center">
          <RouterLink
            to="/rubrique/actualites"
            class="inline-flex items-center gap-4 text-[#003B5C] text-xl font-bold hover:text-[#04A7D6] transition-all duration-500"
          >
            Voir toutes les actualités
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Section Dossiers : Plus immersive et luxueuse -->
    <section class="relative py-32 md:py-44 bg-[#003B5C]/95 overflow-hidden">
      <div class="absolute inset-0 opacity-30">
        <img
          src="https://thumbs.dreamstime.com/z/confidential-investigation-files-surveillance-photos-top-down-view-desk-cluttered-materials-several-manila-folders-419038171.jpg"
          alt="Dossiers confidentiels d'enquête"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#003B5C] to-transparent" />

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-10 tracking-tighter drop-shadow-2xl">
          <span class="text-[#F9A826]">Nos dossiers</span>
        </h2>
        <p class="text-xl md:text-2xl lg:text-3xl max-w-5xl mx-auto mb-14 font-light leading-relaxed opacity-95">
          Les grandes enquêtes exclusives qui révèlent ce que personne n’ose dire.<br />
          Des reportages de fond pour comprendre les enjeux profonds du Tchad contemporain.
        </p>
        <RouterLink
          to="/dossiers"
          class="inline-block px-14 py-7 bg-[#F9A826] text-[#003B5C] text-xl md:text-2xl font-black rounded-3xl hover:bg-white hover:scale-105 transition-all duration-700 shadow-2xl hover:shadow-[#F9A826]/50"
        >
          Explorer les dossiers
        </RouterLink>
      </div>
    </section>

    <!-- Communauté : Carte raffinée et élégante -->
    <section class="py-24 md:py-32 bg-gradient-to-b from-white to-gray-100">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-5xl md:text-6xl font-black text-[#001F33] text-center mb-16 tracking-tight">
          Rejoignez notre communauté
        </h2>
        <div class="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
          <div class="p-12 md:p-20 text-center">
            <div class="flex flex-col sm:flex-row items-center justify-center gap-10 mb-12">
              <div class="w-28 h-28 bg-gradient-to-br from-[#1877F2] to-[#166FE5] rounded-3xl flex items-center justify-center shadow-2xl">
                <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.012 1.842-4.669 4.533-4.669 1.29 0 2.399.096 2.721.139v3.156h-1.863c-1.039 0-1.241.494-1.241 1.219v1.597h2.482l-.323 3.47h-2.159v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
                </svg>
              </div>
              <div class="text-center sm:text-left">
                <p class="text-4xl md:text-5xl font-black text-[#003B5C]">Le Confident</p>
                <p class="text-xl md:text-2xl text-gray-600 mt-3">+ de 50 000 abonnés · Actualités exclusives</p>
              </div>
            </div>
            <p class="text-xl md:text-2xl italic text-[#04A7D6] mb-14 font-medium">
              “Informer juste, informer vrai et autrement”
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61558775472983"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block px-14 py-7 bg-gradient-to-r from-[#1877F2] to-[#166FE5] text-white text-xl md:text-2xl font-black rounded-3xl hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-[#1877F2]/60"
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
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Parallax subtil sur l'image hero au scroll (optionnel avec JS si besoin) */
section.relative img {
  will-change: transform;
}
</style>