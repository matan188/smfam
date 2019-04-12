<template>
  <div>
    <v-container>
      <FilterCourses />
    </v-container>
  </div>
</template>
<script>
import FilterCourses from '@/components/FilterCourses';
export default {
  name: 'Courses',

  components: {
    FilterCourses
  }
};
</script>
