import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCot5s964tj4RBafWmqzzHRwjqYWBuQ7xQ",
  authDomain: "nelcom-88e0c.firebaseapp.com",
  projectId: "nelcom-88e0c",
  storageBucket: "nelcom-88e0c.appspot.com",
  messagingSenderId: "87810789028",
  appId: "1:87810789028:web:ba57a15409591f3582a031"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const store = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider()


export default db
export { store, auth, provider }