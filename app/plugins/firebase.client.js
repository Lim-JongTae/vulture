import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";



export default defineNuxtPlugin((nuxtApp) => {  
  
  const firebaseConfig = {
    apiKey: 'AIzaSyAb6A4yjg22oEqRVPoZanE9W-WKSzvWSbg',
    authDomain: "ecobest-e49b0.firebaseapp.com",
    databaseURL: "https://ecobest-e49b0-default-rtdb.firebaseio.com",
    projectId: "ecobest-e49b0",
    storageBucket: "ecobest-e49b0.appspot.com",
    messagingSenderId: "518376376725",
    appId: "1:518376376725:web:ab68fa3dbdb3c9ac75ce9c",
    measurementId: "G-3SRXLHLQMQ"
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