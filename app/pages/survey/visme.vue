<template>
  <div>    
      <Uicon name="i-heroicons-arrow-path-20-solid" class="w-52 h-52 animate-spin text-black" />
    
    <div class="visme_d" data-title="vulture" data-url="dm464467-vulture?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="111013"></div>
   
      <!-- <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script> -->
  </div>
</template>

<script lang="ts" setup>
const url = 'https://forms.visme.co/ajax/forms/view/4WjzZ7ZRVMR7D2yv'
const check = ref()
const isCheck = computed(() => {
  return url ? true : false
})
</script>

<style>

</style>