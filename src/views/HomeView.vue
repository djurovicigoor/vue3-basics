<script setup>
import Modal from '@/components/Modal.vue'
import {useCounterStore} from "@/stores/counterStore";

let counter = useCounterStore();
</script>

<template>
  <div>
      <h1>{{counter.count}}</h1>
    <Modal />
  </div>
</template>