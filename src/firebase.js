import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAD8T-i_0ho1moXDntXxqtWmhHSHDDYKvs",
  authDomain: "clone-6b267.firebaseapp.com",
  databaseURL: "https://clone-6b267.firebaseio.com",
  projectId: "clone-6b267",
  storageBucket: "clone-6b267.appspot.com",
  messagingSenderId: "937956978268",
  appId: "1:937956978268:web:96e168a59cd1fe81f0c099",
  measurementId: "G-G20Y62QCFP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
