import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/home.vue')
    },
    {
      path:'/:buildingId',
      name:'Building',
      component: () => import('../views/building.vue')

    },
    {
      path:'/:buildingId/:floorId',
      name:'Floor',
      component: () => import('../views/floor.vue')
    },
    {
      path:'/:buildingId/:floorId/:roomId',
      name:'Room',
      component: () => import('../views/room.vue')
    }
  ]
})

export default router
