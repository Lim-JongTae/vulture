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
useHead({
  title: 'With 울산독수리',
  meta: [
    { 
      hid: 'description',
      name: 'description', 
      content: '울산독수리 보호및 녹색에너지 교육활동' },
    { 
      hid: 'og:title',
      property:'og:title',
      content: '함께해요~~울산독수리 보호및 생물다양성 지킴이활동' 
    },
    { 
      hid: 'og:description',
      property:'og:description',
      content: '기후변화협약대응, 생물다양성, 지속가능한개발목표(SDGs)' 
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://photos.app.goo.gl/AmUE9f2e75FHvyzw5',
    },
  ]  
})
</script>
