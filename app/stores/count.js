import { defineStore } from 'pinia'

export const useCountStore = defineStore('Count',{
  
  state: () => ({
    counter: 0,
    results: []
   }),
  actions: {    
    async getData() {
      let SHEET_ID = '1tW2HhexkTqywWN4QyI1zRLPwL__zO1Tk5XAEopCYvDI'
      let SHEET_TITLE = 'form data'
      let SHEET_RANGES ='a1:t200'
      let url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&ranges=${SHEET_RANGES}`
      
      const response = await $fetch(url)    
      const data = await response.text() 
      const parsedData = JSON.parse(data.substr(47).slice(0, -2))         
      const length = parsedData.table.rows.length - 1
      this.counter = parsedData.table.rows[0].c[19].v
      let result = []
      for (let i = 1; i <= length; i++) {
        result.push(parsedData.table.rows[i].c[0].v)
      }
      this.results = result      
   
    }}
  
})
