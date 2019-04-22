import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

class DB {
  async getAllCourses() {
    const query = await firestore.collection('courses').get();
    console.log('docs', query.docs);
    const courses = query.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });
    console.log('courses', courses);
    return courses;
  }
}

export default new DB();
