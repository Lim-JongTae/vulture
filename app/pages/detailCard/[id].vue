<template>
  <div v-if="data" class="post-view">
    <div class="container quillWrapper">     
      <h2>{{ data[0].blogTitle }}</h2>
      <h4>게시일: {{ new Date(data[0].blogDate).toLocaleString('ko-KR', {dateStyle: 'long' })}}</h4>
      <img :src="data[0].blogCoverPhoto" alt="Cover Photo" />
      <div class="post-content ql-editor" v-html="data[0].blogHTML"></div>
    </div>
    <div class="text-center">
      <UButton to="/views/blogs" icon="i-heroicons-receipt-refund-16-solid">되돌아가기</UButton>
    </div>
  </div>
</template>

<script setup>
  const route = useRoute()
  definePageMeta({
    layout: 'create-layout'
  })
  const data = ref(null)
  const cardStore = useGetCardStore()
  onMounted(async() => {
    data.value = await cardStore.blogPosts.filter((post) => {
      return post.blogID === route.params.id      
    })
  })
</script>

<style scoped>
.post-view {   
  position: relative;
  height: 100%;
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}
.container h2 {
  position: absolute;
  padding: 0 1rem;
  top: 5%;
  left: 5%;
  text-align: left;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  background: rgba(41, 40, 40, 0.5);
  border-radius: 10px;;
  backdrop-filter: blur(50%);
  color: beige;
}
.post-content {
  font-size: 1rem;
  font-weight: 500;  
  margin-top: 1rem;
  text-align: center;
}
</style>