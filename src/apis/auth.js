import firebase from 'firebase/app';
import 'firebase/auth';

const auth = {
  checkIsUserLoggedIn: () => {
    return firebase.auth().currentUser;
  },

  signUpUserEmailPassword: (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(e => {
        console.error(e);
        debugger;
      });
  }
};

export default auth;
