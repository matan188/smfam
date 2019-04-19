import router from '@/router';
import { auth } from '@/apis';

console.log('Actions file');

export default {
  checkUserState: ({ commit }) => {
    auth.onUserLoginChange(user => {
      console.log('onuserLoginChange', user);
      commit('SET_USER_LOGGED_IN', !!user);
      commit('SET_USER_LOADED');
    });
    const user = auth.checkIsUserLoggedIn();
    commit('SET_USER_LOGGED_IN', !!user);
    return user;
  },

  signUpUserEmailPassword: ({ state }, { email, password }) => {
    return auth
      .signUpUserEmailPassword(email, password)
      .then(res => {
        state.isLoggedIn = true;
        console.log('signed up user', res);
      })
      .catch(err => {
        console.log(err);
        debugger;
        throw err;
      });
  },

  signupUser: ({ dispatch }, { email, password }) => {
    dispatch('signUpUserEmailPassword', { email, password }).then(() => {
      router.push({ name: 'courses' });
    });
  },

  logoutUser: () => {
    return auth.signUserOut();
  },

  navigateTo: (_, { path }) => {
    router.push({ path });
  }
};
