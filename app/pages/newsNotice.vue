<template>  
    <div class="flex-wrap flex-ce-st p-12 gap-6 w-cla"> 
      <app-news v-for="article in result" :key="article.id" :data="article" />    
    </div>
   
</template>

<script setup>
// import newsData from './newsData.json'
// https://drive.google.com/file/d/1EbsPul_R2XqDXQzV7_i5LdwFWnDd8G38/view?usp=drive_link
const page = ref(1)
// const total = ref(newsData.total)
// const newsStore = useNewsStore()
// const result = computed(() => {
//   console.log("data", newsData)
//   return newsData.newsList.map(item => item).sort((a, b) =>b.id - a.id)
// })
const { data, pending } = await useFetch(() =>`https://drive.google.com/file/d/1EbsPul_R2XqDXQzV7_i5LdwFWnDd8G38/view?usp=sharing/news?list=${page.value}`, {
  key: `newslist-${page.value}`  
})
console.log("data", data)

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