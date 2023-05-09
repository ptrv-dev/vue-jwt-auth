import { $api } from '../axios';

class AuthService {
  async login(email, password) {
    const { data } = await $api.post('/auth/login', { email, password });
    return {
      accessToken: data.accessToken,
    };
  }

  async registration(username, email, password) {
    const { data } = await $api.post('/auth/registration', {
      username,
      email,
      password,
    });
    return { accessToken: data.accessToken };
  }

  async logout() {
    await $api.get('/auth/logout');
    return true;
  }

  async getMe() {
    const { data } = await $api.get('/auth/get');
    return data;
  }
}

export default new AuthService();
