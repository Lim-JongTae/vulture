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
const useStore = useUsersStore()
const cardStore = useGetCardStore()

onBeforeMount(() => {
  useStore.getCurrentUser()     
})

onMounted(() => {
  cardStore.getPost()
  
})

</script>
