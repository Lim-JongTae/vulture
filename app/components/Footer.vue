<template>
  <footer>
    <div class="container relative">
      <div class="left">
        <div class="col-1">
          <!-- <NuxtLink class="header" to="/">
            <div class="fonts">
              <p>
                   <img src="../assets/logo.png" style="width: 20%;" alt="">
                   </p>
                <span class="lobster-regular">With</span>
                <span class="bagel-fat-one-regular">울산독수리</span>
              </div>
            </NuxtLink> -->
              <ul>
                <li><NuxtLink href="#"><NuxtImg src="/Icons/youtube-brands.svg" width="25px" /></NuxtLink></li>
                <li><NuxtLink href="#"><NuxtImg src="/Icons/twitter-brands.svg" width="25px" /></NuxtLink></li>
                <li><NuxtLink href="#"><NuxtImg src="/Icons/instagram-brands.svg" width="25px" /></NuxtLink></li>
                <li><NuxtLink href="#"><NuxtImg src="/Icons/linkedin-brands.svg" width="25px" /></NuxtLink></li>
              </ul>
            </div>
            <div class="col-2">
              <ul class="mr-60">
                <NuxtLink class="link" to="/">Home</NuxtLink>
                <NuxtLink class="link" to="/views/blogs">Blogs</NuxtLink>
                <NuxtLink class="link" to="/aboutUs">About Us</NuxtLink>
                <NuxtLink v-if="!admin" class="link" to="/donation">후원하기</NuxtLink>
                <NuxtLink v-if="admin" class="link" to="/createPost">Create Post</NuxtLink>
                <NuxtLink v-if="!user" class="link" to="/auth/login" v-if="!user">Login/Register</NuxtLink>
              </ul>
            </div>
            <div class="right absolute bottom-0 right-0">
          <p>Copyright<strong>&copy; {{ new Date().getFullYear() }} All Rights Reserved</strong></p>
        </div>
      </div>        
    </div>
  </footer>
</template>

<script setup>
import { useUsersStore } from '~/stores/useUsers'
const useStore = useUsersStore()

const isYear = ref(null)
const user = computed(() => useStore.userId)
const admin = computed(() => useStore.pAdmin)
</script>

<style scoped>
@media screen and (min-width: 800px ) {
  .left {
    flex-direction: row;
    align-items: initial;
    gap: 0
  }
  footer .container {
    flex-direction: row;
    gap: 0;
  }
  .col-1 h2 {   
    text-align: initial;   
  }
  .col-2 ul {
    flex-direction: column;
    margin-left: 15rem;
  } 
  .right {
    gap: 0;
    position: absolute;
    margin:9rem 0 0 48rem;
  } 
  .header {
    text-align: initial;
  }
}
footer {
    margin-top: auto;
    padding: 3rem 2rem ;
    padding-bottom: 2.5rem;
    background-color: teal;  
}
footer .container {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
}  
footer .container > div {
    display: flex;
    flex: 1;
}
.left {
  gap: 3.2rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {        
  text-align: center;
  box-sizing: border-box;
  font-size: 2.4rem;  
  color: #fff;
  text-decoration: none;
  font-weight: 600; 
}       
.fonts {
  width: 16rem;
}               
             
.lobster-regular {
  font-family: "Lobster", sans-serif;
  font-weight: 200;
  font-style: normal;
  color: black;                 
  }
.bagel-fat-one-regular {
    font-family: "Bagel Fat One", system-ui;
    font-weight: 200;
    font-style: normal;
    margin-left: 0.8rem;                    
}
           
ul {
  gap: 1rem;  
  display: flex;
  justify-content: center;   
  align-items: center;    
}

.col-1,
.col-2 {
  gap: 3.2rem;
  display: flex;
  flex: 1;              
}

.col-1 {
    flex-direction: column;
}                         
  .col-1 h2 {
    text-align: center;  
    }
  ul {
      margin-top: auto;
  }
  ul li {
    display: flex;
    align-items: center;
  }
  ul li .svg-icon {
      width: 2.4rem;
      height: auto;
      color: #fff;
  }

                  
    .col-2 ul .link {
      font-size: 1.2em;
      font-weight: 500;
      color: #fff;
      text-decoration: none;
  }       
.right {
    gap: 3.2rem;
    color: #fff;
    align-items: center;            
}     
           
    p {
        margin-top: auto;  
        color: #fff;              
    }
    

</style>