<template>
  <div>
  <div class="mt-50 pt-30 text-5xl">Secret</div>
  <div v-if="firebaseUser">
    <ClientOnly >
        <pre>
          {{ firebaseUser.uid }}
        </pre>
    </ClientOnly>
  </div>
  <div v-else>User is signed out</div>
</div>
</template>

<script setup>
const firebaseUser = useFirebaseUser()
definePageMeta({
  middleware: ['auth'],
})
</script>

<style scoped>

</style>