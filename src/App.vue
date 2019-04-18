<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Saturno</span>
        <span class="font-weight-light">MOVEMENT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/" flat>
          Home
        </v-btn>
        <v-btn to="/myaccount" flat>
          My Account
        </v-btn>
      </v-toolbar-items>
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
import { mapActions } from 'vuex';
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
  }
};
</script>
