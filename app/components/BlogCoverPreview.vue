<template>
  <div>
    <div class="modal" ref="modal">
      <div class="modal-content">
        <UIcon name='i-heroicons-x-circle-16-solid' @click="closePreview" class="icon" />
        <NuxtImg :src="blogCoverPhoto" class="img" />        
      </div>
    </div>
  </div>
</template>

<script setup>
const postStore = usePostStore()
const blogCoverPhoto = computed(()=> {
  return postStore.blogPhotoFileURL
})
console.log(blogCoverPhoto)

const closePreview = () => {
  postStore.openPhotoPreview()
}
</script>

<style scoped>
.modal {
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
}
.modal-content {
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 12px;
  background-color: #fff;
  height: 400px;
  width: 600px;
  padding: 40px;
  margin-top: 15%;
  box-shadow: 0 4px 6px -1px rgba(0, 0 , 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.icon {
  width: 24px;
  height: 30px;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 15px;
  right: 15px;
  color: #303030;
}
.icon .img {
  margin-top: 15px;
  display: block;
  width: auto;
  height: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

</style>