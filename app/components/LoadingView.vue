<template>
  <div class="box">
    <div class="loader">
  </div>
  </div>
</template>
<script>
</script>

<style scoped>
.loader{
  position: relative;
  width: 5px;
  height: 5px;
  top: 49%;
  top: -webkit-calc(50% - 43px);
  top: calc(50% - 2.5px);
  left: 49%;
  left: -webkit-calc(50% - 43px);
  left: calc(50% - 2.5px);
  background-color: #fff;
  border-radius: 50px;
  
}

.loader:before{
  content: "";
  position: absolute;
  top: 208px;
  border-top: 3px solid #c79706;
  border-right: 3px solid #fff;
  border-radius: 0 50px 0px  0;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, .1);
 
  -webkit-transform-origin:  0% 100%;
      transform-origin:  0% 100% ;
  -webkit-animation: loader 1.5s linear infinite;
      animation: loader 1.5s linear infinite;
}

.loader:after{
  content: "";
  position: absolute;
  top: 2px;
  right: 2px;
  border-bottom: 3px solid #fff;
  border-left: 3px solid #fff;
  border-radius: 0 0px 0px  50px;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, .1);  
  -webkit-transform-origin:  100% 0%;
      transform-origin:  100% 0% ;
  -webkit-animation: loader 1.5s linear infinite;
      animation: loader 1.5s linear infinite;
  
}


@-webkit-keyframes loader{
    0%{-webkit-transform:rotate(0deg);}
    100%{-webkit-transform:rotate(360deg);}
}

@keyframes loader{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
}

</style>