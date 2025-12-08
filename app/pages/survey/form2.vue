<template>    
  <div class="body">   
    <div class="container">      
      <div class="flex justify-center items-center text-green-700">
          <UIcon name = "i-heroicons-users" class="w-6 h-6 mr-4 mb-4" />
          <div class="text-center underline text-xl mb-4">행사장에 관한 질문 입니다..</div>
      </div>
      <UForm name="contact-form" id="contact-form" class="mt-11 text-black font-semibold form-body">
      <!-- <form name="contact-form" ref="contactForm"> -->    
        <div class="flex mt-3">
          <UIcon name="i-mdi-numeric-1-box-multiple" class="mr-3" /> 
          <UFormGroup  description="독수리학교 장소는 어떻게 생각하십니까?" size="md" class="text-black font-semibold" help="1번: 매우불만족 ~ 5번 매우만족">                    
            <UInputMenu type="text" name="B1" placeholder="번호선택" v-model="B1" :options="items" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>
        <div class="flex mt-5">
          <UIcon name="i-mdi-numeric-2-box-multiple" class="mr-3" /> 
          <UFormGroup  description="독수리학교 편리시설(의자,책상등)은 어떻게 생각하십니까?" size="md" class="text-black font-semibold mb-5">                    
            <UInputMenu type="text" name="B2" placeholder="번호선택" v-model="B2" :options="items" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>
        <div class="flex mt-5">
          <UIcon name="i-mdi-numeric-3-box-multiple" class="mr-3" /> 
          <UFormGroup  description="독수리학교 장소의 접근성은 어떻게 생각하십니까?" size="md" class="text-black font-semibold mb-5">                    
            <UInputMenu type="text" name="B3" placeholder="번호선택" v-model="B3" :options="items" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>
        <div class="flex mt-5">
          <UIcon name="i-mdi-numeric-4-box-multiple" class="mr-3" /> 
          <UFormGroup  description="독수리학교에서 사용된 교구재(필기구,독수리모형 등)는 어떻게 생각하십니까 ?" size="md" class="text-black font-semibold mb-5">                    
            <UInputMenu type="text" name="B4" placeholder="번호선택" v-model="B4" :options="items" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>       
        <textarea name="Bmessage" rows="3" id="" placeholder="기타 하고 싶은 말씀은?" v-model="Bmessage" ></textarea>
        <div class="flex items-center w-[80%]">
          <UTooltip text="되돌아가기"><UButton @click= "isBack" class="mr-5" icon="i-heroicons-chevron-left-16-solid"></UButton></UTooltip>
          <UButton @click= "isNext" block>계 속</UButton>
        </div>     
      </UForm>
      
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
  const { B1, B2, B3, B4, Bmessage } = storeToRefs(formStore)
  const toast = useToast()
  const router = useRouter();
  
  const items = ['1 매우불만족', '2 불만족', '3 보통', '4 만족', '5 매우만족']  
  function isBack() {
    router.back()
  }
  function isNext() {
    if (!B1.value || !B2.value || !B3.value || !B4.value) {
      toast.add({
        title: '모든 항목에 체크 해주세요.',
        color: 'red',
        timeout: '1500'
      })
      return false
    }    
    router.push('/survey/form3')
  }
 </script>

<style scoped> 
 .body {
    width: 100%;      
    /* background: linear-gradient(to left top, #fb3, #5ba); */
    /* background-image: url('/public/Vector1.svg'); */
    /* background-repeat:repeat;     */
    background-image: url('/11.jpg');
   
    /* background-color: antiquewhite; */
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