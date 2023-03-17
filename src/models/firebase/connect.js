import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.api_key,
    authDomain: process.env.auth_domain,
    projectId: process.env.project_id,
    storageBucket: process.env.storage_bucket,
    messagingSenderId: process.env.messaging_sender_id,
    appId: process.env.app_id,
    measurementId: process.env.measurement_id
  };
  
firebase.initializeApp(firebaseConfig);

const fireStore = await firebase.firestore();

export { fireStore };