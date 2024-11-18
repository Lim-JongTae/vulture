<template>
  <div>                
    <AppNavNew />    
    <main>
      <slot />            
    </main>  
    <AppFooter /> 
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'with Ulsan Vulture',
  description: '울산독수리 보호및 녹색에너지 교육활동',
  ogTitle: '울산독수리 보호및 녹색에너지 교육활동',
  ogDescription: '기후변화협약대응, 생물다양성, 지속가능한개발목표(SDGs)',  
  ogImage: 'pbulic/og.jpg',
  ogUrl: 'https://울산독수리.com',
  ogLocale: 'ko_KR',
  ogSite_name: 'With울산독수리',
  twitterTitle: '울산독수리',
  twitterDescription: '울산독수리',
  twitterImage: '울산독수리',
  twitterCard: '울산독수리'
})

useHead({
  titleTemplate: '%s - 울산독수리',
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