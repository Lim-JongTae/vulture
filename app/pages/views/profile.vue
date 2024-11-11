<template>
  <div class="poppins-font top">     
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal"/>
    <div class="container1">       
      <!-- <h1 class="jua-font">회원정보</h1> -->
      <div class="form-box register" >
        <div class="form1">
          <div class="profile-info">
            <div class="initials nanum-font">{{ pInitials }}</div>
            <div class="admin-badge" v-if="pAdmin">
              <UIcon name="i-mdi-crown" class="icon w-7 h-7" />
              <span class="mx-auto">관리자 계정</span>
            </div>
            <div class="admin-badge" v-else >
              <UIcon name="i-mdi-account-circle" class="icon w-7 h-7" />
              <span class="mx-auto nanum-font">사용자 계정</span>
            </div>
          <div class="input-box">                       
            <input type="text" placeholder="username" id="username" v-model="user.value" />                                
            <UIcon class="input-box-icon" name="i-mdi-account-circle"></UIcon>          
          </div>          
          <div class="input-box">                
            <input type="email" disabled placeholder="E-mail" id="email" v-model="email.value" />                  
            <UIcon class="input-box-icon" name="i-mdi-email"></UIcon>           
          </div>         
          <UButton @click="updateProfile" color="#7494ec" class="btn login-btn nanum-font"><span class="mx-auto">변경</span></UButton>
         </div>
        </div>    
      </div>      
      <div class="toggle-box">
        <div class="toggle-panel toggle-left">
          <h1 class="nanum-font">회원정보 변경</h1>         
        </div>
       
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'layout-login'
})
const user = ref('');
const email = ref('');
const modalActive = ref(false)
const modalMessage = ref('성공적으로 변경 되었습니다.')

const useStore = useUsersStore()
const { pEmail, pAdmin, pdisplayName, pInitials }= storeToRefs(useStore)

const { $auth } = useNuxtApp()
const isActive = ref(false);

const updateProfile = () => {
  useStore.updateUser(user)
  modalActive.value = true  
}
const closeModal = async () => {
  modalActive.value = false
  
  await navigateTo('/', {
    replace: true
  })
  .then(() => {
    location.reload()
    })
}
user.value = pdisplayName
email.value = pEmail
const username = computed({
  get() {
    return useStore.pdisplayName
  },
  set(payload) {
    useStore.changeName(payload)
    console.log('userchange',payload)    
  },
})



</script>

<style scoped>

.top {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(90deg, #e2e2e2, #c9d6ff)
}
.container1 {
  position: relative;
  width: 750px;
  height: 850px;
  background: #fff;
  border-radius: 30px;
  box-shadow: rgba(0,0,0,0.2);
  overflow: hidden;
  margin: 20px;
}
.form-box {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: #fff;  
  display: flex;
  align-items: center;
  color: #333;
  padding: 40px;
  text-align: center;
  justify-content: center;
  z-index: 1;
  transition: 0.6s ease-in-out 1.2s, visibility 0s 1s;
}

.container1.active .form-box {
  right: 50%;
}
.form-box.register {
  visibility: hidden;
}
.container1 .form-box.register {
  visibility: visible;
}
.form1 {
  width: 100%;
  margin-top: -50px;
}
.container1 h1 {
  font-size: 36px;
  margin: -10px 0;
}
.input-box {
  position: relative;
  margin: 30px;  
}
.input-box input {
  padding: 13px 50px 13px 20px;
  background: white;
  width: 100%;  
  background: #eee;
  border-radius: 8px;
  border: none;
  outline: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;
}
.input-box input::placeholder {
  color: #888;
  font-weight: 400;
}
.input-box .input-box-icon{
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  font-size: 20px;  
}
.forgot-link {
  margin: -15px 0 15px 0
}
.forgot-link .forgot-link-to {
  font-size: 14.5px;
  color: #333;
  text-decoration: none;    
}
.forgot-link .forgot-link-to:hover {
  font-weight: bold;
  color: #7494ec;  
  text-decoration-line: underline;
  transition: 0.8s ease-in-out;
  }
.btn {
  width: 100%;
  height: 48px;
  background: #7494ec;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0,0.1);
  border: none;
  font-size: 16px;
  color: #fff;
}
.container1 .text-p {
  font-size: 14.5px;
  margin: 15px 0;
}
.login-btn {
  width: 230px;
  border: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}
.toggle-box {
  position: absolute;
  width: 100%;
  height: 100%;  
}
.toggle-box::before {
  content: "";
  position: absolute;
  left: -250%;
  width: 300%;
  height: 100%;
  background: #7494ec;  
  border-radius: 150px;
  z-index: 2;
  transition: 1.5s ease-in-out;;
}
.container1.active .toggle-box::before {
  left: 50%;
}
.toggle-panel {
  position: absolute;
  width: 50%;
  height: 100%;  
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: 0.6s ease-in-out;
}
.toggle-panel.toggle-left {
  left: 0;
  transition-delay: 1.2s;
}
.container1.active .toggle-panel.toggle-left {
  left: -50%;
  transition-delay: 0.6s;
}
.toggle-panel.toggle-right {
  right: -50%;
  transition-delay: 0.6s;
}
.container1.active .toggle-panel.toggle-right {
  right: 0;
  transition-delay: 1.2s;
}
.toggle-panel p {
  margin-bottom: 20px;
}
.toggle-panel .btn {
  width: 160px;
  height: 46px;
  background: transparent;
  border: 2px solid #fff;
  box-shadow: none;
}

/* .profile-info {
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  padding: 32px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 32px auto;
} */
.initials {
  position: initial;
  width: 80px;
  height: 80px;
  font-size: 32px;
  background-color: #7494ec;
  color: #fff;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 50px;
}
.admin-badge {
  display: flex;
  align-self: center;
  color: #fff;
  font-size: 16px;
  padding: 8px 24px;
  border-radius: 8px;
  background-color: #7494ec;
  margin: 16px 0;
  text-align: center;
  text-transform: capitalize;
}
.icon {    
  margin-right: 8px;
  color: black;    
}
.admin-badge span {
  line-height: 2rem;
}
@media screen and (max-width: 650px) {
  .form1 {
    max-height: 750px;
    height: 100%;
  }
  .form1 h1 {
   float: left;
   margin-left: 47px;
   font-size: x-large;
 
  } 
  .container1 {
    height: calc(100vh-20px);   
  }
  .form-box {    
    width: 100%;
    height: 70%;
    top: 25%;
  }
  .container1.active .form-box {
    right: 0;
    top: 22%;
    /* bottom: 32%; */
  }
  .toggle-box::before {
    left: 0;
    top: -275%;
    width: 100%;
    height: 300%;
    border-radius: 20vw;
  }
  .container1.active .toggle-box::before {
    left: 0;
    top: 70%;
  }
  .toggle-panel {    
    width: 100%;
    height: 30%;
  }
  .toggle-panel.toggle-left {
    top: 0;
  }
  .container1.active .toggle-panel.toggle-left {
    left: 0;
    bottom: -30%;
  }
  .toggle-panel.toggle-right {
    right: 0;
    bottom: -30%;
  }
  .container1.active .toggle-panel.toggle-right {
    bottom: 0;
  }
  .resister-btn {
    top: -7%;
  }   
  .input-box input {
    margin-top: 5px;
   
  }
}
@media  screen and (max-width: 400px) {
  .form-box {
    padding: 20px;
  }
  .toggle-panel h1 {
    font-size: 30px;
  }
}
</style>