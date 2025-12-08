<template>
  <div class="modal">
    <div class="border border-gray-700" />
    <div class="modal-content">
      <!-- <p>{{useStore.pdisplayName}}님으로</p> -->
      <p class="mb-10">{{ props.modalMessage }}</p>
      <UButton class="button" @click="closeModal">닫기</UButton>
    </div>
  </div>
</template>

<script setup>
// const useStore = useUsersStore()
const props = defineProps({
  modalMessage: {
    type: String,
    default: '독수리학교 신청'
  }
})
const emit = defineEmits(['close-modal'])
const closeModal = () => {
  emit('close-modal')
}

</script>

<style scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(3px);   
}

.modal-content {
  display: flex;  
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  width: 350px;
  padding: 40px 30px;
  background-color: #fff;
  background-image: url("/notice.png");
}
.modal-content p {
  text-align: center;
  color: black;
  background: rgba(256,256,256,0.5);
  border-radius: 10px;
  inline-size: 270px;
  padding: 5px 3px;
  font-weight: 500;
  font-family: 'Jua', sans-serif;
}
.modal-content .button {
   align-self: center;
}

</style>