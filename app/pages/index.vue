<template>
  <div>    
    <BlogPost :post="welcomeScreen" />    
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />     
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in blogPostsCards" :key="index" />
        </div>
      </div>
    </div> 
    <div class="updates h-[300px] md:h-[250px] sm:h-[150px]">     
      <div class="container flex justify-between items-center">  
        <h2 class="jua-font">다음세대를 위한 생물다양성 보존과 생태계 복원<br><br> 시민여러분과 함께 이루어 갑니다</h2>        
        <NuxtLink to="#" >
          <UButton v-if="!pId" trailing size="xl" to="/auth/login" icon="i-heroicons:arrow-small-right-solid" color="lime" class="router-button-1 mb-4 rounded-full text-slate-900 font-bold flex mr-10 jua-font">
            회 원 가 입    
          </UButton>
          <UButton v-if="pId" trailing size="xl" to="/donation" icon="i-heroicons:arrow-small-right-solid" color="lime" class="router-button-1 mb-4 rounded-full text-slate-900 font-bold flex mr-10 jua-font">
            후 원 하 기    
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>

// export default {
// data() {
//   return {   
//       welcomeScreen: {
//             title: 'Welcome!',
//             blogPost:'울산독수리의 힘찬 비상~~ 천연기념물 제234호\n 환경부지정 멸종위기 2급' ,      
//             photo: 'nn',
//             welcomeScreen: true
//           },
      // sampleBlogPost: [
      //   {
      //     title: "독수리의 급강하 착지",
      //     blogHTML: "무리들의 먹이활동에 늦은 독수리,<br> 독수리식당에 급하게 착륙하고 있음 ",
      //     blogCoverPhoto: "down2"
      //   },
      //   {
      //     title: "66번 대박이 방사",
      //     blogHTML: "탈진, 농약 중독으로 치료후 방사",
      //     blogCoverPhoto: "out"
      //   },
      //   {
      //     title: "'KM' tag",
      //     blogHTML: "까치, 까마귀의 텃새에 둘러쌓여있는 독수리,<br> 때로는 공격당하기도 합니다.",
      //     blogCoverPhoto: "km"
      //   },
        // {
        //   title: "공격당하는 독수리",
        //   blogHTML: "텃새인 큰부리까마귀와 까치 무리에게 공격당하는 독수리",
        //   blogCoverPhoto: "221216"
        // },
        // {
        //   title: "'MN' tag 독수리",
        //   blogHTML: "독수리식당의 주변을 돌면서 비행하는 독수리",
        //   blogCoverPhoto: "mn_5000"
        // },
        // {
        //   title: "이크나크 자연보호구",
        //   blogHTML: "몽골의 주요 조류 서식지로서 국내에서 월동하는 <br>많은 독수리가 이곳에서 서식하고 있음.",
        //   blogCoverPhoto: "ikhnart"
        // },
        // {
        //   title: "독수리 이동경로",
        //   blogHTML: "GPS 위성추적경로<br> 몽골 이크나크 자연보호구 도착 ",
        //   blogCoverPhoto: "path"
        // },
        // {
        //   title: "독수리 심포지움",
        //   blogHTML: "한반도 독수리 보전을 위한 네트워크 구축<br>울산, 철원, 파주, 경남 고성, 김해",
        //   blogCoverPhoto: "metting"
        // },
      // ],     
  // }}}
</script>

<script setup>
const postStore = usePostStore()
const cardStore = useGetCardStore()

const { sampleBlogPost, welcomeScreen } = storeToRefs(postStore)
const { pId } = useUsersStore()

// const blogPostsFeed = computed(() => {
//   return postStore.blogPostsFeed
// })
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
</style>