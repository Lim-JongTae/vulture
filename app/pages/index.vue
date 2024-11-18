<template>
  <div class="home">     
    <blog-post :post="welcomeScreen" />        
    <app-carousel />       
    <blog-post :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />      
    <div class="mt-3"></div>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>최근 블로그 소식</h3>
        <div class="blog-cards">
          <blog-card :post="post" v-for="(post, index) in blogPostsCards" :key="index" />
        </div>
      </div>
    </div>                 
    <div class="updates h-[300px] md:h-[250px] sm:h-[150px]">     
      <div class="container flex justify-between items-center">  
        <h2 class="jua-font">다음세대를 위한 생물다양성 보존과 생태계 복원<br><br> 시민여러분과 함께 이루어 갑니다</h2>                
          <UButton v-if="!pEmail" trailing size="xl" to="/auth/login" icon="i-heroicons-arrow-long-right-solid" color="lime" class="router-button-1 mb-4 rounded-full text-slate-900 font-bold flex mr-10 jua-font">
            회 원 가 입    
          </UButton>
          <UButton v-else trailing size="xl" to="/donation" icon="i-heroicons-arrow-long-right-solid" color="lime" class="router-button-1 mb-4 rounded-full text-slate-900 font-bold flex mr-10 jua-font">
            후 원 하 기    
          </UButton>
       
      </div>
    </div>
  </div>
</template>

<script setup>
const postStore = usePostStore()
const cardStore = useGetCardStore()

const { sampleBlogPost, welcomeScreen } = storeToRefs(postStore)
const { pEmail } = useUsersStore()
const blogPostsCards = computed(() => {
  return cardStore.blogPostsCards
})
</script>

<style scoped>
.blog-card-wrap h3 {
  @apply text-xl font-semibold mb-8
}
h2 {
  font-weight: bold;
  font-size: 30px;
  max-width: 800px;
  width: 100%;  
  line-height: 500%;      
  margin-top: -120px;
  height: 100px;
}

@media screen and (max-width: 799px) { 
  .updates h2 {
    @apply text-start text-xl
  } 
}
@media screen and (min-width: 800px) {
  .updates h2 {
    @apply text-start text-4xl
  } 
}
@media screen and (max-width: 640px) { 
  .updates  {
    height: 150px;
  } 
  .updates h2 {
    font-size: 1rem;
}
}
@media screen and (max-width: 400px) { 
 
  blog-card-wrap {
    margin-top: 10rem;
    padding-bottom: 0;
  }
}
</style>