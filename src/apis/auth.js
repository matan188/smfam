import firebase from 'firebase/app';
import 'firebase/auth';

const auth = {
  checkIsUserLoggedIn: () => {
    const user = firebase.auth().currentUser;
    console.log('is logged in ', user);

    return user;
  },

  signUpUserEmailPassword: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },

  onUserLoginChange: callback => {
    firebase.auth().onAuthStateChanged(function(user) {
      callback(user);
    });
  },

  signUserOut: () => {
    firebase
      .auth()
      .signOut()
      .catch(err => {
        console.error('Signout failed', err);
      });
  }
};

export default auth;
