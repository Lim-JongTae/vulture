<template>
  <div class="mt-10 flex-st-st flex-col w-[440px] w-cal p-6 gap-5 dark:bg-gray-700 bg-slate-50 box-sh-maker rounded-2xl cursor-pointer" @click="openSite">
    <NuxtLink :to="data.url" target="_blank">
    <div class="w-auto min-h-full rounded-xl ">
      <img v-if="data.urlToImage" :src="data.urlToImage" alt="" class="w-392 h-[260px] rounded-xl img-edit" />
      <div v-else class="flex-ce-ce border rounded-xl text-gray-800 dark:text-gray-300 no-img"><span class=" mt-40">등록된 이미지가 없습니다.</span></div>     
    </div>
    <div class="flex-ce-ce flex-col w-full">
      <div class="flex flex-ce-st flex-col w-full h-[88px] gap-2">
          <div class="flex flex-ce-st w-full gap-2 ">
            <img :src="logo" alt="" class="w-[20px] h-[20px] rounded-3xl bg-white dark:bg-gray-500" />
            <span class="notosans-font flex-ce-ce text-sm text-gray-900 font-semibold dark:text-gray-50">{{ data.name }}</span>
          </div>
          <span class="notosans-font flex-ce-st w-full h-[48px] text-gray-950 overflow-hidden whitespace-normal text-ellipsis text-line dark:text-gray-50">{{ data.title }}</span>
      </div>
      <div class="w-full h-[84px]">
          <span class="w-full h-full text-xs text-gray-700 overflow-hidden text-ellipsis whitespace-normal text-line">
            <span class="poppins-font dark:text-gray-100">{{ data.content }}</span>
          </span>
      </div>
    </div>
    <div class="flex-ce-st w-full h-[40px] gap-2">
      <div class="flex-ce-ce">
        <UIcon name="i-heroicons-user-group" alt="" class="w-[32px] h-[32px] rounded-3xl" />
      </div>
      <div class="flex-ce-st flex-col">
        <span class=" text-xs text-gray-900 dark:text-gray-100">{{ data.author }}</span>
        <span class="text-xs text-gray-400 dark:text-gray-50">{{ dayjs(data.publishedAt).format('YYYY-MM-DD HH:mm:ss') }}</span>        
      </div>
    </div>
  </NuxtLink>
  </div>
</template>

<script setup>
import dayjs from 'dayjs';

const props = defineProps({
  data: {
    type: Array,    
    Required: false,
    dafault: () => []
  },
})

const website = computed(() => {  
  try {
    return props.data.url.split("https://").pop().split("/")[0] || ""

  } catch (error) {
    console.log(error)
  }
})
const logo = computed(() => {
  console.log('data', props.data)
  console.log('url', props.data.url)
  return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${website.value}&size=16` 
})

</script>

<style scoped>
.w-cla {
  width: calc(360px-48px);
}
.text-line {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all; 
  /* // 문단으로 끊어져서 줄바꿈 됨 */
}
.img-edit {
  margin: auto;
  object-fit: contain;
  border-radius: 8px;
  
}
.no-img {
  background: url(/logo_100.png) no-repeat; 
  
  width: 392px;
  height: 260px;
  background-position: center;
  object-fit: cover; 
}

</style>