<template>
  <div class="container">
    <video class="slider" src="/movie/fly.mp4" autoplay controls></video>    
    <!-- https://drive.google.com/file/d/1OgYNj6X-Hl7lsPklGrSQwfYws04FWPJ9/view?usp=sharing -->
    <ul>
      <li @click="videoslider('/movie/food_1.mp4')"><video src="/movie/food_1.mp4"></video></li>
      <li @click="videoslider('/movie/food_2.mp4')"><video src="/movie/food_2.mp4"></video></li>
      <li @click="videoslider('/movie/food_3.mp4')"><video src="/movie/food_3.mp4"></video></li>
    </ul>
  </div>
  <!-- <iframe src="https://drive.google.com/file/d/1OgYNj6X-Hl7lsPklGrSQwfYws04FWPJ9/preview" 
  width="640" height="480" allow="autoplay"></iframe> -->
  <!-- https://drive.google.com/file/d/1OgYNj6X-Hl7lsPklGrSQwfYws04FWPJ9/view?usp=sharing -->
  
</template>
<script setup>
function videoslider(links) {
  document.querySelector('.slider').src = links
}
</script>

<style scoped>
.container {
  margin-top: 1rem; 
  margin-bottom: 1rem;
  width: 80%;
  height: 80%;  
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