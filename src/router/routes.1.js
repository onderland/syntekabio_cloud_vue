import { aboutRoutes } from './routes';

export const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/etc/EtcNotFound.vue')
  },
  {
    path: '/',
    component: () => import('@/layouts/about/AboutLayout.vue'),
    children: aboutRoutes
  },
  {
    path: '/synteka',
    component: () => import('@/layouts/about/AboutLayout_new.vue')
  }
];
