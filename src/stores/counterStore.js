import { reactive } from 'vue'

export let counter = reactive({
  count: 0,
  increment(){
    this.count++
  }
})