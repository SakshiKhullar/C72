import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyD7D7a9ATRfGyLNaIyoOLXM9S3TOclYQBY",
  authDomain: "wily-6c7c1.firebaseapp.com",
  databaseURL :"https://wily-6c7c1.firebaseio.com",
  projectId: "wily-6c7c1",
  storageBucket: "wily-6c7c1.appspot.com",
  messagingSenderId: "300817973436",
  appId: "1:300817973436:web:a6f36061789a1941b010b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.default.initializeApp(firebaseConfig); 
//if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
export default firebase.firestore()

   //databaseURL :"https://wily-6c7c1.firebaseio.com",