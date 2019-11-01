import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAmidXkjbfVZBDgzfLDizpOxo9PX6VNB_g",
  authDomain: "assignment3-song-review.firebaseapp.com",
  databaseURL: "https://assignment3-song-review.firebaseio.com",
  projectId: "assignment3-song-review",
  storageBucket: "assignment3-song-review.appspot.com",
  messagingSenderId: "740670327269",
  appId: "1:740670327269:web:71fd8d3714f55c4eb7870c",
  measurementId: "G-ZP1CRY2NGY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebase;
