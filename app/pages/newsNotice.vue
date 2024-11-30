<template>
  <div class="flex-wrap flex-ce-st p-12 gap-6 w-cla"> 
    <app-news v-for="article in result" :key="article.id" :data="article" />    
  </div>
</template>

<script setup>
import articles from './newsData.json'
// const newsStore = useNewsStore()
const result = computed(() => {
  return articles.map(item => item).sort((a, b) =>b.id - a.id)
})
</script>
<style scoped>
.w-cal {
  width: calc(100%-96px);
}
</style>