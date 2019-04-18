import './firebase';
import firebase from 'firebase/app';
import 'firebase/auth';

function checkIsUserLoggedIn() {
  return firebase.auth().currentUser;
}

export default {
  checkIsUserLoggedIn
};
