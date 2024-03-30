// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "smartupdaily.firebaseapp.com",
    projectId: "smartupdaily",
    storageBucket: "smartupdaily.appspot.com",
    messagingSenderId: "973065878578",
    appId: "1:973065878578:web:6663e0cf219aa07ec4902b",
    measurementId: "G-GP36D12C6N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Remove the unused variable assignment
getAnalytics(app);

