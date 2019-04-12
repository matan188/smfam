<template>
  <div>
    <v-container>
      <FilterCourses />
      <CoursesCards />
    </v-container>
  </div>
</template>
<script>
import FilterCourses from '@/components/FilterCourses';
import CoursesCards from '@/components/CoursesCards';

export default {
  name: 'Courses',

  components: {
    FilterCourses,
    CoursesCards
  }
};
</script>
