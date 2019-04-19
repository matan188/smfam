<template>
  <v-app>
    <template v-if="loading">
      <v-container fill-height>
        <v-layout row align-center justify-center>
          <v-progress-circular
            :size="70"
            :width="7"
            color="deep-purple"
            indeterminate
          ></v-progress-circular>
        </v-layout>
      </v-container>
    </template>
    <template v-else>
      <Toolbar />
      <v-content>
        <router-view />
      </v-content>
    </template>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import Toolbar from '@/components/Toolbar';
export default {
  name: 'App',
  components: {
    Toolbar
  },

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
