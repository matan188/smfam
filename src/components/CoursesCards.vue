<template>
  <v-container class="grid-list-xl px-0" fluid>
    <v-layout row wrap>
      <v-flex lg4 v-for="n in 9" :key="n">
        <v-card hover>
          <v-img
            :src="require('@/assets/calisthenics-initiation.jpg')"
            height="200px"
          ></v-img>
          <v-card-title primary-title>
            <div class="headline">Calisthenics Initiation Phase</div>
            <v-progress-linear
              v-model="progress"
              color="deep-purple"
            ></v-progress-linear>
            <v-layout row align-center>
              <v-flex md1 class="mr-2">
                <v-avatar size="30">
                  <img
                    :src="require('@/assets/gabo-profile.jpg')"
                    alt="Gabo Saturno"
                  />
                </v-avatar>
              </v-flex>
              <v-flex md5>
                Gabo Saturno
              </v-flex>
              <v-flex md2 offset-md5>
                <div>30%</div>
              </v-flex>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'CoursesCards',

  data() {
    return {
      progress: 30
    };
  }
};
</script>
