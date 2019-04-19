<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase" @click="navigateHome">
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
      <v-btn @click="logoutUser" round class="deep-purple--text">
        Log Out
      </v-btn>
    </template>
    <template v-else>
      <v-btn round class="deep-purple--text mr-2">
        Login
      </v-btn>
      <v-btn to="/signup" round color="deep-purple" class="white--text">
        Sign Up
      </v-btn>
    </template>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Toolbar',

  computed: {
    ...mapGetters(['isLoggedIn'])
  },

  methods: {
    ...mapActions(['logoutUser', 'navigateTo']),

    navigateHome() {
      this.navigateTo({ path: '/' });
    }
  }
};
</script>

<style lang="scss" scoped>
.headline {
  cursor: pointer;
}
</style>
