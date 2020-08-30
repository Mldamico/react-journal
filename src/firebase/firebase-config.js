import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCMQ_PPJ0iy3an0wTBaWyWXaHComLoQtk8',
  authDomain: 'journal-app-10038.firebaseapp.com',
  databaseURL: 'https://journal-app-10038.firebaseio.com',
  projectId: 'journal-app-10038',
  storageBucket: 'journal-app-10038.appspot.com',
  messagingSenderId: '1036337954483',
  appId: '1:1036337954483:web:9b1d9612c354554a5ebac6',
  measurementId: 'G-TYQQND59BD',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
