<!-- src/components/common/SearchBar.vue -->
<script setup lang="ts">
import { ref, nextTick } from 'vue'

const isOpen = ref(false)
const query = ref('')

const open = async () => {
  isOpen.value = true
  await nextTick()
  document.getElementById('mobile-search-input')?.focus()
}

const close = () => {
  isOpen.value = false
  query.value = ''
}

const submit = () => {
  if (query.value.trim()) {
    location.href = `/recherche?q=${encodeURIComponent(query.value.trim())}`
  }
}
</script>

<template>
  <div>
    <!-- Bouton loupe premium -->
    <button
      @click="open"
      class="group relative p-4 rounded-full hover:bg-[#04A7D6]/10 transition-all duration-400"
    >
      <svg class="w-7 h-7 text-[#003B5C] group-hover:text-[#04A7D6] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <span class="absolute inset-0 rounded-full border-2 border-[#04A7D6]/0 group-hover:border-[#04A7D6] scale-75 group-hover:scale-110 transition-all duration-500"></span>
    </button>

    <!-- Full screen search mobile-first -->
    <Teleport to="body">
      <div v-if="isOpen" class="fixed inset-0 z-[9999] bg-black/70 flex items-start justify-center pt-32 px-6" @click="close">
        <div @click.stop class="w-full max-w-3xl">
          <div class="bg-white rounded-3xl shadow-2xl ring-1 ring-black/10 overflow-hidden">
            <div class="flex items-center gap-6 px-8 py-7 bg-gradient-to-br from-[#04A7D6]/5 via-transparent to-transparent">
              <div class="w-16 h-16 bg-[#04A7D6] rounded-2xl flex items-center justify-center shadow-xl">
                <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                id="mobile-search-input"
                v-model="query"
                type="text"
                placeholder="Rechercher dans Le Confident..."
                class="flex-1 text-2xl lg:text-3xl font-light outline-none bg-transparent placeholder:text-gray-400"
                @keydown.enter="submit"
                @keydown.esc="close"
              />
              <button @click="close" class="p-3 hover:bg-gray-100 rounded-xl transition">
                <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div v-if="query.length > 1" class="px-8 py-6 bg-[#F2F2F2] text-center">
              <p class="text-gray-700">
                Appuyez sur <kbd class="mx-2 px-4 py-2 bg-white rounded-xl border font-bold shadow">Enter</kbd>
                pour voir les résultats pour <span class="font-black text-[#003B5C]">« {{ query }} »</span>
              </p>
            </div>
          </div>
          <p class="text-center mt-8 text-white/80 text-sm">Échap pour fermer</p>
        </div>
      </div>
    </Teleport>
  </div>
</template>