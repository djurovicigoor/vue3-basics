<script setup>
import {inject} from "vue";

defineProps({
    dateFormat: String
})

let {name, changeName} = inject('name');

setTimeout(()=>{
    name.value = 'Jane Doe';
}, 3000)
</script>

<template>
    <p>{{name}}</p>
    <p style="background: red"> {{dateFormat}}</p>
    <button @click="changeName">Click me</button>
</template>

<style scoped>

</style>