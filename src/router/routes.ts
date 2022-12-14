import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/wizard', component: () => import('pages/WizardPage.vue') },
      {
        path: '/Alternatives',
        component: () => import('src/pages/AlternativePage.vue'),
      },
      { path: '/features', component: () => import('pages/FeaturesPage.vue') },
      {
        path: '/decisionmatrix',
        component: () => import('pages/DecisionMatrixPage.vue'),
      },
      { path: '/results', component: () => import('pages/ResultsPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
