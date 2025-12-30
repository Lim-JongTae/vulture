<template>  
 <div class="mt-10">
    <div class="flex-wrap flex-ce-st p-12 gap-6 w-cla">       
      <app-news v-for="article in currentNews" :key="article.id" :data="article" />      
    </div>
    <div class="flex justify-center mb-6">      
      <UPagination v-model="page" :page-count="Math.ceil(total / pageSize)" :total="total" @click="isTop" />
    </div>    
  </div>
</template>

<script setup lang="ts">
// const newsStore = useNewsStore()
// const { news } = storeToRefs(useNewsStore()) 
import type { NewsItem } from '~~/types/my-types'
import Id from './detailBlog/[id].vue'
const { data:newsData, pending, error } = await useFetch<NewsItem[]>('/api/news', {
  key: 'vulture-news'
})
function toIdNumber(id: NewsItem['id']): number {
  if (typeof id === 'number') return id
  if (typeof id === 'string') {
    const n = Number(Id)
    return Number.isFinite(n) ? n : -1
  } 
  return -1
}

const result = computed<NewsItem[]>(() => {  
  const items = newsData.value ??[]
  return [...items]
    .sort((a, b) => toIdNumber(b.id) - toIdNumber(a.id))
})

const page = ref(1)  //현재페이지
const pageSize = ref(6) //페이지당 항목수
const news = ref(result) //정렬된 전체 뉴스 자료
const total = computed(() => news.value.length) //총 항목수

const currentNews = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return news.value.slice(start, start + pageSize.value); // 현재 페이지에 해당하는 뉴스 데이터
});
console.log('newsData', newsData)

const pageInit =() => {  
  page.value = 1;
}
onMounted(() => {  
 pageInit()  
 
})
const isTop = () => {
  window.scrollTo(0, 0);
}
</script>
<style scoped>
.w-cal {
  width: calc(100%-96px);
}
.mt-center {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
</style>