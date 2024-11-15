<template>
  <div class="body">
    <header class="header">
      <nav class="nav container">
        <div class="nav_data">
          <NuxtLink to="/" class="logo_text">
            <NuxtImg class="nav_logo" src="/logo.png" width="30px" format="Webp"></NuxtImg>
            <span class="lobster-regular text-3xl ml-2 text-white with-text">With</span>
            <span class="bagel-fat-one-regular text-3xl ml-2 text-gray-400 ulsan-text">울산독수리</span>
          </NuxtLink>
          <div class="nav_toggle" id="nav-toggle">
            <UIcon name="i-heroicons-bars-3-16-solid" class="nav_burger w-8 h-8 -mr-12" id= "menu-icon"/>
            <UIcon name="i-heroicons-x-mark-16-solid" class="nav_close w-8 h-8 mr-5" id= "close-icon" />
          </div>
        </div>
        <!-- NAV MENU -->
         <div class="nav_menu" id="nav-menu">
          <ul class="nav_list">
            <li>
              <NuxtLink to="/" class="nav_link">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/views/blogs" class="nav_link">Blogs</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/createPost" class="nav_link" v-if="pAdmin" >Create Post</NuxtLink>
            </li>
            <li class="dropdown_item">
              <div class="nav_link">
                About Us<UIcon name="i-heroicons-chevron-down-16-solid" class="dropdown_arrow w-7 h-7"/>
              </div>
              <ul class="dropdown_menu">
                <li>
                  <NuxtLink to="/about" class="dropdown_link"><UIcon name="i-heroicons-users-solid" class="font-semibold w-5 h-5" />About Us</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/donation" class="dropdown_link"><UIcon name="heroicons-gift" class="font-semibold w-5 h-5" />후원하기</NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink to="/auth/login" class="nav_link" v-if="!user" >Login/Register</NuxtLink>      
            </li>
          </ul>   
         </div>
      </nav>
      <!-- Profile Menu -->
    <div v-if="user" @click="toggleProfileMenu" class="profile" ref="profile">
      <span class="nanum-font">{{ pInitials }}</span>
      <div v-show="profileMenu" class="profile-menu">
        <div class="info">
          <p class="initials">{{ pInitials }}</p>
          <div class="right">                  
            <p>{{ pdisplayName }}</p>
            <p>{{ pEmail }}</p>
          </div>
        </div>
        <div class="options">
          <div class="option">
            <NuxtLink to="/views/profile" class="option">
              <UIcon name="i-heroicons-user-16-solid" class="w-6 h-6 text-amber-400" />
              <p>회원정보수정</p>
            </NuxtLink>
          </div>
            <div class="option">
              <NuxtLink to="/views/admin" v-if="pAdmin" class="option">
                <UIcon name="i-mdi-crown" class="w-6 h-6 text-amber-500" />
                <p>관리자계정</p>
              </NuxtLink >
            </div>  
            <div @click="usersStore.logout" class="option">
              <UIcon name="i-heroicons-arrow-right-start-on-rectangle-16-solid" class="w-6 h-6 text-amber-600" />
              <p>로그 아웃</p>
            </div>
          </div>
       </div>
    </div> 
    <!-- profile end --> 
    <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>     
    </header>
  </div>
</template>

<script setup>
  import { useUsersStore } from '~/stores/useUsers'
  const profileMenu = ref(false)
  const usersStore = useFirebaseAuthStore()
  const useStore = useUsersStore()
  const { pEmail, pAdmin, pdisplayName, pInitials } = storeToRefs(useStore)
  const profile = ref(null)
  const user = computed(() => useStore.userId) 
  const admin = computed(() => useStore.pAdmin)
  const toggleProfileMenu = (event) => {  
    if (event.target === profile.value)
  profileMenu.value = !profileMenu.value
  }
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
      toggle.classList.toggle('show-icon')     
    })
  }
  onMounted (() => {    
    showMenu('nav-toggle', 'nav-menu')
  })
</script>

