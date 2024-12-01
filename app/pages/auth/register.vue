<template>
  <div class="form-wrap">
    <form class="register">      
      <p class="login-register notosans-font">회원 가입자 입니까? 
       <UButton><NuxtLink class="router-link" to="/auth/register">로그인</NuxtLink></UButton>
    </p>
      <h3>계정을 만들겠습니까?</h3>
      <div class="inputs">              
        <div class="input">
          <input type="text" placeholder="사용자 이름" v-model="username" />
          <UIcon name="i-heroicons-user-circle-16-solid" class="icon" />
          </div>            
          <div class="input">
            <input type="email" placeholder="이메일" v-model="email" />
            <UIcon name="i-heroicons-envelope-16-solid" class="icon" />
          </div>               
          <div class="input">
              <input type="password" placeholder="비밀번호" v-model="password" />
              <UIcon name="i-heroicons-lock-closed-20-solid" class="icon" />
          </div>
          <div class="input">                    
              <input type="password" placeholder="비밀번호 확인" v-model="rePassword" />
              <UIcon name="i-heroicons:key" class="icon-1" />
          </div>
        <div v-show="error" class="error">{{ errorMsg }}</div>
      </div>            
      <UButton @click.prevent="register">등록</UButton>
      <Loading v-if="loading" />
      <div class="angle"></div>
      </form>
    <div class="background"></div>
  </div>
</template>
<script setup>
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
const toast = useToast()
const username = ref('')
const email = ref('')
const password = ref('')
const rePassword = ref('')
const error = ref(true)
const errorMsg = ref('')
const loading = ref(null)


const register = async () => {   
    const { $auth, $db } = useNuxtApp();
    if (
      email.value !== '' &&
      password.value !== '' &&
      rePassword.value === this.password &&
      username.value !== ''      
    ) {
      error.value = false
      errorMsg.value = ''                  
            
      const createUser = await createUserWithEmailAndPassword($auth, this.email, this.password)
      const result = await createUser    
      //db
      const data = await setDoc(doc($db, 'Users', result.user.uid), {
        username: this.username,
        email: this.email,
        password: this.password,
        createdAt: new Date()
      }).then(function() {
        console.log('Success Upload')
      })    
      toast.add({
        title:'계정생성 중~', 
        timeout: 2000,
        color: 'green',
        callback: async () => {
          await navigateTo('/')
        }
      })    
      return
    }
    this.error = true;
    this.errorMsg = "빈칸이 없는지 확인하세요~";
    toast.add({
        title:'빈 칸이 없는지 확인하세요~', 
        timeout: 2000,
        color: 'red',
        callback: async () => {
          await navigateTo('/auth/register')
        }
      })    
    return
}



</script>

<style scoped>
.register h2 {
  max-width: 350px;
}
.icon-1 {
  width: 16px;
  position: absolute;
  left: 6px;
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
}
.input input:focus {
  outline: none;
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
}
.forgot-password :hover {  
    border-color: #303030;  
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
  filter: blur(2px);
}
.login-register {
  margin-bottom: 32px;
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
</style>