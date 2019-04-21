import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

class DB {
  getAllCourses() {
    return firestore
      .collection('courses')
      .get()
      .then(query => {
        const courses = query.docs.map(doc => doc.data());
        console.log('courses', courses);
        return courses;
      });
  }
}

export default new DB();
