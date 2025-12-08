<template>    
  <div class="body">   
    <div class="container">      
      <UForm name="contact-form" id="contact-form" class="mt-11 text-black font-semibold form-body">
      <!-- <form name="contact-form" ref="contactForm"> -->        
       
        <div class="">          
          <p class="mb-2">귀하의 성별은?</p>
          <div class="flex gap-5 mb-5">
            <URadio v-model="B1" v-for="method of methods" :key="method.value" v-bind="method" class="text-black font-semibold" required />            
          </div>                   
        </div>
        <div class="">          
          <p class="mb-2">귀하는 녹색에너지시민촉진포럼 회원입니까?</p>
          <div class="flex gap-5 mb-5">
            <URadio v-model="B2" v-for="member of members" :key="member.value" v-bind="member" class="text-black font-semibold" required />            
          </div>                   
        </div>
        <div class="border border-b-0 border-gray-400"></div>
        <div class="">          
          <p class="mb-2">귀하의 연령대는?</p>
          <div class="gap-1 mb-5">
            <URadio v-model="B3" v-for="method1 of methods1" :key="method1.value" v-bind="method1" class="text-black font-semibold" required />            
          </div>                   
        </div>
        <div class="border border-b-0 border-gray-400"></div>
        <div class="">          
          <p class="mb-2">귀하의 거주지역은?</p>
          <div class="gap-1 mb-5">
            <URadio v-model="B4" v-for="method2 of methods2" :key="method2.value" v-bind="method2" class="text-black font-semibold" required />            
          </div>                   
        </div>
        <div class="border border-b-0 border-gray-400"></div>
        <div class="">          
          <p class="mb-2">독수리학교를 알게된 경로는?</p>
          <div class="gap-1 mb-5">
            <URadio v-model="C1" v-for="method3 of methods3" :key="method3.value" v-bind="method3" class="text-black font-semibold" required />            
          </div>                   
        </div>
        <div class="border border-b-0 border-gray-400"></div>
        <div class="">          
          <p class="mb-2">독수리학교에 참석한 동기는?</p>
          <div class="gap-1 mb-5">
            <URadio v-model="C2" v-for="method4 of methods4" :key="method4.value" v-bind="method4" class="text-black font-semibold" required />            
          </div>                   
        </div>
        <div class="border border-b-0 border-gray-400"></div>
        <div class="flex mt-3">
          <UIcon name="i-mdi-numeric-1-box-multiple" class="mr-3" /> 
          <UFormGroup  description="독수리관련 제공된 정보는 유익하고 흥미로웠습니까?" size="md" class="text-black font-semibold" help="1번: 매우불만족 ~ 5번 매우만족">                    
            <UInputMenu type="text" name="A1" placeholder="번호선택" v-model="A1" :options="items" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>
        <div class="flex mt-5">
          <UIcon name="i-mdi-numeric-2-box-multiple" class="mr-3" /> 
          <UFormGroup  description="독수리에 대한 강좌를 듣고 내 생활에 도움이 되었습니까?" size="md" class="text-black font-semibold mb-5">                    
            <UInputMenu type="text" name="A2" placeholder="번호선택" v-model="A2" :options="items" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>
        <div class="flex mt-5">
          <UIcon name="i-mdi-numeric-3-box-multiple" class="mr-3" /> 
          <UFormGroup  description="자연생태보호의 필요성을 느꼈습니까?" size="md" class="text-black font-semibold mb-5">                    
            <UInputMenu type="text" name="A3" placeholder="번호선택" v-model="A3" :options="items" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>
        <div class="flex mt-5">
          <UIcon name="i-mdi-numeric-4-box-multiple" class="mr-3" /> 
          <UFormGroup  description="해설사들의 해설이 도움이 되었습니까?" size="md" class="text-black font-semibold mb-5">                    
            <UInputMenu type="text" name="A4" placeholder="번호선택" v-model="A4" :options="items" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>
        <div class="flex mt-5">
          <UIcon name="i-mdi-numeric-5-box-multiple" class="mr-3" /> 
          <UFormGroup  description="강의 시간은 적절하였습니까?" size="md" class="text-black font-semibold mb-5">                    
            <UInputMenu type="text" name="A5" placeholder="번호선택" v-model="A5" :options="items" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>
        
        <div class="flex mt-5">
          <UIcon name="i-mdi-numeric-6-box-multiple" class="mr-3" /> 
          <UFormGroup  description="다른 사람들에게 이 강좌를추천하고 하시겠습니까?" size="md" class="text-black font-semibold mb-5">                    
            <UInputMenu type="text" name="A6" placeholder="번호선택" v-model="A6" :options="items" icon="i-heroicons-face-smile-16-solid" class="mt-3 w-[200px]" required />
          </UFormGroup>
        </div>
        <div class="border border-b"></div>      
       
        <textarea name="message" rows="3" id="" placeholder="message" v-model="message" ></textarea>
        <UButton v-if="!isLoading" type="submit" value="Submit" id="submitForm" block>submit</UButton>
        <UButton v-else :disabled="isLoading" loading type="submit" value="Submit" id="submitForm" block>submit</UButton>
      </UForm>
      <UButton to="https://forms.visme.co/formsPlayer/dm464467-vulture-survey" target="_blank">설문시작</UButton>
    </div>
    
  </div>
  
  </template>

