<template>  
 <div>
    <div class="flex-wrap flex-ce-st p-12 gap-6 w-cla"> 
      <app-news v-for="article in currentNews" :key="article.id" :data="article" />      
    </div>
    <div class="flex justify-center mb-6">
      <UPagination v-model="page" :page-count="Math.ceil(total / pageSize)" :total="total" @click="isTop"/>
    </div>
   
    
  </div>
</template>

<script setup>
import newsData from './newsData.json'
// const newsStore = useNewsStore()
const result = computed(() => {
  console.log("data", newsData)
  return newsData.map(item => item).sort((a, b) =>b.id - a.id)
})

const page = ref(1)  //현재페이지
const pageSize = ref(6) //페이지당 항목수
const news = ref(result) //전체 뉴스 자료
const total = computed(() =>news.value.length) //총 항목수

console.log('total',total)


const currentNews = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return news.value.slice(start, start + pageSize.value); // 현재 페이지에 해당하는 뉴스 데이터
});


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