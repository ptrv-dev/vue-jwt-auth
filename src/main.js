import { createApp } from 'vue/dist/vue.esm-bundler';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import './style.css';

import { IndexPage, LoginPage, RegistrationPage } from './pages';

const routes = [
  { path: '/', component: IndexPage },
  { path: '/login', component: LoginPage },
  { path: '/registration', component: RegistrationPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
