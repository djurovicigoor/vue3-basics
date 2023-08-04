import { ref, watch } from 'vue'

export function useStorage(key , val = null) {
  let storedVal = read();


  if (storedVal){
     val = ref(storedVal)
  } else{
    val = ref(val)
  }
  

  watch(val, () => {
    write()
  })

  function read(){
    return localStorage.getItem(key);
  }

  function write() {
    if (val.value === null || val.value === '') {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, val.value)
    }
  }

  return val
}