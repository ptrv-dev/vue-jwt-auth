import { createApp } from 'vue/dist/vue.esm-bundler';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import './style.css';

import { IndexPage, LoginPage } from './pages';

const routes = [
  { path: '/', component: IndexPage },
  { path: '/login', component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
