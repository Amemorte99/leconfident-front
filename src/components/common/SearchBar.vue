
<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const query = ref('')

const openSearch = () => {
  isOpen.value = true
  setTimeout(() => {
    const input = document.getElementById('confident-search-input') as HTMLInputElement
    input?.focus()
  }, 100)
}

const closeSearch = () => {
  isOpen.value = false
  query.value = ''
}

const submit = () => {
  if (query.value.trim().length >= 2) {
    location.href = `/recherche?q=${encodeURIComponent(query.value.trim())}`
  }
}
</script>

<template>
  <div class="relative">
    <!-- Bouton loupe -->
    <button
      @click="openSearch"
      class="p-2.5 hover:bg-gray-100 rounded-full transition-colors"
      aria-label="Rechercher"
    >
      <svg class="w-6 h-6 text-[#003B5C] hover:text-[#04A7D6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>

    <!-- Overlay pleine écran -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[9999] bg-black/50 flex items-start justify-center pt-32 px-4"
      @click="closeSearch"
    >
      <div
        @click.stop
        class="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div class="flex items-center border-b-2 border-[#04A7D6] p-6">
          <svg class="w-8 h-8 text-[#04A7D6] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            id="confident-search-input"
            v-model="query"
            type="text"
            placeholder="Rechercher un article, une enquête, un sujet..."
            class="flex-1 text-lg outline-none"
            @keydown.enter.prevent="submit"
            @keydown.esc="closeSearch"
          />
          <button
            @click="closeSearch"
            class="ml-4 text-gray-500 hover:text-[#04A7D6] transition"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div v-if="query.length >= 2" class="p-5 bg-[#F2F2F2] text-sm text-gray-700">
          Appuyez sur <kbd class="px-2 py-1 bg-white rounded border">Entrée</kbd>
          pour rechercher « <strong>{{ query }}</strong> »
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input::placeholder { color: #94a3b8; }
</style>