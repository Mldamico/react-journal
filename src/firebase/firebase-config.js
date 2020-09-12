import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERRID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};
// var firebaseConfigTesting = {
//   apiKey: 'AIzaSyALgQ1MLvvrzmoc9BBIK2gkk2sgyrLVH7Q',
//   authDomain: 'react-hook-prueba.firebaseapp.com',
//   databaseURL: 'https://react-hook-prueba.firebaseio.com',
//   projectId: 'react-hook-prueba',
//   storageBucket: 'react-hook-prueba.appspot.com',
//   messagingSenderId: '515381542034',
//   appId: '1:515381542034:web:49778bc26d44a9e13afa4b',
//   measurementId: 'G-GX816V67DQ',
// };

// if (process.env.NODE_ENV === 'test') {
//   firebase.initializeApp(firebaseConfigTesting);
// } else {
//   firebase.initializeApp(firebaseConfig);
// }

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
