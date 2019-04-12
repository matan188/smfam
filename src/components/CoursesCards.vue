<template>
  <v-container class="grid-list-xl px-0" fluid>
    <v-layout row wrap>
      <v-flex lg4 v-for="n in 9" :key="n">
        <v-card>
          <v-img
            :src="require('@/assets/calisthenicsinitiation.jpg')"
            height="200px"
          ></v-img>
          <v-card-title primary-title>
            <div class="headline">Calisthenics Initiation Phase</div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'CoursesCards'
};
</script>
