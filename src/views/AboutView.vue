<script setup>
import { useFlash } from '@/composables/useFlash'

let { flash } = useFlash()
</script>
<template>
  <div>
  <p>
      <button @click="flash('Yay' , 'Hello from About View.' , 'info')">Click me</button>
  </p>
  </div>
</template>

<style>
</style>