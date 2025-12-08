import { defineStore } from 'pinia'
import axios from 'axios'
export const useNewsStore = defineStore('newsStore',  {
  state: () => ({           
    news: []
  }),
  getters: {    
  },

  actions: { 
    async getNews() { 
      const url = 'https://raw.githubusercontent.com/Lim-JongTae/vulture/refs/heads/main/newsData.json' 
      
      await axios.get(url).then((response) =>{
        this.news =  response.data      
        console.log('news',news)
    })
  }  
}
})
