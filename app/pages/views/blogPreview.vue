<template>
  <div class="post-view">
    <div class="container quillWrapper">
        <h2>{{ blogTitle }}</h2>
        <img :src="blogPhotoFileURL" alt="블로그 미리보기" />
        <div class="post-content ql-editor" v-html="blogHTML"></div>
    </div>    
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'create-layout' 
})
const cardStore = useGetCardStore()
  
  const blogTitle = computed(() => {
    return cardStore.blogTitle
  })
  const blogPhotoFileURL = computed(() => {
    return cardStore.blogPhotoFileURL
  })
  const blogHTML = computed(() => {
    return cardStore.blogHTML
  })

</script>

<style scoped>
.post-view {
  min-height: 100%;
  text-align: center;
}

.container {
    max-width: 1000px;
    padding: 60px 25px;
}
.ql-editor {
    padding: 0;
}
h2 {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
}
img {
    width: 100%;
    margin-bottom: 32px;
}
button {       
    margin-bottom: 100px;
}

</style>