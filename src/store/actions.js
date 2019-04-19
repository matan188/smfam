import router from '@/router';
import { auth } from '@/apis';

console.log('Actions file');

export default {
  checkUserState: ({ commit }) => {
    auth.onUserLoginChange(user => {
      console.log('onuserLoginChange', user);
      commit('SET_USER_LOGGED_IN', !!user);
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
        console.log(res);
        debugger;
      })
      .catch(err => {
        console.log(err);
        debugger;
        throw err;
      });
  },

  signupUser: ({ dispatch }, { email, password }) => {
    dispatch('signUpUserEmailPassword', { email, password }).then(() => {
      debugger;
      router.push({ path: 'home' });
    });
  },

  logoutUser: () => {
    return auth.signUserOut();
  }
};
