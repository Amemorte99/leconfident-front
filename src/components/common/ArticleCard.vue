<!-- src/components/common/ArticleCard.vue – VERSION ABSOLUE 2025 -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CategoryTag from '@/components/common/CategoryTag.vue'

defineProps<{
  article: {
    slug: string
    title: string
    excerpt: string
    image: string
    category: string
    date: string
    readingTime: number
  }
}>()

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
</script>

<template>
  <RouterLink
    :to="`/article/${article.slug}`"
    class="group block focus:outline-none focus-visible:ring-4 focus-visible:ring-[#04A7D6/30 rounded-3xl transition-all duration-300"
  >
    <article
      class="relative overflow-hidden rounded-3xl bg-white dark:bg-[#001F33] shadow-xl hover:shadow-2xl dark:shadow-black/70 transition-all duration-700 hover:-translate-y-3"
    >
      <!-- Image avec effet zoom + overlay premium -->
      <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img
          :src="article.image"
          :alt="article.title"
          loading="lazy"
          class="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        <!-- Overlay au hover – plus doux et moderne -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />
      </div>

      <!-- Contenu – espacements luxueux -->
      <div class="p-7 md:p-10">
        <!-- Catégorie -->
        <CategoryTag :category="article.category" class="mb-6" />

        <!-- Titre – ultra lisible, contraste parfait -->
        <h3
          class="text-2xl md:text-3xl font-black leading-tight mb-6 line-clamp-3
                 text-[#001F33] dark:text-white
                 group-hover:text-[#04A7D6] transition-colors duration-500"
        >
          {{ article.title }}
        </h3>

        <!-- Extrait -->
        <p
          class="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-10 line-clamp-3"
        >
          {{ article.excerpt }}
        </p>

        <!-- Métadonnées – icône horloge + typo premium -->
        <div
          class="flex items-center justify-between text-sm font-extrabold uppercase tracking-wider text-gray-600 dark:text-gray-400"
        >
          <time datetime="article.date">
            {{ formatDate(article.date) }}
          </time>

          <span class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ article.readingTime }} min
          </span>
        </div>
      </div>

      <!-- Effet de survol subtil mais luxueux (ring + glow) -->
      <div
        class="pointer-events-none absolute inset-0 rounded-3xl ring-4 ring-transparent group-hover:ring-[#04A7D6]/25 dark:group-hover:ring-[#04A7D6]/40 transition-all duration-700"
      />
      <div
        class="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        :style="{ boxShadow: 'inset 0 0 60px rgba(4,167,214,0.15)' }"
      />
    </article>
  </RouterLink>
</template>