import { RouteRecordRaw } from 'vue-router';
import { useClientBase } from 'src/hooks/useClientBase';
const routes: RouteRecordRaw[] = [
  {
    name: 'index',
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    name: 'login',
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
  },
  {
    name: 'clientBase',
    path: '/client-base',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PageWithTable.vue'),
        props: { worker: useClientBase },
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