<style scoped>
.body {
  background-color: var(--body-color);
}
/* .container {
  max-width: 1200px;
  width: 100%;
  margin-inline: 1.5rem;
} */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--black-color);
  box-shadow: 0 2px 16px hsla(220, 32%, 8%, 0.3);
  z-index: var(--z-fixed)
}
/* ================ NAV ================ */
.nav {
  height: var(--header-height);
}
.nav_logo, .nav_burger, .nav_close {
  color: #fff;
}
.nav_toggle {
  position: relative;    
  
}
/* .nav_burger, .nav_close {
  position: absolute; 
  width: max-content;
  height: max-content;
  inset: 0;
  margin: auto;
  cursor: pointer;
  transition: opacity 0.1s, transform 0.4s;
} */
.nav_close {
  opacity: 0;
}
.nav_data {
  height: 100%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav_logo {
  display: inline-flex;
  align-items: center;
  column-gap: 0.25rem;  
}
.nav_link {
  color: #fff;
  background-color: var(--black-color);
  font-weight: var(--font-semi-bold);
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between ;
  align-items: center;
  transition: background-color 0.3s;
}
.nav_link:hover {
  background-color: var(--black-color-light);
} 
/* Show menu */
.show-menu {
  top: 3.5rem;
  opacity: 1;
  pointer-events: initial;
}
.show-icon .nav_burger {
  opacity: 0;
  transform: rotate(90deg);
}
.show-icon .nav_close {
  opacity: 1;
  transform: rotate(90deg);
}

/* =============== DropDown ==============*/
.dropdown_item {
  cursor: pointer;
}
.dropdown_arrow {
  font-size: 1.25rem;
  font-weight: initial;
  transition: transform 0.4s;
}
.dropdown_link {
  padding: 1.25rem 1.25rem 1.25rem 2.5rem;
  color: #fff;
  background-color: var(--black-color-light);
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  transition: background-color 0.3s;
  font-weight: var(--font-semi-bold);
 
}
.dropdown_link:hover {
  background: var(--black-color);
}
.dropdown_menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
}

/* show dropdown ment & submenu */
.dropdown_item:hover .dropdown_menu {
  max-height: 1000px;
  transition: max-height 0.4s ease-in;
}
.dropdown_item:hover .dropdown_arrow {
  transform:rotate(180deg)
}
/*======================= Break Point =======================*/
@media screen and (max-width: 1118px) {
  .nav_menu {
    position: absolute;
    top: 2.5rem;
    left: 0;
    width: 100%;   
    height: calc(100vh - 3.5rem);
    overflow: auto;
    pointer-events: none;
    opacity: 0;
    transition: top 0.4s, opacity 0.3s;
  }
  .nav_menu::-webkit-scrollbar {
    width: 0;
  }
  .nav_list {
    background-color: var(--black-color);
    padding-top: 1rem;    
  }  
  /* Show menu */
.show-menu {
  top: 3.5rem;
  opacity: 1;
  pointer-events: initial;
}
.show-icon .nav_burger {
  opacity: 0;
  transform: rotate(90deg);
}
.show-icon .nav_close {
  opacity: 1;
  transform: rotate(90deg);
}

}
@media screen and (max-width:340px) {
  .container {
    margin-inline: 1rem;
  }
  .nav_logo {
    width: 20px;
  }
  
  .header {
    width: 100%;
  }
  .nav_toggle {
    position: relative;
  }
  .nav_close {
   margin-left: 2rem;
  }
  .with-text, .ulsan-text {
   font-size: 1rem;
  }
}



@media screen and (min-width: 1119px) {
  .container {
    margin-inline: auto;
  }
  .nav {
    height: calc(var(--header-height) + 2rem);
    display: flex;
    justify-content: space-between;
  }
  .nav_toggle {
    display: none;
  }
  .nav_list {
    height: 100%;
    display: flex;
    column-gap: 2rem;
  }
  .nav_link {
    height: 100%;
    padding: 1rem;
    justify-content: initial;
    column-gap: 0.25rem;
  }
  .nav_link:hover {
    background-color: transparent;
  }
  .dropdown_item {
    position: relative;
  }
  .dropdown_menu {
    max-height: inherit;
    overflow: inherit;
    position: absolute;
    width: 100%;
    top: 6rem;
    left: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s, top 0.3s;
  }
  .dropdown_link {
    padding-inline: 1rem 3.5rem;
  }
  .with-text {
    margin-left: 2rem;
  }
  .nav_logo {
    width: 40px;    
  }
  .logo_text {
    height: 100%;
    margin-top: 3rem;
  }  
  .dropdown_item:hover .dropdown_menu {
    opacity: 1;
    top: 5.5rem;
    pointer-events: inherit;
    transition: top 0.3s
  }
  .dropdown_link {
    padding-inline: 1rem;
  }

}

