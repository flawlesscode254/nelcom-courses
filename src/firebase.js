import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCLiCd-rj-BJq1kfE5Pye2mN4LATAQntuM',
  authDomain: 'nelcom-courses.firebaseapp.com',
  projectId: 'nelcom-courses',
  storageBucket: 'nelcom-courses.appspot.com',
  messagingSenderId: '70851160017',
  appId: '1:70851160017:web:d2361b1e7b757a768b22f0'
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db  = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const store = firebase.storage();


export { auth, provider, store }
export default db