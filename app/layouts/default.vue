<template>
  <div>                
    <AppNav />    
    <main>
      <slot />            
    </main>  
    <AppFooter /> 
  </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser()
useHead({
  titleTemplate: '%s - 울산독수리'
})
useSeoMeta({
  title: '도요새탐조단',
  description: '2024년 HPAI및 생물다양성 교육',
  ogTitle: '2024년 HPAI & 생물다양성교육',
  ogDescription: '울산시민과학 도요새탐조단을 중심으로 생물다양성및 조류독감에 관학 교육',    
  ogImage: 'https://drive.google.com/uc?export=view&id=1hoWt9nZaAhcSl7RY26TrTJuiI0i3QEfY',
  ogUrl: 'https://drive.google.com/uc?export=view&id=1gEljICTymU-3Tlim8lRp-X9dlrI09pd6',
  ogLocale: 'ko_KR',
  ogSite_name: '울산시민과학단',
  twitterTitle: '울산시민과학단',
  twitterDescription: '울산시민과학단',
  twitterImage: '울산시민과학단',
  twitterCard: '울산시민과학단'
})

useHead({
  htmlAttrs: {
    lang: 'ko'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})
</script>

<style scoped>

</style>