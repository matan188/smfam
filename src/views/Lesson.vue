<template>
  <div>
    <h1>Lesson</h1>
    <div>{{ id }}</div>
  </div>
</template>
<script>
export default {
  name: 'lesson',

  data() {
    return {
      id: this.$route.params.courseId
    };
  }
};
</script>
