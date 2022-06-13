import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
  },
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
        name: 'clients',
        path: '/clients',
        component: () => import('src/pages/ClientsPage.vue'),
      },
      {
        name: 'organization',
        path: '/organization',
        component: () => import('src/pages/OrganizationPage.vue'),
      },
      {
        name: 'branches',
        path: '/branches',
        component: () => import('src/pages/BranchesPage.vue'),
      },
      {
        name: 'employees',
        path: '/employees',
        component: () => import('src/pages/EmployeesPage.vue'),
      },
      {
        name: 'positions',
        path: '/positions',
        component: () => import('src/pages/PositionsPage.vue'),
      },
    ],
  },


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
