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
var firebaseConfigTesting = {
  apiKey: 'AIzaSyALgQ1MLvvrzmoc9BBIK2gkk2sgyrLVH7Q',
  authDomain: 'react-hook-prueba.firebaseapp.com',
  databaseURL: 'https://react-hook-prueba.firebaseio.com',
  projectId: 'react-hook-prueba',
  storageBucket: 'react-hook-prueba.appspot.com',
  messagingSenderId: '515381542034',
  appId: '1:515381542034:web:49778bc26d44a9e13afa4b',
  measurementId: 'G-GX816V67DQ',
};

if (process.env.NODE_ENV === 'test') {
  firebase.initializeApp(firebaseConfigTesting);
} else {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
