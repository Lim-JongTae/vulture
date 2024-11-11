import { defineStore } from 'pinia'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile,    
  sendPasswordResetEmail,
  onAuthStateChanged
} 
  from "firebase/auth";

export const useFirebaseAuthStore = defineStore('useFirebaseAuthStore',{
  state: () => ({
  
   }),
   actions: {
    async register (email, password, displayName) {
      const { $auth } = useNuxtApp()
      try {
        const userCredential = await createUserWithEmailAndPassword($auth, email, password);
        this.users = userCredential.user
        await updateProfile($auth.currentUser, { displayName: displayName })                        
        console.log('UsersStore:', this.users)
      } catch (error) {        
        console.log(error)
      }
    },
    async login (email, password) {
      const { $auth } = useNuxtApp()
      try {
        await signInWithEmailAndPassword($auth, email, password)       
      } catch (error) {
        console.log('Login Error',error)    
        toast.error({
          title: 'Error',
          description: error.message,
          duration: 1500,
          callback: async ()=> {
            navigateTo('/auth/login')
          }
        })
        
      }
    },
    async logout () {
      const { $auth } = useNuxtApp()
      try {
        await signOut($auth)
        navigateTo('/auth/login')
        this.users = []
        console.log('Logout Users:', this.users)
        
      } catch (error) {
       console.log(error) 
      }
    },
    async resetPassword (email) {
      const { $auth } = useNuxtApp()
      try {
        sendPasswordResetEmail($auth, email)
      } catch (error) {
        console.log(error)
      }
  }
}
})
