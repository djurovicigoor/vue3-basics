<script setup>
import { useFlash } from '@/composables/useFlash'

let { flash } = useFlash()
</script>

<template>
  <main>
    <button @click="flash('Hello from the Home View')">Click me</button>
  </main>
</template>