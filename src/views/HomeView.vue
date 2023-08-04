<script setup>
import { useStorage } from '@/composables/useStorage'

let car = useStorage('car', 'Jaguar')
let age = useStorage('age', 28)

</script>

<template>
  <main>
    <p>What is your favorite car? <input type="text" v-model="car" /></p>
    <p>{{ car }}</p>
      <br>
    <p>How old are you? <input type="text" v-model="age" /></p>
    <p>{{ age }}</p>
  </main>
</template>