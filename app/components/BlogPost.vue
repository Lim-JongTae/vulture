<template>
  <div class="blog-wrapper shadow04 no-user">
    <div class="blog-content">
        <div class="whitespace-pre-wrap blog-title">          
            <h2 v-if="post.welcomeScreen" class="roboto-font">{{ post.title }}</h2>            
            <h2 v-else class="jua-font">{{ post.blogTitle }}</h2>
            <p v-if="post.welcomeScreen" class="notossans-font post-title">{{ post.blogPost}}</p>            
            <p class="content-preview notosans-font" v-else v-html="post.blogHTML"></p>
            <NuxtLink class="link link-light font-bold" v-if="!user" to="/auth/login">로그인/회원가입
              <UIcon name="i-heroicons-arrow-long-right-16-solid" class="w-7 h-7 ml-2 dark:invert arrow"/>
            </NuxtLink>      
            <div class="disnone">
              <NuxtLink class="link disnone text-gray-600"  :to="`/detailBlog/${post.id}`">
                게시물 보기
              </NuxtLink>                                       
            </div>   
        </div>
    </div>
        <div class="blog-photo">
          <NuxtImg class="img" v-if="post.welcomeScreen" :src="`/blogPhotos/${post.photo}.jpg`" alt="Welcome Image" />
          <NuxtImg class="img" v-else :src="`/blogPhotos/${post.blogCoverPhoto}.jpg`" alt="CoverPhoto" />                        
      </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object
})
const { user } = useUsersStore()
</script>
<style scoped>

.blog-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;  
}
.blog-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 4;
  order: 2;  
}

.blog-wrapper:nth-child(even) .blog-content {  
    order: 2;    
}
.blog-wrapper:nth-child(even) .blog-photo {  
    order: 1;  
}
div {
  @apply max-w-[100vw] py-20 px-6
}
h2 {
  @apply text-2xl font-semibold mt-1 mb-16
}
p {
  @apply text-lg font-light leading-10 min-h-12 h-auto
}
.content-preview {
  @apply text-sm max-h-6 whitespace-nowrap overflow-hidden text-ellipsis font-bold
}
.link {
  @apply inline-flex items-center mt-4 pb-1 border border-solid 
    border-transparent delay-100 ease-in transition-all    
}

.link:hover {
  @apply border-b-slate-600 font-bold
}

.link-light {
  @apply hover:border-b-slate-500
}
/* .blog-photo {
  @apply order-1 flex-[3] w-full
} */
.img {
  @apply block h-full w-full object-cover ml-14
}
.no-user:first-child {
  @apply bg-gray-600 text-white  
}

/* start media */
@media screen and (max-width: 699px) {
  div {
    padding-bottom: 20px;
  } 
  .blog-content {
    @apply p-0
  }
  .img {
    @apply ml-0
  }
}
@media screen and (min-width: 700px) {
  .blog-content{
    order:1;
  }
  div {
    padding: 0 24px;
  }
  h2 {
    font-size: 40px;   
  }
  .blog-wrapper {
    @apply min-h-[50vh] max-h-[100vh] flex-row    
  }
  .blog-photo {
    order: 2;
  }  
}

@media screen and (min-width: 800px) {
  .blog-content{
    flex:3;
  }
  .blog-photo {
    flex: 4;
  }
}
@media screen and (max-width: 400px) {  
.blog-photo {
    padding: 0 0;
    order: 1;
    flex: 3;
    width: 100%;
  }
  .whitespace-pre-wrap {
    padding: 0 0;
  }
  .disnone {
    padding: 0 0;;
}
  .blog-photo .img:hover {
    transform: scale(1.1);
  }
  .blog-title {
    margin-top: 0;
  }
  .blog-wrapper {
    padding: 1.5rem 1.6rem;
    min-height: 50%;    
  }
  .post-title {
    font-size: 0.8rem;
  }
}
</style>

