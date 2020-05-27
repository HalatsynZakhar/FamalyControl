import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },

  {
    path: '/settings',
    name: 'Settings',

    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue'),
  },

  {
    path: '/signUp',
    name: 'Sign up',

    component: () => import(/* webpackChunkName: "about" */ '../components/Auth/SignUp.vue'),
  },

  {
    path: '/signIn',
    name: 'Sign in',

    component: () => import(/* webpackChunkName: "about" */ '../components/Auth/SignIn.vue'),
  },

  {
    path: '/child',
    name: 'Control',
    component: () => import(/* webpackChunkName: "about" */ '../views/Control.vue'),
  },

  {
    path: '/childs/:id',
    name: 'ChildDetail',
    meta: {
      requiresAuth: true,
    },
    component: () => import('../views/ChildDetail.vue')
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

