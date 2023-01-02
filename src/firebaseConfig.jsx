import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCby7tmWVQQwMRZqpioPNx7X5peKmktMUY",
    authDomain: "letyourcomment.firebaseapp.com",
    projectId: "letyourcomment",
});

export const db = getFirestore(firebaseApp);