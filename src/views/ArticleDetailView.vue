<!-- src/views/ArticleDetailView.vue – VERSION FINALE CORRIGÉE & ULTRA-PRO (sans @unhead/vue) -->
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

// Récupération du slug
const route = useRoute()
const slug = computed(() => route.params.slug as string)

// Données de l'article (à connecter à Pinia ou API plus tard)
const article = ref({
  slug: slug.value,
  title: "Enquête exclusive : 2,1 milliards FCFA détournés au ministère des Finances",
  category: "Enquêtes",
  date: "19 décembre 2025",
  readingTime: 18,
  authors: [
    { 
      name: "Ahmat Yacoub", 
      role: "Journaliste d’investigation senior", 
      bio: "Spécialiste des finances publiques et de la lutte anti-corruption au Tchad depuis 15 ans.", 
      avatar: "https://randomuser.me/api/portraits/men/45.jpg" 
    },
    { 
      name: "Fatimé Koulamallah", 
      role: "Rédactrice en chef adjointe", 
      bio: "Experte en analyse de données journalistiques et investigations transnationales.", 
      avatar: "https://randomuser.me/api/portraits/women/68.jpg" 
    }
  ],
  heroImage: "https://media.icij.org/uploads/2020/09/sars-csv-invert.jpeg",
  contentImages: [
    { src: "https://media.icij.org/uploads/2020/01/Cover-TheEngineer-V2.jpeg_effected_logo-1.jpg", alt: "Réseau de sociétés écrans et flux financiers opaques", caption: "Schéma des flux financiers révélé par nos sources" },
    { src: "https://genevasummit.org/wp-content/uploads/2022/04/51986562771_ff81ffabc5_3k-scaled.jpg", alt: "Journaliste africain dénonçant la corruption", caption: "Un journaliste au cœur de l'investigation en Afrique" },
    { src: "https://thumbs.dreamstime.com/z/top-secret-government-documents-letters-278187676.jpg", alt: "Documents confidentiels marqués 'Top Secret'", caption: "Extraits anonymisés des documents obtenus par Le Confident" },
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
    { slug: "president-discours-surprise", title: "Le Président dissout l’Assemblée et annonce des élections anticipées", category: "Politique", image: "https://i.guim.co.uk/img/media/7f72479e5a13d81cef0e4c4eb8c8c840170be225/0_63_3264_1958/master/3264.jpg?width=1200&quality=85&auto=format&fit=max&s=d949bbea67b60a7bb6c71f369c8ceb15" },
    { slug: "reforme-agraire-tchad", title: "La réforme agraire au Tchad : promesses tenues ou illusion ?", category: "Enquêtes", image: "https://www.crisisgroup.org/sites/default/files/styles/image_large_ct/public/2024-08/Un%20champs%20nouvellement%20cultive%CC%81.jpg.webp?itok=x1HNJM1O" },
  ]
})

