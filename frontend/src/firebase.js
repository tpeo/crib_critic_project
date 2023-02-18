import { initializeApp } from "firebase/app";
import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDokR3128ArA89w28BeI1BeT70sYHUoziI",
  authDomain: "cribcritic.firebaseapp.com",
  projectId: "cribcritic",
  storageBucket: "cribcritic.appspot.com",
  messagingSenderId: "1012120244104",
  appId: "1:1012120244104:web:c0ab801b0e39663438743d",
  measurementId: "G-WPEMJ5V0FN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createUser = (email, password) => {
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in : get token
    const user = userCredential.user;
    console.log(user);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    });
};

export const loginUser = (email, password) => {
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    console.log(user.accessToken);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    });
};

localStorage.setItem("userAccessToken", user.accessToken)