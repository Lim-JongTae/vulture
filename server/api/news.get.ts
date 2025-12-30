import type { NewsItem } from "~~/types/my-types"

export default defineEventHandler(async (event): Promise<NewsItem[]> => {
  const url = 'https://raw.githubusercontent.com/Lim-JongTae/vulture-news/refs/heads/main/news' 
  
  try {
    const raw = await $fetch<string>(url, { responseType: 'text'})
    const parsed = JSON.parse(raw.trim())

    return Array.isArray(parsed) ? (parsed as NewsItem[]) : []
  } catch(e) {
    console.error('News parse Error:', e)
    return []
  }  
})
