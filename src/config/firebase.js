import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBBNQFBzSLrZwnC79v9oMjGgMOTXRiLBys",
    authDomain: "aplikasi-penjualan-12621.firebaseapp.com",
    projectId: "aplikasi-penjualan-12621",
    storageBucket: "aplikasi-penjualan-12621.appspot.com",
    messagingSenderId: "1044202598598",
    appId: "1:1044202598598:web:a73f664a422e395062a7c7",
    measurementId: "G-PHV3NFN6J8"
  };
  
  const init = firebase.initializeApp(firebaseConfig);
  export const firebaseAuthentication = init.auth();