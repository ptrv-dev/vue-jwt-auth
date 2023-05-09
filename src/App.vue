<template>
  <header class="header">
    <div v-if="!userData" class="container">
      <RouterLink to="/login">Sign In</RouterLink>
      <RouterLink to="/registration">Sign Up</RouterLink>
    </div>
    <div v-else class="container">
      <button @click="handleLogout">Logout</button>
    </div>
  </header>
  <RouterView></RouterView>
</template>

<script>
import authService from './services/authService';

export default {
  mounted() {
    this.fetchMe();
  },
  data() {
    return {
      userData: null,
    };
  },
  methods: {
    async fetchMe() {
      this.userData = await authService.getMe();
    },
    async handleLogout() {
      await authService.logout();
      this.userData = null;
      window.localStorage.removeItem('token');
      alert('Logout successfully!');
    },
  },
};
</script>
