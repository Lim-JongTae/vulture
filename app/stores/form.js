import { defineStore } from 'pinia'

export const useFormStore = defineStore('Form',{
  
  state: () => ({
    R1: '',
    R2: '',
    R3: '',
    R4: '',
    R5: '',
    R6: '',
    B1: '',    
    B2: '',
    B3: '',
    B4: '',
    Bmessage: '',   
    C1: '',
    C2: '',
    C3: '',
    C4: '',
    C5: '',
    C6: '',
    Cmessage: '',   
    isLoading: false 
   }),
  actions: {}
})
