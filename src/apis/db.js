import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

class DB {
  async getAllCourses() {
    const query = await firestore.collection('courses').get();
    console.log('docs', query.docs);
    console.log('values', query.docs.values());
    const courses = query.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });
    console.log('courses', courses);
    return courses;
  }

  async getCatalog() {
    const read = await firestore
      .collection('catalog')
      .doc('catalog')
      .get();
    const catalog = read.data();
    const courses = Object.values(catalog);
    console.log('catalog', courses);

    return courses;
  }
}

export default new DB();
