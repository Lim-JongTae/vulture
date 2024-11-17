import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

export default defineNuxtPlugin((nuxtApp) => {  
  const {
    apiKey,      
    messagingSenderId,
    appId,
    measurementId
  } = useRuntimeConfig().public
  
  const firebaseConfig = {
    apiKey,
    authDomain: 'ecobest-e49b0.firebaseapp.com',
    databaseURL: 'https://ecobest-e49b0-default-rtdb.firebaseio.com',
    projectId: 'ecobest-e49b0',
    storageBucket: 'ecobest-e49b0.appspot.com',
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
