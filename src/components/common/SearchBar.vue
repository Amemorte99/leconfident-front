<!-- src/components/common/SearchBar.vue -->
<script setup lang="ts">
import { ref, nextTick } from 'vue'

const isOpen = ref(false)
const query = ref('')

const open = async () => {
  isOpen.value = true
  await nextTick()
  document.getElementById('search-input')?.focus()
}

const close = () => {
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
  <div>
    <!-- BOUTON LOUPE ÉLÉGANT -->
    <button
      @click="open"
      class="group relative p-3 rounded-full hover:bg-[#04A7D6]/10 transition-all duration-300"
      aria-label="Rechercher"
    >
      <svg class="w-6 h-6 text-[#003B5C] group-hover:text-[#04A7D6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <!-- Cercle animé au hover -->
      <span class="absolute inset-0 rounded-full border-2 border-[#04A7D6] scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></span>
    </button>

    <!-- MODALE RECHERCHE ULTRA PRO -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[9999] flex items-start justify-center pt-24 px-4 animate-in fade-in duration-300"
        @click="close"
      >
        <div
          @click.stop
          class="w-full max-w-4xl mx-auto"
        >
          <!-- Carte principale avec ombre douce et bordure subtile -->
          <div class="bg-white rounded-3xl shadow-2xl ring-1 ring-black/5 overflow-hidden">
            <div class="flex items-center gap-5 px-8 py-6 bg-gradient-to-r from-[#04A7D6]/5 to-transparent">
              <!-- Loupe stylée -->
              <div class="flex-shrink-0">
                <div class="w-14 h-14 rounded-2xl bg-[#04A7D6] flex items-center justify-center shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <!-- Input premium -->
              <input
                id="search-input"
                v-model="query"
                type="text"
                placeholder="Rechercher un article, une enquête, un sujet..."
                class="flex-1 text-2xl font-light outline-none bg-transparent placeholder:text-gray-400"
                @keydown.enter="submit"
                @keydown.esc="close"
              />

              <!-- Bouton fermer -->
              <button
                @click="close"
                class="p-3 rounded-xl hover:bg-gray-100 transition"
              >
                <svg class="w-7 h-7 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Suggestion en bas -->
            <div v-if="query.length >= 2" class="px-8 py-5 bg-[#F2F2F2] border-t border-gray-100">
              <p class="text-center text-gray-600">
                Appuyez sur <kbd class="mx-2 px-3 py-1.5 bg-white rounded-lg border shadow-sm font-medium">Entrée</kbd>
                pour afficher les résultats pour
                <span class="ml-2 font-semibold text-[#003B5C]">« {{ query }} »</span>
              </p>
            </div>
          </div>

          <!-- Texte d'aide subtil -->
          <p class="text-center mt-6 text-sm text-gray-500">Échap pour fermer</p>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
/* Animation d'apparition fluide */
.animate-in {
  animation: fadeIn 0.4s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>