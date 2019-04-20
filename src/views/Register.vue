<template>
  <div>
    <v-container>
      <v-layout row justify-center>
        <v-flex md6>
          <h2>Signup</h2>
          <v-form>
            <v-text-field
              v-model="email"
              :counter="10"
              label="Email"
              required
            ></v-text-field>
            <v-text-field
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
        <v-btn @click="submit">Signup</v-btn>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'Register',

  data() {
    return {
      email: '',
      password: ''
    };
  },

  methods: {
    ...mapActions(['registerUser']),

    submit() {
      this.registerUser({
        email: this.email,
        password: this.password
      })
        .then(res => {
          console.log('res', res);
        })
        .catch(err => {
          console.log('err', err);
        });
    }
  }
};
</script>
