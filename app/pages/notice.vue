<template>
  <div >  
    <!-- <section class="home" id="home">
      <div class="home-content mt-10">           
        <h1>2025년</h1>
        <h3>울산독수리학교 <span>개강 안내</span></h3>        
        <NuxtLink to="https://docs.google.com/forms/d/1Sd0uzj4rjhOdu30Y5b53QKHM3bEby9ofmlgWRlJ7OJw/edit?usp=sharing" class="btn">참가신청</NuxtLink>
      </div>
    </section> -->
       <section class="portfolio" id="portfolio" >
        <h2 class="heading"><span></span></h2>        
        <div class="portfolio-container" >
          <div class="portfolio-box cursor-pointer" @click="handleNotice">            
            <NuxtImg src="./2024-2025독수리학교.jpg" alt="" />             
          </div>
        </div>   
        <!-- <div class="social-media">
          <NuxtLink class="link-a"><UIcon name="i-mdi-facebook" ></UIcon></NuxtLink>
          <NuxtLink class="link-a"><UIcon name="i-mdi-youtube" ></UIcon></NuxtLink>
          <NuxtLink class="link-a"><UIcon name="i-mdi-twitter"></UIcon></NuxtLink>
          <NuxtLink class="link-a"><UIcon name="i-mdi-instagram"></UIcon></NuxtLink>
        </div>      -->
       </section>
       <!-- contact section disign -->
       <!-- <section class="contact" id="contact">
        <h2 class="heading"> <span>Me!</span></h2>
        <form action="">
          <div class="input-box">
            <input type="text" placeholder="Full Name">
            <input type="email" placeholder="Email">
          </div>
          <div class="input-box">
            <input type="number" placeholder="Phone Number">
            <input type="text" placeholder="Email subject">
          </div>
          <textarea name="" id="" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" class="btn">
        </form>
       </section> -->
       <!-- Footer Design -->
        <!-- <footer class="footer">
          <div class="footer-text">
            <p>Copyright &copy;{{ year }} <span>대부도탐조대회추진위원회</span> </p>
          </div> -->
          <!-- <div class="footer-iconTop">
            <NuxtLink class="link-top" to=""><UIcon class="link-top-icon w-10 h-10 text-gray-900" name="i-heroicons-arrow-long-up-16-solid" /></NuxtLink>
          </div> -->
        <!-- </footer> -->
  </div>
</template>

<script setup>
// const sections = ref(null)
// sections.value = document.querySelectorAll("section")
// console.log(sections.value)
// // navLinks.value = document.querySelectorAll('header nav .link')
// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY
//     let offset = sec.offsetTop - 150
//     let height = sec.offsetHeight
//     let id = sec.getAttribute('id')
//     if(top >= offset && top < offset + height) {
//       navLinks.forEach(links => {
//         links.classList.remove('active')
//         document.querySelector('header nav .link[href*='+ id + ']').classList.add('active')
//       })
//     }
//   })
// }
const thisYear = new(Date)
const year = thisYear.getFullYear()
const handleNotice = async () => {
  const url = 'https://forms.gle/BJKKnV6KuVK6kveRA'
    navigateTo(url, {
      open: {
        target: '_blank',
      }  
    }
    )
}

</script>

<style scoped>

:root {
  --bg-color: #1f242d;
  --second-bg-color: #323946;
  --text-color: #fff;
  --main-color: #0ef;
}
html {
  font-size: 62.5%;
  overflow-x: hidden;
}
body {
  background: var(--bg-color);
  color: var(--text-color);
}
section {
  /* min-height: 100vh; */
  padding: 1rem 9% 2rem;
}
.img-edit {
  border: 3xp solid var(--main-color);
  width: 60%;
  height: 60%;
  object-fit: cover;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 9%;
  background: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}
