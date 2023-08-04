<script setup>
import {currency} from "@/stores/currencyStore";

function update() {
    currency.name = 'Euro';
}


// let currency = inject('currency');
</script>

<template>
    <p style="background: red"> {{currency.name}}</p>
    <button @click="update">Click me</button>
</template>

<style scoped>

</style>