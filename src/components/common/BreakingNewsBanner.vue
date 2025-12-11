<script setup lang="ts">
defineProps<{ news: { title: string; link?: string } }>()
</script>

<template>
  <div class="bg-orange-breaking text-white py-3 overflow-hidden">
    <div class="flex items-center gap-4 animate-marquee whitespace-nowrap">
      <span class="bg-white text-orange-breaking px-6 py-2 font-black text-sm tracking-wider">BREAKING</span>
      <a :href="news.link || '#'" class="text-lg font-bold hover:underline">
        {{ news.title }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.animate-marquee { animation: marquee 25s linear infinite; }
@keyframes marquee { from { transform: translateX(100%); } to { transform: translateX(-100%); } }
</style>