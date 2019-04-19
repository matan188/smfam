export default {
  SET_USER_LOGGED_IN: (state, isLoggedIn) => (state.isLoggedIn = isLoggedIn),

  SET_USER_LOADED: state => (state.isUserLoaded = true)
};
