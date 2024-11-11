<template>
  <div class="body-nav">
    <nav>
      <ul class="sidebar">        
        <li @click="closeSidebar()"><NuxtLink to="/" class="link"><MdiIcon icon="mdiClose" size="1.5rem" /></NuxtLink></li> 
        <li><NuxtLink to="/" class="link">Home</NuxtLink></li>
        <li><NuxtLink to="/" class="link">Blogs</NuxtLink></li>
        <li><NuxtLink to="/" class="link">Create Post</NuxtLink></li>
        <li><NuxtLink to="/" class="link">Login/Register</NuxtLink></li>              
        <li><UButton class=" mt-2 mr-4">Signout</UButton></li>                     
      </ul>
      <ul>
        <li>
          <NuxtLink to="/"> 
            <div class="logo-text flex">
              <NuxtImg class="logo ml-3" src="/logo.png" width="30px" format="Webp" />            
                <span class="lobster-regular text-3xl ml-6">With</span>
                <span class="bagel-fat-one-regular text-3xl ml-2">울산독수리</span>              
            </div>
          </NuxtLink>
        </li>
        <li class="hideOnMobile"><NuxtLink to="/" class="link">Home</NuxtLink></li>
        <li class="hideOnMobile"><NuxtLink to="/" class="link">Blogs</NuxtLink></li>
        <li class="hideOnMobile"><NuxtLink to="/" class="link">Create Post</NuxtLink></li>
        <li class="hideOnMobile"><NuxtLink to="/" class="link">Login/Register</NuxtLink></li>              
        <li><UButton class="mt-2 mr-4">Signout</UButton></li> 
        <li class="menu-button" @click="showSidebar()"><NuxtLink to="/" class="link"><MdiIcon icon="mdiMenu" size="2rem" /></NuxtLink></li>                      
      </ul>
    </nav>
  </div>
</template>

<script setup>

const showSidebar = () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex'
}
const closeSidebar = () => {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

</script>

<style scoped>
nav {
  width: 100%;
  background-color: white1;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
}
nav ul {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
nav li {
  height: 50px;
}
nav .link {
  height: 100%;
  padding: 0 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: black;
}
nav .link:hover {
  background-color: #f0f0f0;
}
nav li:first-child {
  margin-right: auto;
}
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  z-index: 999;
  background-color: grey;
  backdrop-filter: blur(50px);
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.2);
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.sidebar li {
  width: 100%;
}
.sidebar .link {
  width: 100%;
}
.menu-button {
  display: none;
}
@media screen and (max-width: 940px) {
  .logo {
    width: 20px;    
  }
  .logo-text span {
    font-size: 20px;
  }
}
@media screen and (max-width: 870px) {
   .logo-text span {
    font-size: 20px;
  }
  .logo {   
    width: 25px;
  }
}
@media screen and (max-width: 800px) {
  .hideOnMobile {
    display: none;
  }
  .menu-button {
    display: block;
  }
 
  .logo {
    margin: 13px 0 0 13px;
    width: 28px;
    height: 28px;
  }

}
@media screen and (max-width: 400px) {
  .sidebar {
    width: 100%;
  }
}
</style>