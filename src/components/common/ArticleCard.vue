<script setup lang="ts">
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

const formatDate = (d: string) => new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
</script>

<template>
  <RouterLink :to="`/article/${article.slug}`">
    <article class="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
      <div class="relative overflow-hidden">
        <img :src="article.image" :alt="article.title" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
      </div>
      
      <div class="p-6 md:p-8">
        <CategoryTag :category="article.category" class="mb-4" />
        <h3 class="text-2xl md:text-3xl font-black text-bleu-nuit mb-4 group-hover:text-bleu-confident transition">
          {{ article.title }}
        </h3>
        <p class="text-gray-700 text-lg leading-relaxed mb-6 line-clamp-3">
          {{ article.excerpt }}
        </p>
        <div class="flex items-center text-sm text-gray-500 font-medium">
          <span>{{ formatDate(article.date) }}</span>
          <span class="mx-3">•</span>
          <span>{{ article.readingTime }} min</span>
        </div>
      </div>
    </article>
  </RouterLink>
</template>