<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex lg3 mr-2>
          <v-combobox v-model="category" :items="categories"> </v-combobox>
        </v-flex>
        <v-flex lg3>
          <v-combobox v-model="category" :items="categories"> </v-combobox>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'Courses',

  data() {
    return {
      category: 'All',
      categories: ['All', 'Calisthenics', 'Yoga']
    };
  }
};
</script>
