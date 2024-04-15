// firebase-init.js

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBSKt1tz9oNcqzOwHB8dUaUe_g234b2blY",
    authDomain: "kfc-project-51e7f.firebaseapp.com",
    projectId: "kfc-project-51e7f",
    storageBucket: "kfc-project-51e7f.appspot.com",
    messagingSenderId: "1002831735035",
    appId: "1:1002831735035:web:50dcf00fb5a7a0986aa85e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to Firestore database
  const db = firebase.firestore();