import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import AccountView from './views/AccountView.vue';
import UserView from './views/UserView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/account', component: AccountView },
  { path: '/user', component: UserView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
