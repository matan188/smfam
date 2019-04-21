export default {
  isLoggedIn: state => state.isLoggedIn,

  allCourses: state => {
    const courses = state.courses;
    return courses;
  },

  isUserLoaded: state => state.isUserLoaded
};