.logo {
  font-size: 2.5rem;
  color: var(--text-color);
  font-weight: 600;
  cursor: default;
}
.navbar .link {
  font-size: 1.7rem;
  color: var(--text-color);
  margin-left: 4rem;
  transition: 0.3s;
}
.navbar .link:hover {
  color: var(--main-color);
}
.navbar .link:hover,
.navbar .link.active {
  color: var(--main-color)
}
#menu-icon {
  font-size: 3.6rem;
  color: var(--text-color);
  display: none;
}
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin-top: -10rem;
  
}
.home-content h3 {
  font-size: 3.2rem;
  font-weight: 700;
  
}
.home-content h3:nth-of-type(2) {
  margin-bottom: 2rem;
}
span {
  color: var(--main-color);
}
.home-content h1 {
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 1.3;
  opacity: 0;
  animation: fadeIn 3s infinite;
  transition: 1.5s  ease;
  ;
}
.home-img img {
  width: 75vw;
  /* animation: floatImage 4s infinite ease-in-out; */
  
}
.home-content p {
  font-size: 1.8rem;  
}
.social-media .link-a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border: 0.2rem solid var(--main-color);
  border-radius: 50%;
  font-size: 2rem;
  margin: 3rem 1.5rem 3rem 0;
  color: var(--main-color);
  transition: 0.5s ease;
}
.social-media .link-a:hover {
  background: var(--main-color);
  color: var(--second-bg-color);
  box-shadow: 0 0 1rem var(--main-color);
}
.btn {
  display: inline-block;
  padding: 1rem 2.8rem;
  background: var(--main-color);
  border-radius: 4rem;
  box-shadow: 0 0 1rem var(--main-color);
  font-size: 1.6rem;
  color: var(--second-bg-color);
  letter-spacing: 0.1rem;
  font-weight: 600;
  transition: 0.5s ease;
}
.btn:hover {
  box-shadow: none;
}
/* about page */
.about {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: var(--second-bg-color);  
}
.about-img img {
  width: 35vw;
}
.heading {
  text-align: center;
  font-size: 4.5rem;
}
.about-content h2 {
  text-align: left;
  line-height: 1.2;
}
.about-content h3 {
  font-size: 2.6rem;
}
.about-content p {
  font-size: 1.6rem;
  margin: 2rem 0 3rem;
}
/* services page */
.services h2 {
  margin-bottom: 5rem;
}
.services-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem; 
}
.services-container .services-box {
  flex: 1 1 30rem;
  background: var(--second-bg-color);
  padding: 3rem 2rem 4rem;
  border-radius: 2rem;
  text-align: center;
  border: 0.2rem solid var(--bg-color);
}
.services-box .icon {
  color: var(--main-color);
}
.services-box h3 {
  font-size: 2.6rem;
}
.services-box p {
  font-size: 1.6rem;
  margin: 1rem 0 3rem;
}
/* portfolio design */
.portfolio {
  background: var(--second-bg-color);
}
.portfolio h2 {
  margin-bottom: 4rem;
  font-weight: 700;
}
.portfolio-container {
  display: grid;
  grid-template-columns: repeat(1fr);
  align-items: center;
  gap: 2.5rem;
}
.portfolio-container .portfolio-box{
  position: relative;
  border-radius: 2rem;
  box-shadow: 0 0 1rem var(--bg-color);
  overflow: hidden;
  display: flex;
}
.portfolio-box img {
  width: 100%;  
  transition: 0.5s ease;
}
.portfolio-box:hover img {
  transform: scale(1.1); 
}
.portfolio-box .portfolio-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient( rgba(0, 0, 0, 0.1), var(--main-color));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 4rem;
  transform: translateY(100%);
  transition: 0.5s ease;
}
.portfolio-box:hover .portfolio-layer {
  transform: translateY(0);
}
.portfolio-layer h4 {
  font-size: 3.6rem;  
}
.portfolio-layer p {
  font-size: 1.6rem;
  margin: 0.3rem 0 1rem;
}
.portfolio-layer .link-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  background: var(--text-color);
  border-radius: 50%;
}
.portfolio-layer .iconify {
  color: var(--main-color);
  
}
/* Contact design */
.contact h2 {
  margin-bottom: 3rem;
}
.contact form {
  max-width: 70rem;
  margin: 1rem auto;
  text-align: center;
  margin-bottom: 3rem;
}
.contact form .input-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.contact form .input-box input,
.contact form textarea {
  width: 100%;
  padding: 1.5rem;
  font-size: 1.6rem;
  color: var(--text-color);
  background: var(--second-bg-color);
  border-radius: 0.8rem;
  margin: 0.7rem 0;
}
.contact form .input-box input {
  width: 49%;
}
.contact form textarea {
 resize: none; 
}
.contact form .btn {
  margin-top: 2rem;
  cursor: pointer;
}
/* footer Design */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 9%;
  background: var(--second-bg-color);
}
.footer-text p {
  font-size: 1.6rem;
}
.footer-iconTop .link-top {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  background: var(--main-color);
  border-radius: 0.8rem;
  transition: 0.5s ease;
}
.footer-iconTop .link-top:hover {
  box-shadow: 0 0 1rem var(--main-color);
  
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes floatImage {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2.4rem);
  }
  100% {
    transform: translateY(0);
  }
}
@media screen and (max-width: 550px) {
  .home-content h3 {
    font-size: 1.2rem;
    font-weight: 700;
  }  
  .home-content h1 {
    font-size: 2.2rem;
    font-weight: 700;
  }  
  .about-content h2 {
    font-size: 2.2rem;
    font-weight: 700;
  }
  .about-content p {
    font-size: 1.2rem;
    font-weight: 700;
  }  
}
</style>