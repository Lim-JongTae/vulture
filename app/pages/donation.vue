<template>
	<main>
    <section class="parallax">
      <img src="/parallax/hill1.png" id="hill1" alt="">
      <img src="/parallax/hill2.png" id="hill2" alt="">
      <img src="/parallax/hill3.png" id="hill3" alt="">
      <img src="/parallax/mark/2.png" id="text22" alt="">
      <img src="/parallax/hill4.png" id="hill4" alt="">
      <img src="/parallax/mark/5.png" id="text11" alt="">
      <img src="/parallax/mark/4.png" id="text23" alt="">
      <img src="/parallax/mark/3.png" id="text12" alt="">
      <img src="/parallax/hill5.png" id="hill5" alt="">
      <img src="/parallax/tree.png" id="tree" alt="">
      <!-- <h2 id="text"> 다음세대를 위한 시민행동<br><span id="text-sub">다음세대를 위한 지속가능한 발전 녹색에너지운동이 함께 합니다🌐 -->
      <h2 id="text"> 다음세대를 위한 시민행동</h2>
      <p id="text2">다음세대를 위한 지속가능한 발전 녹색에너지운동이 함께 합니다💚</p>
      <img src="/parallax/leaf.png" id="leaf" alt="">      
      <img src="/parallax/mark/1.png" id="text13" alt="">
        <img src="/parallax/plant.png" id="plant" alt="">
    </section>
  <section class="sec">
    <h2>당신은 이미 지구시민사회의 일원입니다<span class="spin"></span><a href="https://forms.gle/7xDbQaVxUeuQAEKW9" target="_blank"><button class="btn1">후원하기</button></a></h2>
    <ul>
      <li class="title">
        <h3><span>1</span>녹색기후행동에 동참</h3>
        <p>
          녹색회원이 되시면 지구적 의제인 기후변화대응, 생물다양성, 지속가능개발목표(SDGs)와
          관련한 각종활동정보와 소식을 공유하게 됩니다. 녹색회원은 지구시민으로서 그 가치를 '
          공유하게 됩니다.
        </p>
      </li>
      <li class="title">
        <h3><span>2</span>회원및 교육 프로그램 참여</h3>
        <p>
          녹색에너지 운동과 관련된 각종 교육, 세미나, 심포지움, 토론회 등에 참석이 가능하며
          e-mail을 통해 여러 소식과 정보를 공유하게 됩니다.<br>또한 비용이 추가되는 각종 교육
          의 경우 추가적인 할인 혜택이 있습니다.
        </p>
      </li>
      <li class="title">
        <h3><span>3</span>기부금에 대한 세제 혜택</h3>
        <p>
          회원들이 후원하는 회비는 공익성지정기부금에 해당되어 연말정산시 세제
          혜택을 받으실수 있습니다.
        </p>
      </li>
    </ul>  
   
    <!-- <div class="card">
     <h2>후원하기</h2>  
    </div>   -->
  </section>
 
    </main>
</template>
<script>
export default {
  data () {},
  mounted () {
   let text = document.getElementById('text')
  let leaf = document.getElementById('leaf')
  let hill1 = document.getElementById('hill1')
  let hill4 = document.getElementById('hill4')
  let hill5 = document.getElementById('hill5')
  let text2 = document.getElementById('text2')
  let text22 = document.getElementById('text22')
  let text23 = document.getElementById('text23')
  let text11 = document.getElementById('text11')
  let text12 = document.getElementById('text12')
  let text13 = document.getElementById('text13')

  window.addEventListener ('scroll', () => {
    let value = window.scrollY
    let textHeight = text.offsetHeight

  text.style.marginTop = value > 300 ? 900+'px' : value * 2.5 + 'px'
  text2.style.marginTop = value *  'px'
  leaf.style.left = value > 200 ? 0+'px' : value * 1.5 + 'px'
  hill5.style.left = value > 200 ? 0+'px' :value * 1.5 + 'px'
  hill4.style.left = value > 200 ? 0+'px' :value * -1.5 + 'px'
  leaf.style.top = value > 300 ? 900+'px' : value * -1.5 + 'px'
  hill1.style.top = value > 300 ? 900+'px' :value * 1 + 'px'
  text22.style.marginTop = value > 300 ? 900+'px' : value * 3.5 + 'px'
  text23.style.marginTop = value > 300 ? 900+'px' : value * 3.5 + 'px'
  text11.style.marginTop = value > 300 ? 900+'px' : value * 3.5 + 'px'
  text12.style.marginTop = value > 300 ? 900+'px' : value * 3.5 + 'px'
  text13.style.marginTop = value > 300 ? 900+'px' : value * 3.5 + 'px'

  if ( value >= textHeight) {
    text2.style.color = '#003329'
  }

  if ( value <= textHeight) {
    text2.style.color = '#fff'
  }
})
  },
  beforeUnmount () {
    this.value = 0
  }
}


