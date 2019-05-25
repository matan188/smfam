<template>
  <div class="lesson">
    <LessonsNav />
  </div>
</template>
<script>
import LessonsNav from '@/components/LessonsNav';
export default {
  name: 'lesson',
  components: {
    LessonsNav
  },

  data() {
    return {
      id: this.$route.params.courseId
    };
  }
};
</script>
<style scoped>
.lesson {
  height: 100%;
}
</style>
