import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'index',
        path: 'main',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        name: 'clientBase',
        path: '/client-base',
        component: () => import('pages/ClientsBase.vue'),
      },
    ],
  },
  {
    name: 'login',
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
