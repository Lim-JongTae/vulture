<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit mt-30" v-show="userStore.pAdmin">
        <span>편집하기</span>
        <input type="checkbox" v-model="cardStore.editPost" @click="!cardStore.editPost"/>
      </div>
      <BlogCard :post="post" v-for="(post, index) in blogPosts" :key="index" class="mt-6" />
    </div>   
  </div>
</template>
<script setup>
const cardStore = useGetCardStore()
const userStore = useUsersStore()
const blogPosts = computed(() => {
  return cardStore.blogPosts 
})
const editPost = computed({
  get() {
    return cardStore.editPost
  },
  set(payload) {
    return cardStore.toggleEditPost(payload)
  }
})
onBeforeUnmount((() => {
  cardStore.toggleEditPost(false)
}))
  


</script>

<style scoped>
.blog-cards {
  position: relative;
}
.blog-cards .toggle-edit {
  display: flex;
  align-items: center;
  position: absolute;  
  top: -25px;
  right: 0;
}
.blog-cards .toggle-edit span {
  margin-right: 16px;
}
input[type='checkbox'] {
  position: relative;   
  border: none;
  -webkit-appearance: none;
  background: #948f8f;
  outline: nont;
  width: 80px;
  height: 30px;
  border-radius: 20px;
  box-shadow: 0 0.4rem 0.6rem -0.1rem rgba(0,0,0,0.1), 0 0.2rem 0.4rem -0.1rem rgba(0,0,0,0.06);
}
input[type='checkbox']::before {
  content: '';
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  top: 0;
  left: 0;
  background: #303030;
  transform: scale(1.1);
  transition: 750ms ease all;
  box-shadow: 0 0.4rem 0.6rem -0.1rem rgba(0,0,0,0.1), 0 0.2rem 0.4rem -0.1rem rgba(0,0,0,0.06);
}
input:checked[type='checkbox']::before {
  @apply bg-white left-14
}
</style>