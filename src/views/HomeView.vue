<script setup>
import Modal from '@/components/Modal.vue'
import {currency} from "@/stores/currencyStore";
</script>

<template>
  <div>
      <h1>{{currency.name}}</h1>
    <Modal />
  </div>
</template>