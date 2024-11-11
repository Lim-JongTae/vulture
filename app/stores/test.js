import { defineStore } from "pinia";

export const useTestStore = defineStore('test', () => {
  const count = ref(0)
  const countDouble = computed(() => {
    return count.value * 2
  })
  const incrementNum = () => {
    count.value++
  }
  const decrementNum = () => {
    count.value--
  }
  return { count, countDouble, incrementNum, decrementNum }
})