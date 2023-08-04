<script setup>
  import {counter} from "@/stores/counterStore";
</script>

<template>
    <div>
        <h1 style="color: #f8f8f8">{{ counter.count}}</h1>

        <button @click="counter.increment()">Increment</button>
    </div>
</template>

<style scoped>

</style>