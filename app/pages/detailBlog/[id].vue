<template>
   <div v-if="currentBlog">
    <div class="post-view noosans-font">
      <div class="container">
        <h2>{{ currentBlog.title }}</h2>
        <img :src="`/blogPhotos/${currentBlog.blogCoverPhoto}.jpg`" alt="cover photo">
        <div class="post-content " v-html="currentBlog.blogHTML"></div>
      </div>
    </div>
   </div>
</template>

<script setup>
  const postStore = usePostStore()  
  const route = useRoute()
 
  definePageMeta({
  layout: 'create-layout'
  })
const currentBlog = ref(null)
const index = ref(route.params.id - 1)
  onMounted(async() => {
    currentBlog.value = await postStore.getOnePost(index.value)    
  }) 
</script>

<style scoped>
.post-view {
  height: 100%;  
  position: relative;
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}
.container h2 {
  text-align: left;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  position: absolute;
  padding: 0 1rem;
  top: 5%;
  left: 5%;
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

