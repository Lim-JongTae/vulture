import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

export default defineNuxtPlugin((nuxtApp) => {  
  const {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
  } = useRuntimeConfig().public
  
  const firebaseConfig = {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
  };  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // initUser();

  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);
  const functions = getFunctions(app); 
  
  // const timestamp = Timestamp.fromDate(new Date())

  return {
    provide: {
      firebaseApp: app,
      db,            
      auth,      
      storage,         
      functions
    }
  }
})
