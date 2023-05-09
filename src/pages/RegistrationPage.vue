<script>
import authService from '../services/authService';
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.username || !this.email || !this.password)
        return alert('Please specify all fields...');

      try {
        const accessToken = await authService.registration(
          this.username,
          this.email,
          this.password
        );
        window.localStorage.setItem('token', accessToken);
        window.location.href = '/';
        alert('Successfully registration!');
      } catch (error) {
        console.error(error);
        alert('Something going wrong...');
      }
    },
  },
};
</script>
<template>
  <div class="container">
    <form class="form" @submit.prevent="handleSubmit">
      <div class="form__field">
        <label for="username">Enter your username:</label>
        <input v-model="username" type="text" id="username" />
      </div>
      <div class="form__field">
        <label for="email">Enter your email:</label>
        <input v-model="email" type="email" id="email" />
      </div>
      <div class="form__field">
        <label for="password">Enter your password:</label>
        <input v-model="password" type="password" id="password" />
      </div>
      <button type="submit">Registration</button>
    </form>
  </div>
</template>
