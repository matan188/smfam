<template>
  <div>
    <v-container>
      <v-layout row justify-center>
        <v-flex md6>
          <h2>Login</h2>
          <v-form>
            <v-text-field
              v-model="email"
              :counter="10"
              label="Email"
              required
            ></v-text-field>
            <v-text-field
              @keyup.enter="doLogin"
              v-model="password"
              :counter="10"
              label="Password"
              type="password"
              required
            ></v-text-field>
          </v-form>
        </v-flex>
      </v-layout>
      <v-layout row justify-center class="mt-3">
        <v-btn @click="doLogin">Login</v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: ''
    };
  },

  methods: {
    ...mapActions(['login']),

    doLogin() {
      this.login({ email: this.email, password: this.password });
    }
  }
};
</script>