// SEO manuel propre et efficace (sans dépendance externe)
onMounted(() => {
  document.title = `${article.value.title} — Le Confident`

  // Meta description
  let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.name = "description"
    document.head.appendChild(metaDesc)
  }
  metaDesc.content = `${article.value.paragraphs[0]} ${article.value.paragraphs[1].slice(0, 140)}...`

  // Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta')
  ogTitle.setAttribute('property', 'og:title')
  ogTitle.setAttribute('content', article.value.title)
  document.head.appendChild(ogTitle)

  const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta')
  ogImage.setAttribute('property', 'og:image')
  ogImage.setAttribute('content', article.value.heroImage)
  document.head.appendChild(ogImage)

  const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta')
  ogType.setAttribute('property', 'og:type')
  ogType.setAttribute('content', 'article')
  document.head.appendChild(ogType)
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-[#001F33]/5 to-[#003B5C]/5 overflow-hidden">
    <!-- Hero ultra-immersif -->
    <section class="relative h-[70vh] md:h-[85vh] lg:h-[95vh] overflow-hidden">
      <img
        :src="article.heroImage"
        :alt="article.title"
        class="absolute inset-0 w-full h-full object-cover brightness-45 scale-110 transition-transform duration-[60s] ease-linear"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#001F33]/40 to-[#001F33]/95" />
      
      <div class="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 lg:pb-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div class="max-w-5xl">
          <span class="inline-block px-8 py-4 bg-[#F9A826] rounded-full text-[#001F33] font-black tracking-widest text-sm md:text-base mb-8 shadow-2xl">
            {{ article.category.toUpperCase() }}
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tighter drop-shadow-3xl">
            {{ article.title }}
          </h1>
          <div class="mt-10 flex flex-wrap items-center gap-6 text-white/90 text-base md:text-lg font-medium">
            <span>{{ article.authors.map(a => a.name).join(' & ') }}</span>
            <span>•</span>
            <time>{{ article.date }}</time>
            <span>•</span>
            <span>{{ article.readingTime }} min de lecture</span>
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Contenu principal -->
    <article class="relative z-20 -mt-20 md:-mt-32 lg:-mt-48 bg-white/98 backdrop-blur-md rounded-t-3xl lg:rounded-t-[5rem] shadow-3xl">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-40">
        <!-- Auteurs -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 bg-gradient-to-br from-[#04A7D6]/5 to-[#F9A826]/5 rounded-3xl p-10 md:p-16 shadow-2xl">
          <div v-for="author in article.authors" :key="author.name" class="flex items-center gap-8">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-6 border-white shadow-xl">
              <img :src="author.avatar" :alt="author.name" class="w-full h-full object-cover" />
            </div>
            <div>
              <h3 class="text-2xl md:text-3xl font-black text-[#001F33] mb-2">{{ author.name }}</h3>
              <p class="text-lg text-[#003B5C] font-semibold mb-3">{{ author.role }}</p>
              <p class="text-base text-gray-700 leading-relaxed">{{ author.bio }}</p>
            </div>
          </div>
        </div>

        <!-- Corps de l’article -->
        <div class="prose prose-lg md:prose-xl lg:prose-2xl max-w-none text-[#001F33]/90 leading-relaxed space-y-16">
          <p class="text-2xl md:text-3xl lg:text-4xl font-light italic text-[#003B5C] border-l-8 border-[#04A7D6] pl-12 drop-shadow-md">
            {{ article.paragraphs[0] }}
          </p>
          
          <p v-for="(p, i) in article.paragraphs.slice(1)" :key="i" class="text-lg md:text-xl lg:text-2xl">
            <div v-html="p"></div>
            <figure v-if="i === 1 || i === 3 || i === 5" class="my-20">
              <img 
                :src="article.contentImages[Math.floor((i-1)/2)].src" 
                :alt="article.contentImages[Math.floor((i-1)/2)].alt" 
                class="w-full rounded-3xl shadow-3xl"
              />
              <figcaption class="text-center text-base italic text-gray-600 mt-6 font-medium">
                {{ article.contentImages[Math.floor((i-1)/2)].caption }}
              </figcaption>
            </figure>
          </p>
        </div>

        <!-- Partage -->
        <div class="mt-32 pt-20 border-t-2 border-dashed border-gray-200/50">
          <p class="text-center text-gray-600 uppercase tracking-widest text-sm mb-10 font-bold">Partagez cette enquête exclusive</p>
          <div class="flex justify-center gap-10">
            <button aria-label="Partager sur X" class="group w-20 h-20 bg-gradient-to-br from-[#04A7D6] to-[#048FC6] rounded-full flex items-center justify-center hover:scale-115 hover:shadow-3xl hover:shadow-[#04A7D6]/60 transition-all duration-700">
              <span class="text-3xl font-black text-white">X</span>
            </button>
            <button aria-label="Partager sur Facebook" class="group w-20 h-20 bg-gradient-to-br from-[#1877F2] to-[#166FE5] rounded-full flex items-center justify-center hover:scale-115 hover:shadow-3xl transition-all duration-700">
              <span class="text-3xl font-black text-white">f</span>
            </button>
          </div>
        </div>
      </div>
    </article>

    <!-- Articles liés -->
    <section v-if="article.relatedArticles.length" class="py-32 bg-gradient-to-b from-white to-[#003B5C]/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-black text-center text-[#001F33] mb-20 tracking-tighter">
          <span class="bg-gradient-to-r from-[#04A7D6] via-[#F9A826] to-[#048FC6] bg-clip-text text-transparent">À lire également</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <RouterLink 
            v-for="related in article.relatedArticles" 
            :key="related.slug" 
            :to="`/article/${related.slug}`" 
            class="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-4xl transition-all duration-1000 hover:-translate-y-4"
          >
            <img :src="related.image" :alt="related.title" class="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#001F33]/95 via-[#001F33]/30 to-transparent flex flex-col justify-end p-12">
              <span class="inline-block px-6 py-3 bg-[#F9A826] rounded-full text-[#001F33] font-black text-sm mb-6">{{ related.category }}</span>
              <h3 class="text-3xl md:text-4xl font-black text-white leading-tight">{{ related.title }}</h3>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Retour -->
    <div class="text-center py-20 bg-white/50">
      <RouterLink to="/" class="inline-flex items-center gap-6 px-16 py-8 bg-gradient-to-r from-[#04A7D6] to-[#048FC6] rounded-full text-white font-black text-2xl hover:scale-105 hover:shadow-3xl transition-all duration-700">
        ← Retour à l'accueil
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.prose :deep(strong) { @apply font-black text-[#003B5C]; }
.prose :deep(cite) { @apply block mt-8 text-right text-xl font-bold text-[#04A7D6]; }
section.relative img { will-change: transform; }
</style>