// Initialize Firebase (for Firebase v8 and earlier)
const firebaseConfig = {
  apiKey: "AIzaSyCXGA4vU-uCtORl5Kt_WmSL3Nnc_D8c-HY",
  authDomain: "himm-bb862.firebaseapp.com",
  projectId: "himm-bb862",
  storageBucket: "himm-bb862.firebasestorage.app",
  messagingSenderId: "66636429285",
  appId: "1:66636429285:web:212e97f6d613517e98a10c",
  measurementId: "G-NLL9XPCEBT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = firebase.auth();
