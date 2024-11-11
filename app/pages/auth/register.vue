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
          <img src="/Icons/user-alt-light.svg" class="icon" />
          </div>            
          <div class="input">
            <input type="email" placeholder="이메일" v-model="email" />
            <img src="/Icons/envelope-regular.svg" class="icon" />
          </div>               
          <div class="input">
              <input type="password" placeholder="비밀번호" v-model="password" />
              <img src="/Icons/lock-alt-solid.svg" class="icon" />
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
    <div class="background">fff</div>
  </div>
</template>
<script>
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

export default {
  data() {
    return {
      username: '',
      email:'' ,
      password: '',
      rePassword: '',    
      error: true,
      errorMsg: '',
      loading: null
    }
  },
methods: {
  async register() {
    const { $auth, $db } = useNuxtApp();
    if (
      this.email !== '' &&
      this.password !== '' &&
      this.rePassword === this.password &&
      this.username !== ''      
    ) {
      this.error = false
      this.errorMsg = ''      
            
      const router = useRouter();         
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
    
      // const dataBase = $db.collection('users').doc(result.user.uid)         
      
       
      // await dataBase.setDoc({
      //   username: this.username,
      //   email: this.email,
      //   password: this.password,
      //   createdAt: new Date()
      // }).then(function() {
      //   console.log('Success Upload')
      // })
      useToast().add({description:'계정생성 중~', color: 'green'})
      router.push({ path: '/'})
      return
    }
    this.error = true;
    this.errorMsg = "빈칸이 없는지 확인하세요~";
    useToast().add({description:'빈칸이 없는지 확인하세요~', color: 'red'})
    return
}}

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
  filter: blur(2px);
  &:hover {
    filter: blur(0px);
  }
}
.login-register {
  margin-bottom: 32px;
}

@media screen and (min-width: 1200px) {
  
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