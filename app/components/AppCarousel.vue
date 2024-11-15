<template>
  <div class="container">
    <video class="slider" src="/movie/fly.mp4" controls></video>
    <ul>
      <li @click="videoslider('/movie/food_1.mp4')"><video src="/movie/food_1.mp4"></video></li>
      <li @click="videoslider('/movie/food_2.mp4')"><video src="/movie/food_2.mp4"></video></li>
      <li @click="videoslider('/movie/food_3.mp4')"><video src="/movie/food_3.mp4"></video></li>
    </ul>
  </div>
</template>

<script setup>
function videoslider(links) {
  document.querySelector('.slider').src = links
}
</script>

<style scoped>
.container {
  width: 90%;
  height: 100%;  
  border-radius: 10px;
  box-shadow: 1px 5px 1px 1px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container.slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
video {
  width: 100%;
  height: 100%;
}
.container ul {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}
.container ul li {
  list-style: none;
  cursor: pointer;
  margin: 10px;
}
.container ul li video {
  width: 200px;
  transition: all 0.3s;
}
.container ul li video:hover {
  transform: scale(1.1);
}
</style>