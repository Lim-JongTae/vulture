<template>
  <div>
    <UContainer>
      <div class="flex items-center w-100 min-h-screen justify-center top">
        <div class="bird-body">
          <div class="bird-container">
            <div class="bird-card"></div>
            <div class="bird-bird"></div>
          </div>
      </div>
      <UCard class="card-body">
        <template #header>
          <div class="flex items-center justify-center">
            <UIcon name="i-heroicons-face-smile-solid" class="w-7 h-7 text-amber-700" />
            <div class="h-10 text-center jua ml-4">수고하셨습니다.</div>
          </div>
        </template>
        <Placeholder class="h-100" />
        <div class="noto bg-gray-100 rounded-lg p-3">
          <p>{{ counter }}번째</p>
          <p>성공적으로 제출되었습니다.</p>
          <P>설문에 참여해 주셔서 대단히 감사합니다.</p>       
        </div>                  
        <template #footer>
          <div class="noto">
            <p>앞으로 더욱더 좋은 프로그램으로 찾아 뵙겠습니다.</p>
          </div>
        </template>
      </UCard>
    </div>
    </UContainer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'layout-login'
})
  import { storeToRefs } from 'pinia'
  const countStore = useCountStore()
  const { counter } = storeToRefs(countStore)
  
  onMounted(() => {
    countStore.getData()    
  })
</script>

<style scoped>
.jua {
  font-family: 'Jua', serif;
  font-size: 2rem;
}
.noto {
  font-family: 'Noto Sans KR', serif;
  font-size: 1rem;
  line-height: 2;
  text-align: center;
}
.card-body {
  border: 1px solid rgba(164, 161, 161, 0.1);
  box-shadow: 10px 10px 10px 3px rgba(0,0,0,0.3);
 }
@media screen and (max-width: 580px) {
  .jua {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
  .noto {
    font-size: 0.8rem;
  }
  .top {
    display: flex;
    flex-direction: column;
    min-height: 0;
    margin-top: 8rem; 
  }
 
  .bird-body {
    max-height: 320px;
    width: 10rem;
  }
  .bird-container {
    width: 100%;
    height: 100%;
  }
}
  .bird-body {
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bird-container:hover .bird-card {    
      transform: perspective(20px) rotateX(2deg) translateY(-50px);    
  }
  .bird-container {
    width: 15rem;
    height: 20rem;
    /* border: 2px solid black; */
    position: relative;
    cursor: pointer;
  }
  .bird-card {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('/background.avif');
    background-size: cover;
    transition: 1s;
    border-radius: 10px;
    box-shadow: 0 10px 10px;
  }
  .bird-bird {
    width: 15rem;
    height: 15rem;
    position: absolute;
    background-image: url('/bird1.png');
    
    background-size: 100%;
    background-repeat: no-repeat;
    transition: 1s;
    animation: animate 0.2s linear infinite;
    animation-play-state: paused !important;
  }
  .bird-container:hover .bird-bird {    
    animation-play-state: running !important;
    transform: translateY(-200px) translateX(-10px);    
  }
  @keyframes animate {
    from {
      background-image: url('/bird1.png');
    }
    to {
      background-image: url('/bird2.png');
    }
  }
</style>

<!-- <div class="text-center mb-5 mt-10">
  <span class=" text-zinc-300 font-bold text-2xl">독수리학교 만족도 조사</span>
  
  </div>
</div> -->