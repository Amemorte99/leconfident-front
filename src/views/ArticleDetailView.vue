<!-- src/views/ArticleDetailView.vue – VERSION BEAUTÉ ABSOLUE & SANS ERREUR (2025) -->
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

// Slug depuis la route
const route = useRoute()
const slug = computed(() => route.params.slug as string)

// Données enrichies
const article = ref({
  slug: slug.value,
  title: "Enquête exclusive : 2,1 milliards FCFA détournés au ministère des Finances",
  category: "Enquêtes",
  date: "19 décembre 2025",
  readingTime: 18,
  authors: [
    { name: "Ahmat Yacoub", role: "Journaliste d’investigation senior", bio: "Spécialiste des finances publiques et de la lutte anti-corruption au Tchad depuis 15 ans.", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
    { name: "Fatimé Koulamallah", role: "Rédactrice en chef adjointe", bio: "Experte en analyse de données journalistiques et investigations transnationales.", avatar: "https://randomuser.me/api/portraits/women/68.jpg" }
  ],
  heroImage: "https://media.icij.org/uploads/2020/09/sars-csv-invert.jpeg",
  contentImages: [
    { src: "https://media.icij.org/uploads/2020/01/Cover-TheEngineer-V2.jpeg_effected_logo-1.jpg", alt: "Réseau de sociétés écrans et flux financiers opaques", caption: "Schéma des flux financiers révélé par nos sources exclusives" },
    { src: "https://genevasummit.org/wp-content/uploads/2022/04/51986562771_ff81ffabc5_3k-scaled.jpg", alt: "Journaliste africain au cœur d’une enquête sur la corruption", caption: "Sur le terrain avec notre équipe d’investigation" },
    { src: "https://thumbs.dreamstime.com/b/bold-red-circular-top-secret-confidential-stamp-design-beatuful-picture-399793378.jpg", alt: "Tampon TOP SECRET sur documents confidentiels", caption: "Extrait anonymisé des documents obtenus par Le Confident" },
  ],
  paragraphs: [
    "Documents à l’appui, <strong>Le Confident</strong> révèle aujourd’hui l’un des plus gros scandales financiers de la décennie au Tchad.",
    "Après huit mois d’investigation approfondie, notre équipe a pu consulter des rapports confidentiels, des virements bancaires internationaux et des témoignages anonymes qui mettent en lumière un détournement massif de fonds publics au sein du ministère des Finances.",
    "Entre 2022 et 2025, plus de <strong>2,1 milliards FCFA</strong> auraient été siphonnés via des marchés publics fictifs, des sociétés écrans basées à Dubaï et Chypre, et des rétrocommissions vers des hauts fonctionnaires et intermédiaires.",
    "« On nous demandait de signer des bons de commande pour des prestations jamais réalisées. Les factures étaient gonflées de 300 à 500 %. »<br><cite>— Témoin protégé, ancien directeur adjoint du département des marchés publics</cite>",
    "Le scandale éclate au moment où le Tchad traverse une crise économique sans précédent, marquée par l’inflation galopante et le chômage massif des jeunes. Ces fonds étaient initialement destinés au programme d’urgence pour l’emploi des jeunes et à la construction d’hôpitaux régionaux dans le Mayo-Kebbi et le Logone.",
    "L’opposition exige la création immédiate d’une commission d’enquête indépendante. Le gouvernement, par la voix de son porte-parole, promet « toute la lumière » sur cette affaire et annonce l’ouverture d’une enquête interne.",
    "Cette investigation soulève des questions cruciales sur la gouvernance, la transparence et l’impunité dans la gestion des ressources publiques au Tchad."
  ],
  relatedArticles: [
    { slug: "president-discours-surprise", title: "Le Président dissout l’Assemblée et annonce des élections anticipées", category: "Politique", image: "https://gdb.voanews.com/b21ba101-0824-4d50-b123-131591de47c4_w1080_h608_s.jpg" },
    { slug: "reforme-agraire-tchad", title: "La réforme agraire au Tchad : promesses tenues ou illusion ?", category: "Enquêtes", image: "https://www.crisisgroup.org/sites/default/files/styles/image_large_ct/public/2024-08/Un%20champs%20nouvellement%20cultive%CC%81.jpg.webp?itok=x1HNJM1O" },
  ]
})

// SEO manuel raffiné
onMounted(() => {
  document.title = `${article.value.title} — Le Confident`

  const setMeta = (name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
    if (!meta) { meta = document.createElement('meta'); meta.name = name; document.head.appendChild(meta) }
    meta.content = content
  }
  setMeta('description', `${article.value.paragraphs[0]} ${article.value.paragraphs[1].slice(0, 140)}...`)

  const setOG = (property: string, content: string) => {
    let meta = document.querySelector(`meta[property="og:${property}"]`) as HTMLMetaElement | null
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('property', `og:${property}`); document.head.appendChild(meta) }
    meta.content = content
  }
  setOG('title', article.value.title)
  setOG('image', article.value.heroImage)
  setOG('type', 'article')
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-[#001F33]/5 to-[#003B5C]/5 overflow-hidden">
    <!-- Hero majestueux -->
    <section class="relative h-[70vh] md:h-[85vh] lg:h-[95vh] overflow-hidden">
      <img
        :src="article.heroImage"
        :alt="article.title"
        class="absolute inset-0 w-full h-full object-cover brightness-40 scale-105 transition-transform duration-[80s] ease-linear"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#001F33]/30 to-[#001F33]/95" />
      
      <div class="relative z-10 h-full flex flex-col justify-end pb-28 md:pb-36 lg:pb-44 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div class="max-w-5xl">
          <span class="inline-block px-10 py-5 bg-[#F9A826] rounded-full text-[#001F33] font-black tracking-widest text-base md:text-lg mb-10 shadow-3xl">
            {{ article.category.toUpperCase() }}
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white leading-tight tracking-tighter drop-shadow-4xl">
            {{ article.title }}
          </h1>
          <div class="mt-12 flex flex-wrap items-center gap-8 text-white/90 text-lg md:text-xl font-medium">
            <span>{{ article.authors.map(a => a.name).join(' & ') }}</span>
            <span>•</span>
            <time>{{ article.date }}</time>
            <span>•</span>
            <span>{{ article.readingTime }} min de lecture</span>
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg class="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Contenu principal luxueux -->
    <article class="relative z-20 -mt-24 md:-mt-36 lg:-mt-52 bg-white/98 backdrop-blur-lg rounded-t-3xl lg:rounded-t-[6rem] shadow-4xl">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-44">
        <!-- Auteurs élégants -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 bg-gradient-to-br from-[#04A7D6]/5 via-transparent to-[#F9A826]/5 rounded-3xl p-12 md:p-20 shadow-3xl">
          <div v-for="author in article.authors" :key="author.name" class="flex items-center gap-10">
            <div class="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-8 border-white/80 shadow-2xl">
              <img :src="author.avatar" :alt="`Portrait de ${author.name}`" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1">
              <h3 class="text-3xl md:text-4xl font-black text-[#001F33] mb-3">{{ author.name }}</h3>
              <p class="text-xl text-[#003B5C] font-bold mb-4">{{ author.role }}</p>
              <p class="text-lg text-gray-700 leading-relaxed">{{ author.bio }}</p>
            </div>
          </div>
        </div>

        <!-- Corps de l’article : Plus de warning ! -->
        <div class="max-w-none text-[#001F33]/95 leading-loose space-y-20">
          <!-- Lead paragraph spécial -->
          <div class="text-3xl md:text-4xl lg:text-5xl font-light italic text-[#003B5C] border-l-8 border-[#F9A826] pl-14 drop-shadow-lg">
            {{ article.paragraphs[0] }}
          </div>
          
          <!-- Paragraphes normaux + images (div au lieu de p) -->
          <div v-for="(p, i) in article.paragraphs.slice(1)" :key="i" class="text-xl md:text-2xl lg:text-3xl">
            <div v-html="p"></div>
            <figure v-if="i === 1 || i === 3 || i === 5" class="my-32 -mx-8 md:-mx-20 lg:-mx-40">
              <img
                :src="article.contentImages[Math.floor((i-1)/2)].src"
                :alt="article.contentImages[Math.floor((i-1)/2)].alt"
                class="w-full rounded-3xl shadow-4xl"
              />
              <figcaption class="text-center text-lg italic text-gray-600 mt-10 font-medium">
                {{ article.contentImages[Math.floor((i-1)/2)].caption }}
              </figcaption>
            </figure>
          </div>
        </div>

        <!-- Partage premium -->
        <div class="mt-40 pt-24 border-t-4 border-dashed border-[#04A7D6]/20">
          <p class="text-center text-gray-600 uppercase tracking-widest text-base mb-12 font-bold">Partagez cette enquête exclusive</p>
          <div class="flex justify-center gap-12">
            <button aria-label="Partager sur X" class="group w-24 h-24 bg-gradient-to-br from-[#04A7D6] to-[#048FC6] rounded-full flex items-center justify-center hover:scale-120 hover:shadow-4xl hover:shadow-[#04A7D6]/70 transition-all duration-800">
              <span class="text-4xl font-black text-white">X</span>
            </button>
            <button aria-label="Partager sur Facebook" class="group w-24 h-24 bg-gradient-to-br from-[#1877F2] to-[#166FE5] rounded-full flex items-center justify-center hover:scale-120 hover:shadow-4xl transition-all duration-800">
              <span class="text-4xl font-black text-white">f</span>
            </button>
          </div>
        </div>
      </div>
    </article>

    <!-- Articles liés immersifs -->
    <section class="py-40 bg-gradient-to-b from-white via-[#003B5C]/5 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-6xl md:text-7xl lg:text-8xl font-black text-center text-[#001F33] mb-24 tracking-tighter">
          <span class="bg-gradient-to-r from-[#04A7D6] via-[#F9A826] to-[#048FC6] bg-clip-text text-transparent">À lire également</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
          <RouterLink v-for="related in article.relatedArticles" :key="related.slug" :to="`/article/${related.slug}`" class="group relative rounded-3xl overflow-hidden shadow-3xl hover:shadow-5xl transition-all duration-1000 hover:-translate-y-6">
            <img :src="related.image" :alt="related.title" class="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-1200" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#001F33]/95 via-[#001F33]/40 to-transparent flex flex-col justify-end p-16">
              <span class="inline-block px-8 py-4 bg-[#F9A826] rounded-full text-[#001F33] font-black text-base mb-8">{{ related.category }}</span>
              <h3 class="text-4xl md:text-5xl font-black text-white leading-tight">{{ related.title }}</h3>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Retour luxueux -->
    <div class="text-center py-24 bg-gradient-to-t from-white to-transparent">
      <RouterLink to="/" class="inline-flex items-center gap-8 px-20 py-10 bg-gradient-to-r from-[#04A7D6] to-[#048FC6] rounded-full text-white font-black text-3xl hover:scale-110 hover:shadow-4xl transition-all duration-700">
        ← Retour à l'accueil
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
section.relative img { will-change: transform; }
</style>