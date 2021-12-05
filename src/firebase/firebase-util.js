import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDsWE2muosWcKggb-QqhH9V3eP--TtoIdY",
  authDomain: "crown-db-50d9d.firebaseapp.com",
  projectId: "crown-db-50d9d",
  storageBucket: "crown-db-50d9d.appspot.com",
  messagingSenderId: "862183515889",
  appId: "1:862183515889:web:b1878de9b9c0a7673d6b50",
  measurementId: "G-82ZR1BRCYV",
};
 

export const createUserProfileDocument=async (userAuth,additionalData)=>{

    if(!userAuth)
    return;
    const userRef=firestore.doc(`users/${userAuth.uid}`)

    const snapshot=await userRef.get();

    if(!snapshot.exists)
    {
        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error createing user")
        }
    }
    console.log(snapshot)
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
