// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
// 	apiKey: "AIzaSyDkogGy5vaQ2FvuQ_OApV2PmviJPGXL-pQ",
// 	authDomain: "commuto-f6710.firebaseapp.com",
// 	projectId: "commuto-f6710",
// 	storageBucket: "commuto-f6710.appspot.com",
// 	messagingSenderId: "831481260234",
// 	appId: "1:831481260234:web:de779d4304fe89b4c26c33",
// };

// // Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };

// firebase.utils.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
	apiKey: "AIzaSyDkogGy5vaQ2FvuQ_OApV2PmviJPGXL-pQ",
	authDomain: "commuto-f6710.firebaseapp.com",
	projectId: "commuto-f6710",
	storageBucket: "commuto-f6710.appspot.com",
	messagingSenderId: "831481260234",
	appId: "1:831481260234:web:de779d4304fe89b4c26c33",
};

const firebaseApp = firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
