<template>
   
  <div class="text">
    <h1 class="container">TEST PAGE</h1>
    <view-post />
    <P> porro inventore dolore doloremque atque minus consequuntur autem culpa laudantium error rerum, incidunt iusto assumenda maxime reiciendis corrupti facilis dolorem unde. Cumque iure facilis vero.
    Quas, voluptatum! Tempora, mollitia autem ab quis odio nemo nobis cumque neque voluptatibus officia facilis ad dolores vel blanditiis numquam hic eveniet inventore quia itaque quaerat dolor recusandae! Autem, illo.
    Voluptatum deleniti rem, sit iste amet qui ipsa, consequuntur commodi sapiente in cupiditate est ipsum aperiam quibusdam similique! Et non, architecto vitae sit facere atque nobis ex! Corporis, perspiciatis deleniti?
    Reprehenderit exercitationem, obcaecati tenetur, cum nostrum perspiciatis aliquid eius eos possimus corrupti earum veniam magni corporis. Odit at aliquid ex in sit optio quis, harum, fugiat et consequuntur minima architecto?</P>
    <ClientOnly >
      <pre>
        {{ firebaseUser }}
      </pre>
    </ClientOnly>
    <p><NuxtLink to="/secret">Go to secret page</NuxtLink></p>
   
    <h1>{{ count }}</h1>
    <button @click="incrementNum" class="text-center h-[20px]">+</button>
    <button @click="decrementNum" class="text-center h-[20px]">-</button>

    <h1><button>{{ countDouble }}</button></h1>
    <textarea v-model="profileId">{{ profileId }}</textarea>
    <hr>
    <UInput type="number" v-model="count" />
    <div>{{ postStore.addUser }}</div>
  </div>


</template>

<script setup>
// const config = useRuntimeConfig()
// console.log('apiKey:', config.public.FIREBASE_API_KEY)
  
import { useTestStore } from '~/stores/test';
const firebaseUser = useFirebaseUser()
const firebaseUid = firebaseUser.uid
const testStore = useTestStore()
const postStore = usePostStore()
const { count, countDouble } = storeToRefs(testStore)
const { incrementNum, decrementNum } = testStore
const { profileId } = storeToRefs(postStore)
const test = postStore.profileId
console.log('test', test)


</script>

<style scoped>

</style>