<!-- src/views/DossiersView.vue – VERSION 2025 : DESIGN SENIOR ULTRA-ÉLÉGANT & LUXUEUX -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

// Simuler des données de dossiers (à remplacer plus tard par un store ou API)
const dossiers = ref([
  {
    id: 1,
    title: 'La réforme agraire au Tchad : promesses tenues ou illusion ?',
    excerpt: 'Une enquête exclusive sur les impacts réels de la réforme foncière annoncée en 2023, entre espoirs des paysans et résistances des élites traditionnelles.',
    date: '15 décembre 2025',
    author: 'Fatimé Koulamallah',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    category: 'Enquête',
    featured: true,
  },
  {
    id: 2,
    title: 'Pétrole et pouvoir : les contrats secrets de N’Djamena',
    excerpt: 'Documents confidentiels révélés : comment les nouvelles concessions pétrolières ont été attribuées et à quel prix pour la nation.',
    date: '10 décembre 2025',
    author: 'Ahmat Yacoub',
    image: 'https://images.unsplash.com/photo-1566406353-0e587b01c0b8?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    category: 'Investigation',
    featured: false,
  },
  {
    id: 3,
    title: 'Éducation en crise : quand les écoles ferment leurs portes',
    excerpt: 'Reportage dans les régions du Lac et du Hadjer-Lamis où des milliers d’enfants n’ont plus accès à l’école à cause de l’insécurité.',
    date: '5 décembre 2025',
    author: 'Mariam Djibrine',
    image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    category: 'Reportage',
    featured: true,
  },
  {
    id: 4,
    title: 'Transition écologique : le Tchad face au changement climatique',
    excerpt: 'Entre assèchement du lac Tchad et initiatives vertes, où en est vraiment le pays dans sa lutte contre le réchauffement ?',
    date: '1 décembre 2025',
    author: 'Issa Mahamat',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    category: 'Analyse',
    featured: false,
  },
  {
    id: 5,
    title: 'Les femmes leaders qui changent le visage du Tchad',
    excerpt: 'Portraits de cinq femmes tchadiennes qui brisent les plafonds de verre dans la politique, l’entreprise et la société civile.',
    date: '28 novembre 2025',
    author: 'Amina Hassaballah',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    category: 'Portrait',
    featured: false,
  },
])

const featuredDossiers = dossiers.value.filter(d => d.featured)
const regularDossiers = dossiers.value.filter(d => !d.featured)
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b py-16 md:py-24 lg:py-32 from-[#001F33]/5 to-[#003B5C]/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section – Titre principal ultra-élégant -->
      <div class="text-center mb-20 md:mb-28 lg:mb-36">
        <h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#001F33] tracking-tighter mb-6 md:mb-8 drop-shadow-lg">
          <span class="bg-gradient-to-r from-[#F9A826] to-[#F47F24] bg-clip-text text-transparent">
            DOSSIERS
          </span>
        </h1>
        <p class="text-xl md:text-2xl lg:text-3xl text-[#003B5C] font-light tracking-wider max-w-4xl mx-auto opacity-90 leading-relaxed">
          Nos enquêtes approfondies, analyses exclusives et reportages de fond<br />
          pour comprendre en profondeur les enjeux qui façonnent le Tchad d’aujourd’hui.
        </p>
      </div>

      <!-- Dossiers en vedette (featured) – Grand format -->
      <section v-if="featuredDossiers.length" class="mb-24 lg:mb-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <RouterLink
            v-for="dossier in featuredDossiers"
            :key="dossier.id"
            :to="`/dossier/${dossier.id}`"
            class="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700"
          >
            <div class="aspect-w-16 aspect-h-9 relative h-96 lg:h-full min-h-[400px]">
              <img
                :src="dossier.image"
                :alt="dossier.title"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#001F33]/90 via-[#001F33]/30 to-transparent" />
            </div>

            <div class="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 text-white">
              <span class="inline-block px-4 py-2 bg-[#F9A826]/90 rounded-full text-sm md:text-base font-bold tracking-wider mb-4">
                {{ dossier.category.toUpperCase() }}
              </span>
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 drop-shadow-2xl">
                {{ dossier.title }}
              </h2>
              <p class="text-lg md:text-xl font-light opacity-90 mb-6 line-clamp-3">
                {{ dossier.excerpt }}
              </p>
              <div class="flex items-center justify-between text-sm md:text-base">
                <span class="font-medium">{{ dossier.author }}</span>
                <span class="opacity-80">{{ dossier.date }}</span>
              </div>
            </div>

            <!-- Effet overlay au hover -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#F9A826]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </RouterLink>
        </div>
      </section>

      <!-- Tous les autres dossiers – Grille élégante -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
        <RouterLink
          v-for="dossier in regularDossiers"
          :key="dossier.id"
          :to="`/dossier/${dossier.id}`"
          class="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3"
        >
          <div class="relative h-64 md:h-72 overflow-hidden">
            <img
              :src="dossier.image"
              :alt="dossier.title"
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#001F33]/70 to-transparent" />
            <span class="absolute top-4 left-4 px-4 py-2 bg-[#04A7D6] rounded-full text-sm font-bold text-white">
              {{ dossier.category }}
            </span>
          </div>

          <div class="p-8 lg:p-10 space-y-4">
            <h3 class="text-2xl lg:text-3xl font-bold text-[#001F33] leading-tight group-hover:text-[#04A7D6] transition-colors duration-500">
              {{ dossier.title }}
            </h3>
            <p class="text-gray-700 text-base lg:text-lg line-clamp-3 leading-relaxed">
              {{ dossier.excerpt }}
            </p>
            <div class="flex items-center justify-between pt-4 border-t border-gray-200">
              <span class="text-sm font-medium text-[#003B5C]">{{ dossier.author }}</span>
              <span class="text-sm text-gray-500">{{ dossier.date }}</span>
            </div>
          </div>
        </RouterLink>
      </section>

      <!-- Message si pas de dossiers (optionnel) -->
      <div v-if="dossiers.length === 0" class="text-center py-20">
        <p class="text-2xl text-gray-600 font-light">Aucun dossier disponible pour le moment.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Amélioration du line-clamp pour une meilleure compatibilité */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animation subtile sur les cartes au scroll (optionnel avec Intersection Observer si besoin) */
.group:hover .drop-shadow-2xl {
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
}
</style>