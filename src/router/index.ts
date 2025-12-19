
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RubriqueView from '@/views/RubriqueView.vue'
import ArticleDetailView from '@/views/ArticleDetailView.vue'
import DossiersView from '@/views/DossiersView.vue'  // Importe ton composant

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/rubrique/:slug', name: 'rubrique', component: RubriqueView },
    { path: '/article/:slug', name: 'article', component: ArticleDetailView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
    {
      path: '/dossiers',  
      name: 'Dossiers',
      component: DossiersView,
    },
    {
      path: '/dossier/:id',
      name: 'DossierDetail',
      component: () => import('@/views/DossierDetailView.vue'),  
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router