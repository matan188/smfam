import firebase from 'firebase/app';
import 'firebase/auth';

console.log('Actions file');

export default {
  checkUserState: ({ commit }) => {
    const user = firebase.auth().currentUser;
    commit('SET_USER_LOGGED_IN', !!user);
    return user;
  }
};
