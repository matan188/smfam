<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Saturno</span>
        <span class="font-weight-light">MOVEMENT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="isLoggedIn">
        <v-toolbar-items>
          <v-btn to="/" flat class="deep-purple--text">
            Home
          </v-btn>
          <v-btn to="/myaccount" flat class="deep-purple--text">
            My Account
          </v-btn>
        </v-toolbar-items>
        <v-btn round class="deep-purple--text">
          Log Out
        </v-btn>
      </template>
      <template v-else>
        <v-btn round class="deep-purple--text mr-2">
          Log In
        </v-btn>
        <v-btn round color="deep-purple" class="white--text">
          Sign Up
        </v-btn>
      </template>
    </v-toolbar>

    <v-content>
      <v-container v-if="loading" fill-height>
        <v-layout row align-center justify-center>
          <v-progress-circular
            :size="70"
            :width="7"
            color="deep-purple"
            indeterminate
          ></v-progress-circular>
        </v-layout>
      </v-container>
      <router-view v-else />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'App',
  components: {},
  data() {
    return {
      loading: true
    };
  },

  async created() {
    await this.checkUserState();

    this.loading = false;
  },

  methods: {
    ...mapActions(['checkUserState'])
  },

  computed: {
    ...mapGetters(['isLoggedIn'])
  }
};
</script>
