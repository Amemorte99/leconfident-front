<!-- src/components/common/BreakingNewsBanner.vue -->
<script setup lang="ts">
defineProps<{
  news: {
    title: string
    link?: string
  }
}>()
</script>

<template>
  <div class="relative overflow-hidden bg-[#F9A826] dark:bg-[#003B5C] text-white border-b-4 border-white/30 dark:border-[#04A7D6]/60">
    <!-- Petite ligne décorative en haut -->
    <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

    <div class="flex items-center py-3">
      <!-- Contenu répété 6 fois pour un défilement infini fluide -->
      <div class="flex animate-marquee-infinite">
        <div v-for="i in 6" :key="i" class="flex items-center gap-8 flex-shrink-0 px-8">
          <span class="inline-block bg-white dark:bg-[#04A7D6] text-[#F9A826] dark:text-white px-6 py-2 font-black text-sm uppercase tracking-widest rounded shadow-md">
            BREAKING
          </span>
          <a
            :href="news.link || '#'"
            class="text-lg md:text-xl font-extrabold hover:underline underline-offset-4 transition"
          >
            {{ news.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Défilement infini parfait */
.animate-marquee-infinite {
  display: inline-flex;
  animation: scroll 40s linear infinite;
  will-change: transform;
}

@keyframes scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

/* Pause au survol — très pro */
.animate-marquee-infinite:hover {
  animation-play-state: paused;
}
</style>