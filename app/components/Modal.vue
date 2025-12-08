<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{useStore.pdisplayName}}님으로</p>
      <p>{{ props.modalMessage }}</p>
      <UButton class="button mt-6" @click="closeModal">닫기</UButton>
    </div>
  </div>
</template>

<script setup>
const useStore = useUsersStore()
const props = defineProps({
  modalMessage: {
    type: String,
    default: 'Modal Message'
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
}
.modal-content p {
  text-align: center;
}
.modal-content .button {
   align-self: center;
}
</style>