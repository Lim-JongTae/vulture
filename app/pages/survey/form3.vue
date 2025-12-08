<template>    
  <div class="body">   
    <div class="container"> 
      <div class="flex justify-center items-center text-green-700">
          <UIcon name = "i-heroicons-users" class="w-6 h-6 mr-4 mb-4" />
          <div class="text-center underline text-xl mb-4">교육내용에 관한 질문 입니다..</div>
      </div>     
      <UForm name="contact-form" id="contact-form" class="mt-11 text-black font-semibold form-body">
      <!-- <form name="contact-form" ref="contactForm"> -->    
        <div class="flex mt-3">
          <UIcon name="i-mdi-numeric-1-box-multiple" class="mr-3" /> 
          <UFormGroup  description="독수리관련 제공된 정보는 유익하고 흥미로웠습니까?" size="md" class="text-black font-semibold" help="1번: 매우불만족 ~ 5번 매우만족">                    
            <UInputMenu type="text" name="C1" placeholder="번호선택" v-model="C1" :options="items" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>
        <div class="flex mt-5">
          <UIcon name="i-mdi-numeric-2-box-multiple" class="mr-3" /> 
          <UFormGroup  description="독수리에 대한 강좌를 듣고 내 생활에 도움이 되었습니까?" size="md" class="text-black font-semibold mb-5">                    
            <UInputMenu type="text" name="C2" placeholder="번호선택" v-model="C2" :options="items" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>
        <div class="flex mt-5">
          <UIcon name="i-mdi-numeric-3-box-multiple" class="mr-3" /> 
          <UFormGroup  description="자연생태보호의 필요성을 느꼈습니까?" size="md" class="text-black font-semibold mb-5">                    
            <UInputMenu type="text" name="C3" placeholder="번호선택" v-model="C3" :options="items3" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>
        <div class="flex mt-5">
          <UIcon name="i-mdi-numeric-4-box-multiple" class="mr-3" /> 
          <UFormGroup  description="해설사들의 해설이 도움이 되었습니까?" size="md" class="text-black font-semibold mb-5">                    
            <UInputMenu type="text" name="C4" placeholder="번호선택" v-model="C4" :options="items" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>
        <div class="flex mt-5">
          <UIcon name="i-mdi-numeric-5-box-multiple" class="mr-3" /> 
          <UFormGroup  description="강의 시간은 적절하였습니까?" size="md" class="text-black font-semibold mb-5">                    
            <UInputMenu type="text" name="C5" placeholder="번호선택" v-model="C5" :options="items" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>        
        <div class="flex mt-5">
          <UIcon name="i-mdi-numeric-6-box-multiple" class="mr-3" /> 
          <UFormGroup  description="다른 사람들에게 이 강좌를추천하고 하시겠습니까?" size="md" class="text-black font-semibold mb-5">                    
            <UInputMenu type="text" name="C6" placeholder="번호선택" v-model="C6" :options="items2" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>      
       
        <textarea name="message" rows="3" id="" placeholder="Cmessage" v-model="Cmessage" ></textarea>
        <div class="flex items-center w-[80%]">
          <UTooltip text="돌아가기"><UButton @click= "isBack" class="mr-5" icon="i-heroicons-chevron-left-16-solid"></UButton></UTooltip>
          <UButton v-if="!isLoading" type="submit" value="Submit" id="submitForm" block>submit</UButton>
          <UButton v-else :disabled="isLoading" loading type="submit" value="Submit" id="submitForm" block>submit</UButton>                 
        </div> 
      </UForm>
      <!-- <UButton to="https://forms.visme.co/formsPlayer/dm464467-vulture-survey" target="_blank">설문시작</UButton> -->
    </div>
    
  </div>
  
  </template>

<script setup>
  definePageMeta({
    layout: 'layout-login'
  })
  import { useFormStore } from '~/stores/form'
  import { storeToRefs } from 'pinia'
  const formStore = useFormStore() 
  const { R1, R2, R3, R4, R5, R6, B1, B2, B3, B4, Bmessage, C1, C2, C3, C4, C5, C6, Cmessage, isLoading } = storeToRefs(formStore)
  const toast = useToast()
  const router = useRouter();
  
  const items = ['1 매우불만족', '2 불만족', '3 보통', '4 만족', '5 매우만족']  
  const items2 = ['1 절대추천 안함', '2 추천 안함', '3 보통', '4 추천함', '5 적극추천함']
  const items3 = ['1 전혀 못 느낌', '2 못 느낌', '3 보통', '4 느낌', '5 매우 느낌']
  onMounted(() => {     
   isSummit()
})
  const isSummit = () => {        
    const config = useRuntimeConfig().public
    const scriptURL = config.spreadsheetUrl   
    const form = document.forms['contact-form']    
    form.addEventListener('submit', e => {
      e.preventDefault() 
      // if ( !C1.value || !C2.value || !C3.value || !C4.value || !C5.value || !C6.value ){
      //   toast.add({
      //   title: '모든 항목에 체크 해주세요.',
      //   color: 'red',
      //   timeout: '1500'
      // })
      //   return false
      // }
      isLoading.value = true
      // fetch(scriptURL, { method: 'POST', body: new URLSearchParams(formDatas) })     
      fetch(scriptURL, { method: 'POST', body: new URLSearchParams({
        'R1': R1.value,
        'R2': R2.value,
        'R3': R3.value,
        'R4': R4.value,
        'R5': R5.value,
        'R6': R6.value,
        'B1': B1.value,
        'B2': B2.value,
        'B3': B3.value,
        'B4': B4.value,
        'Bmessage': Bmessage.value,
        'C1': C1.value,
        'C2': C2.value,
        'C3': C3.value,
        'C4': C4.value,
        'C5': C5.value,
        'C6': C6.value,       
       'Cmessage': Cmessage.value,
       'createdAt': new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
      }) 
    })     
    
    // .then(Response => alert('성공적으로 제출 되었습니다. 설문에 응해주셔서 감사합니다.'))
    .then(() => {
        toast.add({
          title: '작성이 완료되었습니다.',
          description: '감사합니다. 제출중 입니다.!',
          type:'success',
          duration: 500,
          position: 'top-right',
          callback: onCallback
        })
      })
      // .then(() => { window.location.reload()} )
      .catch(error => console.error('Error', error.message))
    })
  } 
  function onCallback() {
    isLoading.value = false
    router.push('/survey/result')
  }
  function isBack() {
    router.back()
  }
 </script>

<style scoped> 
 .body {
    width: 100%;      
    background-image: url('/10.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .body::after {
    content: '';
    width: 100%;    
    background-color: black;
    opacity: 1;
  }
  .form-body {
    background-color: rgba(255, 255, 255, 0.01);
    /* backdrop-filter: blur(4px); */
    font-weight: 800;
  }
  .container {       
    margin: 0 auto;
    padding-top: 100px;    
    width:55%;
    padding: 20px;
    border: 1px solid #454444;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.8);    
    backdrop-filter: blur(2px);
    /* opacity: 0.9; */
  }
  @media screen and (max-width: 580px){   
    .container {
      width: 90%;
      padding: 10px;
      left:6%;
    }
  }
  h4 {
    margin-bottom: 10px;
    font-size: 24px;
    color: white;

  }
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }
  textarea {
    width: 100%;
    padding: 10px;
  }
  .input-gap {
    margin: 10px 50px 0;
    width: 50%;
    font-size: 20px;
  }
  
</style>