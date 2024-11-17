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
  ogImage: 'https://photos.app.goo.gl/KN23Psk7u1Un3NMd9',
  ogUrl: 'https://photos.app.goo.gl/wtrE4a8chFZ21q1j9',
  ogLocale: 'ko_KR',
  ogSite_name: '울산독수리',
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