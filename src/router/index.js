import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Users from "../views/Users.vue"
import Calculatrice from "../views/Calculatrice.vue"
import AudioPlay from "../views/AudioPlay.vue"
import ChartExemple from "../views/ChartExemple.vue"
import ExempleJean from "../views/ExempleJean.vue"
import UserDjango from "../views/UserDjango.vue"
import Modal from "../views/Modal.vue"
import EgeraTech from "../views/EgeraTech.vue"
import Vente from "../views/Vente.vue"
import SplitInvoince from "../views/SplitInvoince.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/split-invoices',
      name: 'split-invoices',
      component : SplitInvoince
    }, 
    {
      path: '/ventes',
      name: 'ventes',
      component : Vente
    }, 
    {
      path: '/',
      name: 'home',
      component : Home
    }, 
    {
      path: '/egera-tech',
      name: 'egera-tech',
      component : EgeraTech
    }, 
   
    {
      path: '/users/:teamId',
      name: 'users',
      component : Users
    }, 
    {
      path: '/calculatrice',
      name: 'calculatrice',
      component : Calculatrice
    }, 
    {
      path: '/audio-play',
      name: 'audio-play',
      component : AudioPlay
    }, 
    {
      path: '/chart-js',
      name: 'chart-js',
      component : ChartExemple
    }, 
    
    {
      path: '/users-list',
      name: 'users-list',
      component : ExempleJean
    }, 
    {
      path: '/user-django',
      name: 'userd-jango',
      component : UserDjango
    }, 
    {
      path: '/exemple-modal',
      name: 'exemple-modal',
      component : Modal
    }, 
    
  ]
})

export default router
