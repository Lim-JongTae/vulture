<template>
  <ClientOnly>
  <div>
    <div v-if="pending" class="loading w-size  flex-center">
      <loading-view  />
    </div>
    <div v-else class="page w-size">
      <app-news v-for="article in newsStore.articles" :key="article.url" :data="article" />    
    </div>  
   </div>
  </ClientOnly>
</template>

<script setup>
const route = useRoute();
const newsStore = useNewsStore();

// onMounted(() => {
//   newsStore.changeSearchValue(route.params.id)
// })
// import type { ApiStructure } from '~/types/api';
// const API_KEY = '3b282fc1d4ea42779325a539fba0f51e';
// const API_URL = `https://newsapi.org/v2/everything?q=birds&from=2024-08-20&sortBy=publishedAt&apiKey=${API_KEY}`;

// const { data, status, error, refresh, clear } = await useAsyncData<ApiStructure>(
//     'getNews',
//     () => $fetch(API_URL)        
// );
</script>

<style scoped>
.page {
  @apply flex flex-wrap content-start justify-center p-12 gap-6;
}
.w-size {
  width: calc(100% - 96px);
}
.loading {
  @apply items-center justify-center p-9 gap-6
}
</style>