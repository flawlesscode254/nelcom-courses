import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCLiCd-rj-BJq1kfE5Pye2mN4LATAQntuM',
  authDomain: 'nelcom-courses.firebaseapp.com',
  projectId: 'nelcom-courses',
  storageBucket: 'nelcom-courses.appspot.com',
  messagingSenderId: '70851160017',
  appId: '1:70851160017:web:d2361b1e7b757a768b22f0'
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();
const store = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider()


export default db
export { store, auth, provider }