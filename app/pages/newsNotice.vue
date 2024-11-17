<template>
  <div class="flex-wrap flex-ce-st p-12 gap-6 w-cla"> 
    <app-news v-for="article in newsStore.articles" :key="article.id" :data="article" />    
  </div>
</template>

<script setup>
const newsStore = useNewsStore()

</script>
<style scoped>
.w-cal {
  width: calc(100%-96px);
}
</style>