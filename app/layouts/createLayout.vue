<template>
  <div>                
    <app-nav-new />    
    <main class=" mt-24">
      <slot />            
    </main>     
  </div>
</template>

<script setup>

useHead({
  titleTemplate: '%s - 울산독수리'
})
useSeoMeta({
  title: 'with Ulsan Vulture',
  description: '울산독수리 보호및 녹색에너지 교육활동',
  ogTitle: '울산독수리 보호및 녹색에너지 교육활동',
  ogDescription: '기후변화협약대응, 생물다양성, 지속가능한개발목표(SDGs)',  
  ogImage: 'https://photos.app.goo.gl/AmUE9f2e75FHvyzw5',
  ogUrl: 'https://photos.app.goo.gl/BqpTS9GfgvJj43bV9',
  ogLocale: 'ko_KR',
  ogSite_name: 'With울산독수리',
  twitterTitle: '울산독수리',
  twitterDescription: '울산독수리',
  twitterImage: '울산독수리',
  twitterCard: '울산독수리'
})

</script>

<style scoped>

</style>