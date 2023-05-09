<script>
import authService from '../services/authService';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async formSubmit() {
      try {
        const { accessToken } = await authService.login(
          this.email,
          this.password
        );
        window.localStorage.setItem('token', accessToken);
        this.$router.push('/');
        alert('Login successfully!');
      } catch (error) {
        alert('Something going wrong...');
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <form class="form" @submit.prevent="formSubmit">
      <div class="form__field">
        <label for="email">Enter your email:</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div class="form__field">
        <label for="password">Enter your password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
