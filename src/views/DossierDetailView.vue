<!-- src/views/DossierDetailView.vue – VERSION 2025 : DESIGN SENIOR ULTRA-ÉLÉGANT & LUXUEUX -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

// Récupérer l'ID depuis l'URL
const route = useRoute()
const dossierId = route.params.id as string

// Simuler des données détaillées (à remplacer par API ou store plus tard)
const dossier = ref<{
  id: number
  title: string
  category: string
  date: string
  author: string
  authorRole: string
  authorBio: string
  authorAvatar: string
  image: string
  excerpt: string
  content: string[]
  relatedDossiers?: { id: number; title: string; image: string }[]
} | null>(null)

const loading = ref(true)

onMounted(() => {
  // Simulation de fetch – en prod, appelle ton API ici
  setTimeout(() => {
    const data = {
      1: {
        id: 1,
        title: 'La réforme agraire au Tchad : promesses tenues ou illusion ?',
        category: 'Enquête',
        date: '15 décembre 2025',
        author: 'Fatimé Koulamallah',
        authorRole: 'Journaliste d’investigation',
        authorBio: 'Spécialiste des questions foncières et rurales, Fatimé couvre le Tchad depuis plus de 15 ans.',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
        image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
        excerpt: 'Une enquête exclusive sur les impacts réels de la réforme foncière annoncée en 2023...',
        content: [
          'Depuis l’annonce en 2023 de la grande réforme agraire par le gouvernement de transition, les attentes étaient immenses dans les campagnes tchadiennes. Des millions de paysans espéraient enfin une sécurisation de leurs terres face aux accaparements et aux conflits pastoraux-agriculteurs.',
          'Deux ans plus tard, Le Confident a mené une enquête de terrain dans les provinces du Mayo-Kebbi, du Logone et du Tandjilé. Sur place, le constat est contrasté : si certaines communautés ont obtenu des titres fonciers, la majorité des dossiers restent bloqués dans les administrations.',
          'Nos investigations révèlent que des intérêts privés puissants – souvent liés à des élites politico-militaires – continuent de freiner la mise en œuvre effective de la réforme. Des documents officiels que nous avons pu consulter montrent que plus de 60 % des terres redistribuées ont finalement bénéficié à des investisseurs plutôt qu’aux paysans locaux.',
          'À Bongor, nous avons rencontré Mariam, cultivatrice de 52 ans : « On nous a promis la terre de nos ancêtres, mais aujourd’hui ce sont des grands tracteurs étrangers qui labourent nos champs. »',
          'Cette enquête soulève une question cruciale : la réforme agraire était-elle réellement destinée à protéger les plus vulnérables, ou n’était-elle qu’un outil de communication politique dans un contexte de transition fragile ?',
        ],
        relatedDossiers: [
          { id: 2, title: 'Pétrole et pouvoir : les contrats secrets de N’Djamena', image: 'https://images.unsplash.com/photo-1566406353-0e587b01c0b8?ixlib=rb-4.0.3&auto=format&fit=crop&q=80' },
          { id: 4, title: 'Transition écologique : le Tchad face au changement climatique', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&q=80' },
        ],
      },
      // Ajoute d'autres IDs ici pour tester
    }

    dossier.value = (data as any)[dossierId] || null
    loading.value = false
  }, 600) // Simule un léger délai de chargement
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b py-16 md:py-24 lg:py-32 from-[#001F33]/5 to-[#003B5C]/10">
    <!-- Loading state élégant -->
    <div v-if="loading" class="flex items-center justify-center min-h-screen">
      <div class="text-2xl text-[#003B5C] font-light tracking-wider">Chargement du dossier...</div>
    </div>

    <!-- Contenu principal -->
    <article v-else-if="dossier" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <!-- Catégorie & Date -->
      <div class="text-center mb-12">
        <span class="inline-block px-6 py-3 bg-[#F9A826]/90 rounded-full text-white font-bold tracking-wider text-sm md:text-base">
          {{ dossier.category.toUpperCase() }}
        </span>
        <p class="mt-6 text-lg md:text-xl text-[#003B5C] opacity-80">{{ dossier.date }}</p>
      </div>

      <!-- Titre principal -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#001F33] leading-tight text-center mb-12 md:mb-16 tracking-tight drop-shadow-md">
        {{ dossier.title }}
      </h1>

      <!-- Image hero -->
      <div class="relative rounded-3xl overflow-hidden shadow-2xl mb-16 md:mb-20">
        <img :src="dossier.image" :alt="dossier.title" class="w-full h-[500px] md:h-[600px] object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#001F33]/60 to-transparent" />
      </div>

      <!-- Auteur -->
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20 bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
        <img :src="dossier.authorAvatar" alt="Avatar de l'auteur" class="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#04A7D6]/30" />
        <div class="text-center md:text-left">
          <h3 class="text-2xl md:text-3xl font-bold text-[#001F33] mb-2">{{ dossier.author }}</h3>
          <p class="text-lg text-[#003B5C] font-medium mb-4">{{ dossier.authorRole }}</p>
          <p class="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">{{ dossier.authorBio }}</p>
        </div>
      </div>

      <!-- Contenu de l'article -->
      <div class="prose prose-lg md:prose-xl lg:prose-2xl max-w-none text-[#001F33]/90 leading-relaxed space-y-8">
        <p v-for="(paragraph, index) in dossier.content" :key="index" class="text-lg md:text-xl font-light">
          {{ paragraph }}
        </p>
      </div>

      <!-- Dossiers liés -->
      <section v-if="dossier.relatedDossiers && dossier.relatedDossiers.length" class="mt-32">
        <h2 class="text-4xl md:text-5xl font-black text-[#001F33] text-center mb-16 tracking-tight">
          <span class="bg-gradient-to-r from-[#04A7D6] to-[#048FC6] bg-clip-text text-transparent">À lire également</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RouterLink
            v-for="related in dossier.relatedDossiers"
            :key="related.id"
            :to="`/dossier/${related.id}`"
            class="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700"
          >
            <img :src="related.image" :alt="related.title" class="w-full h-80 object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#001F33]/90 to-transparent flex items-end p-8">
              <h3 class="text-2xl md:text-3xl font-bold text-white leading-tight">{{ related.title }}</h3>
            </div>
          </RouterLink>
        </div>
      </section>

      <!-- Bouton retour -->
      <div class="text-center mt-24">
        <RouterLink
          to="/dossiers"
          class="inline-flex items-center gap-4 px-10 py-5 bg-[#04A7D6] hover:bg-[#048FC6] rounded-full text-white font-bold text-lg md:text-xl transition-all duration-500 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
        >
          ← Retour aux dossiers
        </RouterLink>
      </div>
    </article>

    <!-- 404 élégant si dossier non trouvé -->
    <div v-else class="flex flex-col items-center justify-center min-h-screen text-center px-8">
      <h1 class="text-6xl md:text-8xl font-black text-[#001F33] mb-8">404</h1>
      <p class="text-2xl md:text-3xl text-[#003B5C] mb-12">Dossier non trouvé</p>
      <RouterLink to="/dossiers" class="px-8 py-4 bg-[#F9A826] rounded-full text-white font-bold text-xl hover:opacity-90 transition">
        Retour à la liste des dossiers
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* Typographie raffinée et respirante */
.prose p {
  margin-bottom: 2rem;
}

/* Ombre subtile sur les images au hover */
.group:hover img {
  filter: brightness(0.9);
}
</style>