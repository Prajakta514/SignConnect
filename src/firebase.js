// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/storage';
// import 'firebase/compat/firestore';

  
//   const firebaseConfig = {
	// apiKey: "AIzaSyA0nBQ2ldXuWYxvQUHB-YkKfWY9g5US1zY",
	// authDomain: "deaf-community-45748.firebaseapp.com",
	// projectId: "deaf-community-45748",
	// storageBucket: "deaf-community-45748.appspot.com",
	// messagingSenderId: "771007894911",
	// appId: "1:771007894911:web:85010813628570fba5b64a",

	// measurementId: "G-L2C73YLNFE"
//   };
  
// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

// // Get authentication instance
// const auth = firebase.auth();

// // Create a Google auth provider instance
// const provider = new firebase.auth.GoogleAuthProvider();

// // Get Firebase storage instance
// const storage = firebase.storage();

// // Export Firebase services and Firestore database instance
// export { auth, provider, storage, db };

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0nBQ2ldXuWYxvQUHB-YkKfWY9g5US1zY",
	authDomain: "deaf-community-45748.firebaseapp.com",
	projectId: "deaf-community-45748",
	storageBucket: "deaf-community-45748.appspot.com",
	messagingSenderId: "771007894911",
	appId: "1:771007894911:web:85010813628570fba5b64a",

	measurementId: "G-L2C73YLNFE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, db };
