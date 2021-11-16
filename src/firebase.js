import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDKUBPRQd5U5uWvM_v0MtKoTB45CPNJG8",

  authDomain: "computer-preps.firebaseapp.com",

  projectId: "computer-preps",

  storageBucket: "computer-preps.appspot.com",

  messagingSenderId: "675943935912",

  appId: "1:675943935912:web:964bcbc3920fe6af1a379d"

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const store = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider()


export default db
export { store, auth, provider }