/* other style */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.3rem 10%;
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  z-index: 100;     

}
/* Appbar color */
.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;    
  background: linear-gradient(to left, rgb(0, 9, 60), rgb(45, 11, 0));
  filter: blur(20px);
  backdrop-filter: blur(50px);
  z-index: -1;
 
}
.header::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: 0.5s;
 
}
.header:hover::after {
  left:100%;
}
.logo {  
  color: #fff;  
  margin: 0 5px 0 0 ;
  text-decoration: none;    
}
.navbar .link {
  font-size: 1.15rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  margin-right: 2rem;
}
.navbar .link:hover {
  color: black;
  background: rgb(201, 199, 199);
  border-radius: 5px;
  transition: 0.5s ease-in-out;
}
#check {
  display: none;
}
.icons {
  position: absolute;
  right: 5%;
  font-size: 2.8rem;
  color: #fff;
  cursor: pointer;
  display: none;
}
.logo-text {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 992px) {
  .header {
   padding: 1.3rem 5%; 
  }
  .profile {
    margin-right: 25px;
  }
}
@media screen and (max-width: 768px) {
  .icons {
    display: inline-flex;
    margin-right: 30px;
  }  
  .profile {
    margin-right: 65px;
  }  
  #check:checked~.icons #menu-icon {
    display: none;
  }
  .icons #close-icon {
    display: none;
  }
  #check:checked~.icons #close-icon {
    display: block;
  } 
  .logo-text span {
    font-size: 1.2rem;
  }
  .navbar {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;        
    height: 0;
    /* background: red; */
    background: rgba(0, 0, 0, 0.3);    
    backdrop-filter: blur(50px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    /* overflow: hidden; */
    transition: 0.3s ease;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    /* overflow: hidden; */
    transition: 0.3s ease;
  }
  #check:checked~.navbar {
    height: 16rem;
  }
  
  .navbar .link {
    display: block;
    font-size: 1.1rem;   
    margin: 1.5rem 0;
    text-align: center;
    transform: translateY(-10px);
    transition: 0.3s ease;
    opacity: 0;
  }
  #check:checked~.navbar .link {
    transform: translateY(0);  
    opacity: 1;
    transition-delay: calc(0.15s * var(--i));  
    }
  .logout {
    position: relative;
    top: 0;
    right: 20%;
  } 
}
/* Profine */
.profile {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #343232;
  font-weight: bolder;
  /* background: linear-gradient(to right, #06e56e, #083de9); */
  background-color: #eae699;
  box-shadow: 0 4px 6px 1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.006);
}
.profile span {
  pointer-events: none;
}               

.profile-menu {
    position: absolute;
    top: 60px;
    right: 0;
    width: 250px;
    background-color: #303030;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.006);
    transition: transform 0.3s ease-in-out;
}
.profile-menu .info
{
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #fff;
}
                    

.initials {
  position: initial;
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-weight: bolder;
  color: #303030;
  background-color: rgba(246, 235, 217, 0.8); 
}

.right {
  flex: 1;
  margin-left: 24px;
  color: white;
}
.right p:nth-child(1) {
  font-size: 14px;
  }
  
.right P:nth-child(2),
.right p:nth-child(3) {
  font-size: 12px;
  }
.options {
padding: 15px;
}
.options .option {
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 12px;  
}
.options .option .icon {
      width: 18px;
      height: auto;
  }
  p {
      font-size: 14px;
      margin-left: 12px;
  }
  .options:last-child {
    margin-bottom: o;
  }
  p:nth-last-child {
    margin-bottom: 0px;
  }
</style>