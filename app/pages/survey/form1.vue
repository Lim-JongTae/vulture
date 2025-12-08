<template>    
  <div class="body">   
    <div class="container">      
      <UForm name="contact-form" id="contact-form" class="mt-11 text-black font-semibold form-body">
      <!-- <form name="contact-form" ref="contactForm"> -->   
        <div class="flex justify-center items-center text-green-700">
          <UIcon name = "i-heroicons-users" class="w-6 h-6 mr-4 mb-4" />
          <div class="text-center underline text-lg mb-4">응답자에 대한 질문입니다.</div>
        </div>
        <div class="">          
          <p class="mb-2">귀하의 성별은?</p>
          <div class="flex gap-5 mb-5">
            <URadio v-model="R1" v-for="method of methods" :key="method.value" v-bind="method" class="text-black font-semibold" required />            
          </div>                   
        </div>
        <div class="border border-b-0 border-gray-400"></div>
        <div class="">          
          <p class="mb-2">귀하는 녹색에너지시민촉진포럼 회원입니까?</p>
          <div class="flex gap-5 mb-5">
            <URadio v-model="R2" v-for="member of members" :key="member.value" v-bind="member" class="text-black font-semibold" required />            
          </div>                   
        </div>
        <div class="border border-b-0 border-gray-400"></div>
        <div class="">          
          <p class="mb-2">귀하의 연령대는?</p>
          <div class="gap-1 mb-5">
            <URadio v-model="R3" v-for="method1 of methods1" :key="method1.value" v-bind="method1" class="text-black font-semibold" required />            
          </div>                   
        </div>
        <div class="border border-b-0 border-gray-400"></div>
        <div class="">          
          <p class="mb-2">귀하의 거주지역은?</p>
          <div class="gap-1 mb-5">
            <URadio v-model="R4" v-for="method2 of methods2" :key="method2.value" v-bind="method2" class="text-black font-semibold" required />            
          </div>                   
        </div>
        <div class="border border-b-0 border-gray-400"></div>
        <div class="">          
          <p class="mb-2">독수리학교를 알게된 경로는?</p>
          <div class="gap-1 mb-5">
            <URadio v-model="R5" v-for="method3 of methods3" :key="method3.value" v-bind="method3" class="text-black font-semibold" required />            
          </div>                   
        </div>
        <div class="border border-b-0 border-gray-400"></div>
        <div class="">          
          <p class="mb-2">독수리학교에 참석한 동기는?</p>
          <div class="gap-1 mb-5">
            <URadio v-model="R6" v-for="method4 of methods4" :key="method4.value" v-bind="method4" class="text-black font-semibold" required />            
          </div>                   
        </div>        
        <UButton block @click="isNext">계 속</UButton>      
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
  // formStore.$reset()
  const { R1, R2, R3, R4, R5, R6 } = storeToRefs(formStore)
  const toast = useToast()
  const router = useRouter(); 
  
  const methods = [
    { value: '1', label: '남성' },
    { value: '2', label: '여' }
  ]
  const members = [
    { value: '1', label: '예' },
    { value: '2', label: '아니오' }
  ]
  const methods1 = [
    { value: '1', label: '10대' },
    { value: '2', label: '20대' },
    { value: '3', label: '30대' },
    { value: '4', label: '40대' },
    { value: '5', label: '50대' },
    { value: '6', label: '60대 이상' },
  ]
  const methods2 = [
    { value: '1', label: '울산시' },
    { value: '2', label: '경상북도' },
    { value: '3', label: '경상남도' },
    { value: '4', label: '서울/경기' },
    { value: '5', label: '기타' }
  ]
  const methods3 = [
    { value: '1', label: '지인소개' },
    { value: '2', label: '밴드' },
    { value: '3', label: '카카오톡' },
    { value: '4', label: '녹색에너지 문자' },
    { value: '5', label: '기타' }
  ]
  const methods4 = [
    { value: '1', label: '독수리와 생태환경에 대한 관심' },
    { value: '2', label: '자녀교육' },
    { value: '3', label: '커뮤니티 활동' },
    { value: '4', label: '취미활동(사진촬영등)' },
    { value: '5', label: '가족활동' },
    { value: '6', label: '기타' }
  ]

  function isNext() {
    if ( !R1.value || !R2.value || !R3.value || !R4.value || !R5.value || !R6.value) {
      toast.add({
        title: '모든 항목에 체크 해주세요.',
        color: 'red',
        timeout: '1500'
      })
      return false
    }    
    router.push('/survey/form2')
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
    background-color: rgba(255, 255, 255, 0.7);    
    backdrop-filter: blur(3px);
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