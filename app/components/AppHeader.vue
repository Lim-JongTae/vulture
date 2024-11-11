<template>  
  <header class="relative border-black/20 shadow-lg backdrop-blur-md dark:bg-gray-800 overflow-hiddens">    
      <nav class="flex items-center justify-between mx-auto container">
        <div class="hidden md:block branding">          
          <NuxtLink to="/" class="flex items-center ml-3">
            <NuxtImg src="/logo.png" width="36px" format="Webp" />
            <span class="jua-font text-2xl ml-3 text-bold ">울산독수리</span>
          </NuxtLink>
        </div>
        <div class="nav-links">
          <ul v-show="!mobile" class="flex flex-col md:space-x-4 md:flex-row gap-4 pl-10">
            <NuxtLink to="/" class="link link-dark">Home</NuxtLink>
            <NuxtLink to="/views/blogs" class="link link-dark" >Blogs</NuxtLink>
            <NuxtLink to="/createpost" class="link link-dark" >Create Post</NuxtLink>
            <NuxtLink to="/auth/login" class="link link-dark" >Login/Register</NuxtLink>
            <div>{{ postStore.profileInitials }}fff</div>
            <UButton @click="signOut">Sign out</UButton>
          </ul>
        </div> 
        </nav>
        <NuxtImg 
          v-show="mobile"
          src="/Icons/bars-regular.svg"
          class="menu-icon dark:fill-white"          
          @click="toggleMobileNav"               
        />
        <Transition name="mobile-nav">          
          <ul v-show="mobileNav" class="mobile-nav">
            <NuxtLink to="/" class="mobile-link link-dark">Home</NuxtLink>
            <NuxtLink to="/views/blogs" class="mobile-link link-dark" >Blogs</NuxtLink>
            <NuxtLink to="/post" class="mobile-link link-dark" >Create Post</NuxtLink>
            <NuxtLink to="/auth/login" class="mobile-link link-dark" >Login/Register</NuxtLink>
          </ul>
        </Transition>
            
      <div class="absolute -top-5 right-3">
        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly>
    </div> 
  </header> 
</template>

<script>
export default {  
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windownWindow: null
    }
  },
  // created() {
  //   window.addEventListener('resize', this.checkScreen)
  //     this.checkScreen()
  // },
  methods: {
    checkScreen() {
      this.windownWindow = window.innerWidth
      if (this.windownWindow <= 750) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    },      
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
  }
  }  
  }
</script>
<script setup>
import { usePostStore } from '~/stores/posts'
const credentials = ref()
const postStore = usePostStore()
// const credentials = storeToRefs(postStore.credentials)
const signOut = async () => {
  credentials.value = await signOutUse()
  console.log('Logout:', credentials)
}
</script>

<style scoped>
  header {
    @apply bg-slate-50 p-1 z-20 fixed left-0 right-0 mb-20 block
  }  
  nav {
    @apply flex py-10 px-0
  }
  .branding {
    @apply flex items-center
  }
  .link {
    @apply p-1 hover:bg-gray-200 hover:rounded-lg md:text-base duration-300 ease-in;
  }
  .link-dark {
    @apply text-base font-semibold p-2 hover:bg-gray-200 hover:rounded-xl hover:text-gray-800 hover:dark:text-gray-800;
  }
  .nav-links {
    @apply relative flex flex-1 items-center justify-end
  }
  .mobile-nav {
    @apply p-8 w-[40%] flex flex-col bg-gray-500 h-full top-0 left-0 text-gray-800 z-50    
  }
  .mobile-nav .link {
    @apply p-5 text-white;
  }
  .menu-icon {
    @apply cursor-pointer absolute top-14 right-14 h-10 w-auto
  }
  .mobile-link {
    @apply py-6 px-0 text-white
  }
  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }
  .mobile-nav-enter {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0);
  }
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }


</style>