<template>
  <div class="admin">
    <div class="container">        
        <div class="admin-info">
            <h2>관리자 등록</h2>
            <div class="input">
                <input placeholder="관리자 계정 이메일을 입력하세요!" type="text" id="addAdmins" v-model="adminEmail"/>
            </div>
            <span>{{ functionMsg }}</span>
            <button @click="addAdmin" class="button">제출</button>
        </div>
    </div>
  </div>
</template>

<script setup>

import { httpsCallable } from 'firebase/functions';
const adminEmail = ref('')
const functionMsg = ref('')
const addAdmin = async () => {
  const { $functions } = useNuxtApp()
  try{
    const addAdmin = httpsCallable($functions, 'addAdminRole')
    const result = await addAdmin({ email: adminEmail.value })
    functionMsg.value = result.data.message
    console.log('admin :', adminEmail.value)     
    }catch(error){
      console.log(error)
      alert('계정을 확인 바랍니다')}
  }

</script>

<style scoped>
.container {
  max-width: 1000px;
  padding: 100px 25px;
  }
.container h2 {
  text-align: center;
  margin-bottom: 16px;
  font-weight: 300;
  font-size: 32px;
}

.admin-info {
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    padding: 32px;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 32px auto;
}
.admin-info span {
  font-size: 14px;
}

.input {
    margin: 16px 0;
}
.input label {
  font-size: 14px;
  display: block;
  padding-bottom: 6px;
}
input {
  width: 100%;
  border: none;
  background-color: #f2f7f6;
  padding: 8px;
  height: 50px;
}
@media (min-width: 900px) {
  input:focus{
    outline: none;
  }
}
button {
    align-self: center;
}                      
</style>