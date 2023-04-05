import Firebase from "firebase/compat/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useRouter } from 'next/router';
import Link from 'next/link';

const FirebaseCredentials = {
    apiKey: "AIzaSyDM9K_vsyay8zgN2wptunnk6ZONwv1jIUo",
    authDomain: "adminsidechapstone.firebaseapp.com",
    databaseURL: "https://adminsidechapstone-default-rtdb.firebaseio.com",
    projectId: "adminsidechapstone",
    storageBucket: "adminsidechapstone.appspot.com",
    messagingSenderId: "143561836321",
    appId: "1:143561836321:web:5ee85c54cdfc9a3a9be060",
    measurementId: "G-JXPJQPCVE7"
};

const app = Firebase.initializeApp(FirebaseCredentials);
export const auth = getAuth(app);
export const signInWithFirebase = signInWithEmailAndPassword;
export const database = getFirestore(app);
export const handleSignOut = signOut(auth);
// export const _handleSignOut = handleSignOut();
export default Firebase;

