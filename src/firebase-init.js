// firebase-init.js
import { initializeApp } from "https://cdn.skypack.dev/firebase/app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://cdn.skypack.dev/firebase/firestore.js";

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
  const app = initializeApp(firebaseConfig);
  
  // Reference to Firestore database
  const db = getFirestore(app);
  
// Access Firestore collection and log products
const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
  console.log(`Document ID: ${doc.id}`);
  console.log(JSON.stringify(doc.data(), null, 2)); // Convert to JSON string with 2-space indentation
  console.log("-------------------------------------------");
});

//adding new product to 'products' collection
/*try {
  const docRef = await addDoc(collection(db, "products"), {
    name: "new product",
    last: "Lovelace",
    size: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
} */

