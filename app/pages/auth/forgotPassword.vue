<template>
  <div class="reset-password">
    <Modal v-if="state.modalActive" :modalMessage="state.modalMessage" v-on:close-modal="closeModal" />
    <Loading v-if="state.loading"/>
    <div class="form-wrap">
      <form class="reset">
        <h2 class="notosans-font">비밀번호 초기화</h2>
        <p class="notosans-font">비밀번호를 잃어버렸습니까? 이메일을 입력하세요 </p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="이메일" v-model="state.email">
            <img src="/Icons/envelope-regular.svg" class="icon" alt="">
          </div>
        </div>
        <UButton @click.prevent="resetEmailPassword" size="xl">초기화</UButton>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>    
  </div>
</template>

<script setup>
const { resetPassword } = useFirebaseAuthStore()

const state = reactive({
  email: '',
  modalActive: false,
  modalMessage: '',
  loading: null
})
const resetEmailPassword = () => {  
  state.loading = true
  resetPassword(state.email).then(() => {
    state.modalMessage = '가입한 이메일을 확인하시기 바랍니다.'
    state.loading = false
    state.modalActive = true
  }).catch(error => {
    state.modalMessage = error.message
    state.loading = false
    state.modalActive = true
    console.log(error.message)
  })
}
const closeModal = () => {
  state.modalActive = !state.modalActive
  state.email = '' 
  navigateTo('/auth/login')
}

</script>

<style scoped>
.reset-password {
  position: relative;
}
.form-wrap {    

}
.reset h2 {  
  margin-bottom: 8px;
}
.reset p {
  text-align: center;
  margin-bottom: 32px;
}
.icon {
  width: 15px;
}

.form-wrap {    
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
}
.login-register {
  margin-bottom: 32px;
}
.router-link {
  color: #000;
}
form {
 padding: 0 10px;
 position: relative;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 45%;

}
h2 {
  text-align: center;
  font-size: 32px;
  color: #303030;
  margin-bottom: 40px;
}
.inputs {
  width: 100%;
  max-width: 350px;
}
.input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}
.input input {
  width: 100%;
  border: none;
  background: #f2f7f6;
  padding: 4px 4px 4px 30px;
  height: 50px;
  &:focus {
    outline: none;
  }
}
.icon {
  width: 12px;
  position: absolute;
  left: 6px;
}
.forgot-password {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  margin: 16px 0 32px;
  border-bottom: 1px solid transparent;
  transition: 0.5s ease all; 
  &:hover {  
    border-color: #303030;  
}
}
.angle {
  display: none;
  position: absolute;
  background-color: #fff;
  transform: rotateZ(3deg);
  width: 60px;
  right: -30px;
  height: 101%;
}
.background {
  display: none;
  flex: 2;
  background-color: hsl(0, 0%, 100%);
  background-size: contain;
  background-image: url('/black_vulture_1000.png');  
  background-repeat: no-repeat;
  width: 100%;
  height: 90%;
  background-position: center;
  filter: blur(4px);
  &:hover {
    filter: blur(0px);
  }
}
.login-register {
  margin-bottom: 32px;
}

@media screen and (max-width: 699px) {
  
}
@media screen and (min-width: 700px) {
  
}
@media screen and (min-width: 800px) {
  
}
@media screen and (min-width: 900px) {
  .form-wrap {
    width: 100%;
  }
  .form {
    padding: 0 50px;
  }
  h2 {
    font-size: 40px;
  }
  .angle {
    width: 100%;
  }
  .background {
    display: initial;
  }
}
@media screen and (min-width: 1200px) {
  
}
</style>