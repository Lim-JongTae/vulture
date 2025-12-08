import axios from "axios"

export default defineEventHandler(async (event) => {
  const url = 'https://raw.githubusercontent.com/Lim-JongTae/vulture/refs/heads/main/newsData.json' 
  let news = []
  axios.get(url).then((response) =>{
    news =  response.data
    console.log('news11',news)
  })
return news

  
})
