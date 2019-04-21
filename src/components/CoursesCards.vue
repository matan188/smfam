<template>
  <v-container class="grid-list-xl px-0" fluid>
    <v-layout row wrap>
      <v-flex lg4 v-for="course in allCourses" :key="course.id">
        <v-card hover>
          <v-img :src="course.img_location" height="200px"></v-img>
          <v-card-title primary-title>
            <div class="headline">{{ course.name }}</div>
            <v-progress-linear
              v-model="course.progress"
              color="deep-purple"
            ></v-progress-linear>
            <v-layout row align-center>
              <v-flex md1 class="mr-2">
                <v-avatar size="30">
                  <img :src="course.author_img_location" alt="Gabo Saturno" />
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
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'CoursesCards',

  data() {
    return {};
  },

  created() {
    this.getAllCourses();
  },

  methods: {
    ...mapActions(['getAllCourses'])
  },

  computed: {
    ...mapGetters(['allCourses'])
  }
};
</script>
