<template>
  <div class="flex space-x-2 items-center move-right">
    <div class="text-gray-500 text-xs dark:text-slate-50" v-if="showNextModelLabel"></div>
    <UButton @click="toggleMode"       
      class="dark:hover:bg-gray-800 px-2 py-1 text-gray-500 hover:bg-white bg-white dark:bg-gray-800 color-none" >
      {{ nextModeIcon }}
    </UButton>
  </div>
</template>

<script setup>
  const showNextModelLabel = ref(false)
  const colorMode = useColorMode()
  const modes = [
    // 'system',
    'light',
    'dark'
  ]
  const nextModeIcons = {
    // system: '🌓',
    light: '🌕',
    dark: '🌜'
  }

  const nextMode = computed (() => {
    const currentModeIndex = modes.indexOf(colorMode.preference)
    let nextModeIndex = null
    if (currentModeIndex + 1 === modes.length) {
      nextModeIndex = 0
    } else {
      nextModeIndex = currentModeIndex + 1
    }
    return modes[nextModeIndex]
  })
  const nextModeIcon = computed (() => nextModeIcons[nextMode.value])
  const toggleMode = () => colorMode.preference = nextMode.value
</script>

<style scoped>
.move-right {
  position: absolute;
  top: 29%;
  right: 3%;
}
.color-none {
  background: transparent;
  border: 1px grey solid;
  
}
/* @media screen and (max-width: 768px) {
  .color-none{
    display: none;
  }  
} */
</style>