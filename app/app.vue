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
//   const email = 'test1@test.com'
//   const password = '123456'
//   const credentials = await createUser(email, password)
//   console.log('Credentials:', credentials)

//   const email = 'test1@test.com'
//   const password = '123456'
//   const credentials = await signInUser(email, password)
//   console.log('Credentials:', credentials)
//   const result = await signOutUse()
//   console.log('result:', result)
// })
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