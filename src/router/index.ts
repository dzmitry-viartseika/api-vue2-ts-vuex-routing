import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/posts',
    name: 'posts',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/',
    name: 'login',
    component: () => import('@/pages/Login.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
