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
      <UCard class="">
        <template #header>
          <div class="flex items-center justify-center">
            <UIcon name="heroicons-squares-plus" class="w-7 h-7 text-amber-700" />
            <div class="h-10 text-center jua ml-4">울산독수리학교 만족도 조사</div>
          </div>
        </template>
          <Placeholder class="h-100" />
          <div class="noto font-semibold">
            <p>독수리학교 행사에 참여해 주셔서 대단히 감사합니다.</p>  
            <p>저희가 준비하면서 보낸 시간만큼 즐거운 시간이 되셨길바랍니다.</p>
            <p>앞으로 행사 조직 및 내용을 개선할 수 있도록 의견을 주시면 감사하겠습니다.</p>
            <p>짧은 설문조사에 여러분의 생각을 알려 주세요. 답변은 익명으로 처리됩니다.</p>
          </div>                  
        <template #footer>
          <UButton block to="/survey/form1">계 속</UButton>
        </template>
      </UCard>
    </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'layout-login'
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