</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Hahmlet:wght@100..900&family=Lobster&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Hahmlet:wght@100..900&family=Jua&family=Lobster&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  background: #f9f9f9;
  min-height: 100vh;
  /* max-height: 500px; */
  max-width: 1700px;
  /* overflow: hidden; */
}
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;  
  z-index: 100;
}
.logo {
  font-family: "Jua", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 2em;
  color: #359381;
  pointer-events: none;
  margin-right: 270px;
}
.navigation a {
  text-decoration: none;
  color: #359381;
  padding: 6px 15px;
  border-radius: 20px;
  margin: 0 10px;
  font-weight: 600;
}
.navigation a:hover, .navigation a.active {
  background: #359381;
  color: #fff;
}
.parallax {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;    
}
@media (max-width:800px) {
  #text13, #text22, #text12, #text23, #text11 {
    width: 100%;
    height: auto;
    position: absolute;
    top: 10%;
  }
}
#text {
  font-family: "Jua", sans-serif;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0.1em;
  position: absolute;  
  font-size: 4em;
  color: #fff;  
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
}
@media (max-width:800px) {
  #text {
    font-size: 2.2em;
  }
}
#text2 {
  position: absolute;
  font-family: "Jua", sans-serif;
  font-weight: 200;
  font-style: normal;
  top: 55%;    
  font-size: 2em;  
  color: #fff;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
}
@media (max-width:800px) {
  #text2 {
    font-size: 1.2em;
    
  }
}
.parallax img {
  position: absolute;
  top: 0;
  left: 0;
  /* max-width: 1669px;
  max-height: 919px; */
  width: 100%;   
  height: 100%;
  pointer-events: none;
}
.sec {
  position: relative;
  background: #003329;
  padding: 50px;   
  max-height: 800px;
  height: 100%;
  padding-bottom: 400px;
  width: 100%;
 
}
.sec h2 {
  font-size: 2em;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);  
}
@media (max-width:800px) {
  .sec h2 {
    font-size: 1.1em;
  }
}
.sec .spin {  
  margin-left: 10px;
  position: relative;
  border-radius: 30px;
  background: #1c1f2b;
}

.sec p {
  font-size: 1em;
  color: #fff;
  font-weight: 300;
}
.sec ul {
  list-style: none;
}
.title h3 {  
  color: #fff;
  margin: 15px 0;
}
@media (max-width:800px) {
  .title h3 {
    font-size: 1.1em;
  }
}
.title h3 span {
  display: inline-block;
  width: 25px;
  height: 25px;
  background: #359381;
  border-radius: 15px 15px 0 15px;
  margin-right: 15px;
  text-align: center;
  line-height: 25px;
}
.title p {
  margin:0 51px;
}
@media (max-width:800px) {
  .title p {
    font-size: 0.8em;
  }
}
@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
.card-wrap {
  min-height: 10vh;
  width: 100%;
  /* background: #359381; */
  /* color: #a2a5b3; */
}
.card {
  margin: 3px auto;
  padding: 2em;
  width: 200px;
  background: #003329;
  text-align: center;
  border-radius: 10px;
  position: relative;
  border: 2px solid White;
}
h2 {
  color: white;
}
.card::after, .card::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: conic-gradient(from var(--angle), #ff4545, #00ff99, #006aff, #ff0095, #ff4545);  
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  padding: 3px;
  border-radius: 10px;
  animation: 3s spin linear infinite;
}
.card::before {
  filter: blur(1.5rem);
  opacity: 0.5;
}
@keyframes spin {
  from {
    --angel: 0deg;
  }
  to {
    --angle: 360deg;
  }
}
.btn1 {    
    font-size: 1.4rem;
    font-weight: 700;
    background: white;
    color: #003329;
    margin-left: 1rem;
    margin-bottom: 1rem;
    width: 10rem;
}
.btn1:hover {
  background: #003329;
  color: white;
  border: orange 1px solid;
  
}

</style>