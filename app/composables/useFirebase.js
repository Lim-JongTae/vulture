import {  
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged, 
 } from 'firebase/auth';
import { useFirebaseUser } from './useState';
 export const createUser = async (email, password) => {
    const { $auth } = useNuxtApp();
    
    const credentials = await createUserWithEmailAndPassword($auth, email, password)   
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;     
    });
    return credentials;
 }

 export const signInUser = async (email, password) => {  
  const { $auth } = useNuxtApp();  
  const credentials = await signInWithEmailAndPassword($auth, email, password)

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return credentials;
 }
 export const initUser = async () => {
  const auth = getAuth()
  // const { $auth } = useNuxtApp()
  const firebaseUser = useFirebaseUser();
  firebaseUser.value = auth.currentUser;
  const userCookie = useCookie('userCookie' )
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // console.log('Auth changed:', user);
      // firebaseUser.value = user;
      
    } else {
      // console.log('Auth changed:', user);
      // firebaseUser.value = user;
    }
    firebaseUser.value = user;
    // userCookie.value = user; //json으로 변경
  });  
 };

 export const signOutUse = async () => {
  const { $auth } = useNuxtApp();  
  const result = await $auth.signOut()
  console.log('Logout:', result)
  return result;
}