<script setup>
  import { useFormStore } from '~/stores/form'
  import { storeToRefs } from 'pinia'
  const formStore = useFormStore() 
  const { A1, A2, A3, A4, A5, A6, message, B1, B2, B3, B4, C1, C2, isLoading } = storeToRefs(formStore)
  const toast = useToast()
  const router = useRouter();
  
  const items = ['1 매우불만족', '2 불만족', '3 보통', '4 만족', '5 매우만족']
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
    { value: '3', label: '커뮤티티 활동' },
    { value: '4', label: '취미활동(사진촬영등)' },
    { value: '5', label: '가족활동' },
    { value: '6', label: '기타' }
  ]
  // const selected = ref(items[0])
  // const formDatas = reactive({
  //   A1: '',
  //   A2: '',
  //   A3: '',
  //   A4: '',
  //   A5: '',
  //   A6: '',
  //   message: '',
  //   email: '',
  //   B1: '',    
  //   B2: '',
  //   B3: '',
  //   C1: '',
  //   C2: '',
  //   C3: '',
  //   C4: '',
  //   C5: '',
  //   C6: '',
  // })

  //id: AKfycbwFA9X2gPK9bMVf9tyqjSILpa5jB8rhfzJ1l_09bT2cZAGpPf-5RXgg24HLVaNLlz7p

  onMounted(() => {     
   isSummit()
})
  const isSummit = () => {    
    const config = useRuntimeConfig().public
    const scriptURL = config.spreadsheetUrl   
    const form = document.forms['contact-form']    
    form.addEventListener('submit', e => {
      e.preventDefault() 
      if ( !B1.value & !B2.value & !B3.value & !B4.value, !C1.value, !C2.value ){
        alert('빈칸을 체크해주세요.')
        return false
      }
      isLoading.value = true
      // fetch(scriptURL, { method: 'POST', body: new URLSearchParams(formDatas) })     
      fetch(scriptURL, { method: 'POST', body: new URLSearchParams({
        'A1': A1.value,
        'A2': A2.value,
        'A3': A3.value,
        'A4': A4.value,
        'A5': A5.value,
        'A6': A6.value,
        'B1': B1.value,
        'B2': B2.value,
        'B3': B3.value,
        'B4': B4.value,
        'C1': C1.value,
        'C2': C2.value,
        // 'C3': C3.value,
        // 'C4': C4.value,
        // 'C5': C5.value,
        // 'C6': C6.value,       
       'message': message.value,
       'createdAt': new Date()
      }) 
    })     
    
    // .then(Response => alert('성공적으로 제출 되었습니다. 설문에 응해주셔서 감사합니다.'))
    .then(() => {
        toast.add({
          title: '성공',
          description: '감사합니다. 제출중 입니다.!',
          type:'success',
          duration: 800,
          position: 'top',
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
 </script>

<style scoped> 
 .body {
    width: 100%;      
    /* background: linear-gradient(to left top, #fb3, #5ba); */
    /* background-image: url('/public/Vector1.svg'); */
    /* background-repeat:repeat;     */
    background-image: url('/public/3.png');
   
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
    background-color: rgba(255, 255, 255, 0.5);    
    backdrop-filter: blur(10px);
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