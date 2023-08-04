import { reactive } from 'vue'

export let currency = reactive({
  name: 'Dollar',
  symbol: '$',
  format: '$x,x.x',
  code: 'USD'
})