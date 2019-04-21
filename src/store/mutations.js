import Vue from 'vue';
export default {
  SET_USER_LOGGED_IN: (state, isLoggedIn) => (state.isLoggedIn = isLoggedIn),

  SET_USER_LOADED: state => (state.isUserLoaded = true),

  SET_COURSES: (state, courses) => Vue.set(state, 'courses', courses),

  SET_USER_DETAILS: (state, { email, displayName }) => {
    state.user.email = email;
    state.user.displayName = displayName;
  }
};
