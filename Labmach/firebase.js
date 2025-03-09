// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnQp-P3ZFJklAdWlBT8Q00s6kmH6SGOi0",
  authDomain: "labmach-ca37d.firebaseapp.com",
  projectId: "labmach-ca37d",
  storageBucket: "labmach-ca37d.appspot.com",
  messagingSenderId: "190491728067",
  appId: "1:190491728067:web:53db9a8fad79a0d30c2a76"
};

// Initialize Firebase
let app;
if (firebase.apps.length == 0){
    app=firebase.initializeApp(firebaseConfig);
}
else{
    app=firebase.app();
}

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

export { auth, app };