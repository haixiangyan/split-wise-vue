import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from '@/views/Money.vue'
import Label from '@/views/Label.vue'
import Statistics from '@/views/Statistics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    name: 'Money',
    component: Money
  },
  {
    path: '/label',
    name: 'Label',
    component: Label
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  }
]

const router = new VueRouter({
  routes
})

export default router
