import Vue from 'vue'
import VueRouter from 'vue-router'
import Tarefas_views from '../views/Tarefas_views.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas_views
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/Sobre_views.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
