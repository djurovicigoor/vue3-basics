<script setup>
  import {useCounterStore} from "@/stores/counterStore";

  let counter= useCounterStore();
</script>

<template>
    <div>
        <h1 style="color: #f8f8f8">{{ counter.count}}</h1>

        <button @click="counter.increment()">Increment ({{counter.remaining}} remaining)</button>
    </div>
</template>

<style scoped>

</style>