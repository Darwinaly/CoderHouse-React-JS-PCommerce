import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCPxC1hOpk3UxCJjCqjZ3nzxXF7UgdGU0U",
  authDomain: "react-pcommerce.firebaseapp.com",
  projectId: "react-pcommerce",
  storageBucket: "react-pcommerce.appspot.com",
  messagingSenderId: "177923982550",
  appId: "1:177923982550:web:2295ac1f42a31254c8f577"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)