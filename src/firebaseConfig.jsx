import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp({
    apiKey: process.env.apiKey,
    authDomain: "letyourcomment.firebaseapp.com",
    projectId: "letyourcomment",
});

export const db = getFirestore(firebaseConfig);