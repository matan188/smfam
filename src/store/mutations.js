export default {
  SET_USER_LOGGED_IN: (state, isLoggedIn) => (state.isLoggedIn = isLoggedIn),

  SET_USER_LOADED: state => (state.isUserLoaded = true),

  SET_USER_DETAILS: (state, { email, displayName }) => {
    state.user.email = email;
    state.user.displayName = displayName;
  }
};
