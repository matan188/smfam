import { auth } from '@/apis';

console.log('Actions file', auth);

export default {
  checkUserState: ({ commit }) => {
    const user = auth.checkIsUserLoggedIn();

    commit('SET_USER_LOGGED_IN', !!user);
    return user;
  },

  signUpUserEmailPassword: (_, { email, password }) => {
    return auth
      .signUpUserEmailPassword(email, password)
      .then(res => {
        console.log(res);
        debugger;
      })
      .catch(e => {
        console.log(e);
        debugger;
      });
  }
};
