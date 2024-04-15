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

// Function to fetch products from Firestore and render them on the webpage
function displayProducts() {
  const productsContainer = document.getElementById("products-container");

  // Clear existing products
  productsContainer.innerHTML = "";

  // Fetch products from Firestore
  
    querySnapshot.forEach((doc) => {
      const product = doc.data();

      // Create HTML elements for the product
      const productDiv = document.createElement("div");
      productDiv.classList.add("row", "py-5", "mb-5", "products-list");

      // Set default image URL
      const defaultImageUrl = "/img/default.png";

      productDiv.innerHTML = `
        <div class="col-sm-6 product-img">
        <img src="${product.ImageURL ? product.ImageURL : defaultImageUrl}" class="img-fluid w-300 rounded" alt="${product.Name}" />
        </div>
        <div class="col-sm-6">
           <h3><strong>${product.Name}</strong></h3>
           <ul>
              <li>${product.Shape}</li>
              <li>${product.Description}</li>
              <li>${product.Blasting}</li>
              <li>${product.Availability}</li>
              ${product.Specifications ? `<li>${product.Specifications}</li>` : ''}
           </ul>     
          <h3><strong>Sizes</strong></h3>
          <ul>
          ${product.Sizes && Array.isArray(product.Sizes) ? product.Sizes.map(size => `<li>${size}</li>`).join("") : "Standart sizes available"}
          </ul>
           
        </div>
      `;

      // Append the product HTML to the container
      productsContainer.appendChild(productDiv);
    });
  }


// Call the displayProducts function to fetch and render products 
displayProducts(querySnapshot);




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

