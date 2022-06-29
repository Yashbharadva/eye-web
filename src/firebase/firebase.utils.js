// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase/compat/app";

import 'firebase/compat/auth';

import 'firebase/compat/firestore';

import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4wKIXfqHZ7OGb2w7a8GuCLdBVSwc11H4",
  authDomain: "eye-db.firebaseapp.com",
  projectId: "eye-db",
  storageBucket: "eye-db.appspot.com",
  messagingSenderId: "664411119894",
  appId: "1:664411119894:web:77f1f198e4c6bfac533037"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Firebase = firebase.initializeApp(firebaseConfig.firebase) 

export const auth = firebase.auth();

export const db = getFirestore(app);

export default Firebase;