<template>
  <div v-if="currentBlog" class="mt-10">    
    dd
   <div class="post-view noosans-font">
     <div class="container">
       <h2>{{ currentBlog[0].blogTitle }}</h2>
       <img :src="currentBlog[0].blogCoverPhoto" alt="cover photo">
       <div class="post-content " v-html="currentBlog[0].blogHTML"></div>
     </div>
     <div class="text-center">
       <UButton size="sm" to="/views/blogs" icon="i-heroicons-receipt-refund-16-solid">되돌아가기</UButton>      
     </div>
   </div>
  </div>
</template>

<script setup>
 const postStore = usePostStore()  
 const cardStore = useGetCardStore()
 const route = useRoute()

 definePageMeta({
 layout: 'create-layout'
 })
const currentBlog = ref(null)
const id = ref(route.params.id )
 onMounted(async() => {
  currentBlog.value  = await cardStore.blogPosts.filter((post) => {
    return post.blogID === route.params.id         
  })
  console.log('current', currentBlog.value[0].blogTitle )
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