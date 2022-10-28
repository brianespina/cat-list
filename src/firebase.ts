import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCw8JjVwaWkIAnFoDKjnTjTNtxHpdeM0nM",
    authDomain: "category-list-38816.firebaseapp.com",
    projectId: "category-list-38816",
    storageBucket: "category-list-38816.appspot.com",
    messagingSenderId: "114067370264",
    appId: "1:114067370264:web:b7ed97fed1ba72768e6e6d"
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
