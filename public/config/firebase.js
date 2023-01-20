import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBNQFBzSLrZwnC79v9oMjGgMOTXRiLBys",
    authDomain: "aplikasi-penjualan-12621.firebaseapp.com",
    projectId: "aplikasi-penjualan-12621",
    storageBucket: "aplikasi-penjualan-12621.appspot.com",
    messagingSenderId: "19066239852",
    appId: "1:19066239852:web:5f68f3648caac7087f9149"
  };
  // Initialize Firebase
const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuthentication = init.auth();