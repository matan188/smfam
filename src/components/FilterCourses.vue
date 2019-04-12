<template>
  <v-layout row>
    <v-flex lg2 mr-2>
      <v-combobox
        label="Category"
        v-model="category"
        :items="categories"
        multiple
        placeholder="All"
      >
      </v-combobox>
    </v-flex>
    <v-flex lg2>
      <v-combobox
        label="Author"
        v-model="author"
        :items="authors"
        multiple
        placeholder="All"
      >
      </v-combobox>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex lg4>
      <v-text-field
        solo
        placeholder="Find a course"
        prepend-inner-icon="search"
      />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'FilterCourses',

  data() {
    return {
      category: [],
      categories: ['Calisthenics', 'Yoga'],
      author: [],
      authors: ['Gabo Saturno', 'The SM Team']
    };
  }
};
</script>
