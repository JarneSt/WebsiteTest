import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BuildingsView from "@/views/BuildingsView";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: BuildingsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
