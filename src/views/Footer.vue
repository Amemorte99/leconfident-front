<template>
    <footer class="bg-noir text-white py-12">
      <div class="container grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src="@/assets/images/logo-white.svg" alt="Le Confident" class="h-16 mb-6">
          <p class="text-sm text-gray-400">Informer juste, informer vrai et autrement.</p>
        </div>
  
        <div>
          <h4 class="font-bold text-lg mb-4">Rubriques</h4>
          <ul class="space-y-2 text-sm text-gray-400">…</ul>
        </div>
  
        <div>
          <h4 class="font-bold text-lg mb-4">Newsletter</h4>
          <NewsletterForm />
        </div>
  
        <div>
          <h4 class="font-bold text-lg mb-4">Suivez-nous</h4>
          <div class="flex space-x-4">… réseaux sociaux …</div>
        </div>
      </div>
  
      <div class="container mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        © 2025 Le Confident - Tous droits réservés | Mentions légales
      </div>
    </footer>
  </template>