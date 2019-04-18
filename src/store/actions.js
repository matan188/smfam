import auth from '@/apis/auth';

console.log('Actions file');

export default {
  checkUserState: ({ commit }) => {
    const user = auth.checkIsUserLoggedIn();

    commit('SET_USER_LOGGED_IN', !!user);
    return user;
  }
};
