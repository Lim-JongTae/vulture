<template>
  <div>
    <div class="body1">
      <NuxtImg class="logo" src="/logo.png" format="Webp" />
      <div>
        <span class="lobster-regular text-3xl ml-2">With</span>
        <span class="bagel-fat-one-regular text-3xl ml-2">울산독수리</span>
      </div>
      <p>녹색에너지는 독수리보호와 기후변화에 적극 대응합니다</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.body1 {
  background: linear-gradient(90deg, #e2e2e2, #c9d6ff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.logo {
  width: 50px;
  margin-top: 20px;
}
@media screen and (max-width: 768px) {
  .body1 {
    display: none;
  }
}
</style>