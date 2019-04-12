<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex lg3 mr-2>
          <v-combobox
            label="Category"
            v-model="category"
            :items="categories"
            multiple
            placeholder="All"
          >
          </v-combobox>
        </v-flex>
        <v-flex lg3>
          <v-combobox
            label="Author"
            v-model="author"
            :items="authors"
            multiple
            placeholder="All"
          >
          </v-combobox>
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
      category: [],
      categories: ['Calisthenics', 'Yoga'],
      author: [],
      authors: ['Gabo Saturno', 'The SM Team']
    };
  }
};
</script>
