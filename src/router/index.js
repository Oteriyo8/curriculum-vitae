import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Inicio'
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'Acerca de '
      },
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
      path: "/sign-in",
      name: "singin",
      meta: {
        title: 'Acceso'
      },
  
      component: () =>
        import("../views/AccesoView.vue"),
    },
    {
      path: "/datospersonales",
      name: "DatosPersonales",
  
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/DatosPersonales.vue"),
    },
  ]
})

router.beforeEach((to,from,next) => {
  window.document.title = to.meta.title?to.meta.tittle: 'Currículum';
  next();
 });

export default router
