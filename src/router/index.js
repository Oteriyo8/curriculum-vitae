import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/curriculum',
      name: 'Curriculum',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CurriculumView.vue')
    },
    {
      path: "/grid",
      name: "Grid",
  
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/Grid.vue"),
    },
    // {
    //   path: "/form",
    //   name: "Form",
  
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/Form.vue"),
    // },
    {
      path: "/cards",
      name: "Cards",
  
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/Cards.vue"),
    },
    {
      path: "/sign-in",
      name: "singin",
  
      component: () =>
        import("../views/AccesoView.vue"),
    }
  ]
})

export default router
