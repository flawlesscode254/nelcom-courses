import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWeUb95S8Dd8IvaCAHvsYTx-BQLe3hI-8",
  authDomain: "t-courses.firebaseapp.com",
  projectId: "t-courses",
  storageBucket: "t-courses.appspot.com",
  messagingSenderId: "67895789170",
  appId: "1:67895789170:web:5f0faa5bdc229e7d3ae4eb"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const store = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider()


export default db
export { store, auth, provider }