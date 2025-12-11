// src/composables/useDarkMode.js
import { ref, onMounted } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)

  onMounted(() => {
    // Récupère le thème sauvegardé
    isDark.value = localStorage.getItem('leconfident-theme') === 'dark'
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    }
  })

  const toggle = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('leconfident-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('leconfident-theme', 'light')
    }
  }

  return { isDark, toggle }
}