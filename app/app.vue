<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout>      
      <NuxtPage />        
    </NuxtLayout>
    <UNotifications />
  </div>
</template>
<script setup>
import { useUsersStore } from '~/stores/useUsers'
import { usePostStore } from '~/stores/posts'
import { useGetCardStore } from '~/stores/useGetCard'
const useStore = useUsersStore()
const postStore = usePostStore()
const cardStore = useGetCardStore()
const { pAdmin, pEmail, pdisplayName } = storeToRefs(useStore)
// useStore.getUser()
const { $auth } = useNuxtApp()
// onMounted(async () => {

// onBeforeMount(() => {
//   $auth.onAuthStateChanged(async(user) => {
//     useStore.adminUpdate(user)
//     if (user) {
//       const token = await user.getIdTokenResult()
//       console.log('token:', token.claims)      
//       console.log('name:', useStore.user)      
      

         
//     }
//   })
// }) 
onBeforeMount(() => {
  useStore.getCurrentUser()   
  
})
onMounted(() => {
  cardStore.getPost()
})


</script>
