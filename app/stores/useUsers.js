import { defineStore } from 'pinia'
import { onAuthStateChanged, updateProfile, sendPasswordResetEmail } from "firebase/auth";

export const useUsersStore = defineStore('useStore',{  
  state: () => ({ 
    user: {},
    pAdmin: null,
    pdisplayName: null,
    pId: null,
    pInitials: null,
    pEmail: null,
  }), 
  actions: {
    async getCurrentUser () {
      const { $auth } = useNuxtApp()
      $auth.onAuthStateChanged(async (user) => {
        if (user) {
          const token = await user.getIdTokenResult()
          // console.log('token',token.claims)
          // console.log('usr',user.displayName) 
          this.user = user
          this.pdisplayName = user.displayName
          this.pAdmin = token.claims.admin
          this.pEmail = token.claims.email
          this.pId = token.claims.user_id
          this.pInitials = this.pdisplayName.substr(0,1)          
        }
      })}    
    },
    async changeName(payload) {      
      this.pdisplayName = payload
    },
    async updateUser() {
      const { $auth } = useNuxtApp()
      console.log('update',this.pdisplayName)
      await updateProfile($auth.currentUser,{ displayName: this.pdisplayName })
      .then(() => {            
        console.log('after update',this.pdisplayName)
      })      
    }, 
    async resetPassword (email) {
      const { $auth } = useNuxtApp()
      try {
        sendPasswordResetEmail($auth, email)
      } catch (error) {
        console.log(error)
      }
  },

  getters: {   
    userId () {
      return this.pId      
    },    
    admin () {
      return this.pAdmin
    }
  }

})
