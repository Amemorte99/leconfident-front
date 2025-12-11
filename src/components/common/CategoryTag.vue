<script setup lang="ts">
defineProps<{ category: string }>()
</script>

<template>
  <span class="inline-block px-5 py-2 text-xs font-black tracking-wider uppercase rounded-full bg-bleu-confident/10 text-bleu-nuit border border-bleu-confident/30">
    {{ category }}
  </span>
</template>