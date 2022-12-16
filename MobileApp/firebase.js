// Import the functions you need from the SDKs you need

import * as firebase from 'firebase'

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig ={
  apiKey: "AIzaSyA1Avy8dyn7c_vN-gf8MOd9FNOqX-K2J8w",
  authDomain: "react-auth-e2d95.firebaseapp.com",
  projectId: "react-auth-e2d95",
  storageBucket: "react-auth-e2d95.appspot.com",
  messagingSenderId: "695560862013",
  appId: "1:695560862013:web:190b3eda92624692eaed54",
  measurementId: "G-F3DPXCGWN9"
};

// Initialize Firebase // Original
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)
// export const auth = getAuth(app)

// Initialize Firebase // Por
let app
if(firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app()
}

const auth = firebase.auth()

export { auth }

export default app