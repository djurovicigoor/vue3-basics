<script setup>
import ModalBody from '@/components/ModalBody.vue'
import {provide, ref} from "vue";

defineProps({
  dateFormat: String
})

let name = ref('John Doe');

provide('name' , {
    name,
    changeName: ()=> name.value = 'Changed'
});
</script>

<template>
    <h1>{{name}}</h1>
    <br>
  <ModalBody :dateFormat="dateFormat" />
</template>

<style scoped></style>