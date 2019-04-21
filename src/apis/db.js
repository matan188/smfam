import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

class DB {
  getAllCourses() {
    return firestore
      .collection('courses')
      .get()
      .then(query => {
        console.log('docs', query.docs);

        const courses = query.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });
        console.log('courses', courses);
        return courses;
      });
  }
}

export default new DB();
