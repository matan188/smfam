import firebase from 'firebase/app';
import 'firebase/auth';

const auth = {
  registerUserEmailPassword: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },

  onUserLoginChange: callback => {
    firebase.auth().onAuthStateChanged(function(user) {
      callback(user);
    });
  },

  checkUserLogin: () => {
    return new Promise(resolve => {
      firebase.auth().onAuthStateChanged(function(user) {
        resolve(user);
      });
    });
  },

  signUserOut: () => {
    return firebase
      .auth()
      .signOut()
      .catch(err => {
        console.error('Signout failed', err);
      });
  },

  signUserIn: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
};

export default auth;
